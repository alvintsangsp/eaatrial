const fs = require('fs');
const path = require('path');

// Read the parsed document
const parsedFilePath = path.join(__dirname, '../tool-results/document--parse_document/20251102-161809-100260');
let parsedContent;

try {
  parsedContent = fs.readFileSync(parsedFilePath, 'utf-8');
} catch (error) {
  console.error('Error reading parsed document:', error.message);
  process.exit(1);
}

const lines = parsedContent.split('\n');
const questions = [];

// Helper function to escape strings for TypeScript
const escapeString = (str) => {
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
};

// Parse markdown table
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Skip header, separator, and empty lines
  if (!line.startsWith('|') || line.startsWith('|題號|') || line.startsWith('|-|')) {
    continue;
  }
  
  // Split by pipe and remove first/last empty elements
  const columns = line.split('|').slice(1, -1).map(col => col.trim());
  
  if (columns.length < 9) {
    continue;
  }
  
  const [id, question, optionA, optionB, optionC, optionD, optionE, correctAnswer, explanation] = columns;
  
  if (!id || !question || !correctAnswer) {
    continue;
  }
  
  questions.push({
    id: parseInt(id) || questions.length + 1,
    question,
    optionA,
    optionB,
    optionC,
    optionD,
    optionE: optionE && optionE.trim() ? optionE : undefined,
    correctAnswer: correctAnswer.trim(),
    explanation
  });
}

console.log(`Parsed ${questions.length} questions`);

// Generate TypeScript content
let tsContent = `export interface Question {
  id: number;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  optionE?: string;
  correctAnswer: string;
  explanation: string;
}

export const questions: Question[] = [
`;

questions.forEach((q, index) => {
  tsContent += `  {\n`;
  tsContent += `    id: ${q.id},\n`;
  tsContent += `    question: "${escapeString(q.question)}",\n`;
  tsContent += `    optionA: "${escapeString(q.optionA)}",\n`;
  tsContent += `    optionB: "${escapeString(q.optionB)}",\n`;
  tsContent += `    optionC: "${escapeString(q.optionC)}",\n`;
  tsContent += `    optionD: "${escapeString(q.optionD)}",\n`;
  
  if (q.optionE) {
    tsContent += `    optionE: "${escapeString(q.optionE)}",\n`;
  }
  
  tsContent += `    correctAnswer: "${q.correctAnswer}",\n`;
  tsContent += `    explanation: "${escapeString(q.explanation)}"\n`;
  tsContent += index < questions.length - 1 ? `  },\n` : `  }\n`;
});

tsContent += `];\n\n`;
tsContent += `export const getRandomQuestions = (count: number = 20): Question[] => {\n`;
tsContent += `  const shuffled = [...questions].sort(() => 0.5 - Math.random());\n`;
tsContent += `  return shuffled.slice(0, Math.min(count, questions.length));\n`;
tsContent += `};\n`;

// Write the file
const outputPath = path.join(__dirname, '../src/data/questions.ts');
fs.writeFileSync(outputPath, tsContent, 'utf-8');

console.log(`\n✅ Success!`);
console.log(`📊 Generated ${questions.length} questions`);
console.log(`📝 Output file: ${outputPath}`);

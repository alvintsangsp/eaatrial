const fs = require('fs');
const path = require('path');

console.log('Converting JSON to TypeScript...');

try {
  // Read the JSON file
  const jsonPath = path.join(__dirname, '../src/data/questions.json');
  console.log(`Reading JSON file from: ${jsonPath}`);
  
  const jsonData = fs.readFileSync(jsonPath, 'utf-8');
  const questions = JSON.parse(jsonData);
  
  console.log(`Found ${questions.length} questions in JSON file`);
  
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
  
  // Build TypeScript content
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

export const questions: Question[] = [\n`;
  
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
  
  // Write TypeScript file
  const outputPath = path.join(__dirname, '../src/data/questions.ts');
  fs.writeFileSync(outputPath, tsContent, 'utf-8');
  
  console.log(`\n✅ Success!`);
  console.log(`📊 Converted ${questions.length} questions to TypeScript`);
  console.log(`📝 Output file: ${outputPath}`);
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}

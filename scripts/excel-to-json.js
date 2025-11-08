const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

console.log('Converting Excel to JSON...');

try {
  // Read the Excel file
  const excelPath = path.join(__dirname, '../src/assets/香港地產代理人員資格考試（EAQE）/ 營業員資格 (SQE)_Questions_Set_v2.xlsx');
  console.log(`Reading Excel file from: ${excelPath}`);
  
  const workbook = XLSX.readFile(excelPath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet);
  
  console.log(`Found ${data.length} rows in Excel file`);
  
  // Process all rows
  const questions = [];
  
  data.forEach((row, index) => {
    // Try different possible column names
    const id = row['題號'] || row['题号'] || row['ID'] || (index + 1);
    const question = row['問題'] || row['问题'] || row['Question'] || '';
    const optionA = row['選項A'] || row['选项A'] || row['Option A'] || '';
    const optionB = row['選項B'] || row['选项B'] || row['Option B'] || '';
    const optionC = row['選項C'] || row['选项C'] || row['Option C'] || '';
    const optionD = row['選項D'] || row['选项D'] || row['Option D'] || '';
    const optionE = row['選項E'] || row['选项E'] || row['Option E'] || '';
    const correctAnswer = row['正確答案'] || row['正确答案'] || row['Correct Answer'] || '';
    const explanation = row['解釋'] || row['解释'] || row['Explanation'] || '';
    
    // Skip empty rows
    if (!question || !correctAnswer) {
      return;
    }
    
    const questionObj = {
      id: typeof id === 'number' ? id : parseInt(id) || questions.length + 1,
      question: String(question),
      optionA: String(optionA),
      optionB: String(optionB),
      optionC: String(optionC),
      optionD: String(optionD),
      correctAnswer: String(correctAnswer).trim(),
      explanation: String(explanation)
    };
    
    // Add optionE only if it exists and is not empty
    if (optionE && optionE.toString().trim()) {
      questionObj.optionE = String(optionE);
    }
    
    questions.push(questionObj);
  });
  
  // Write JSON file
  const outputPath = path.join(__dirname, '../src/data/questions.json');
  fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2), 'utf-8');
  
  console.log(`\n✅ Success!`);
  console.log(`📊 Converted ${questions.length} questions to JSON`);
  console.log(`📝 Output file: ${outputPath}`);
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}

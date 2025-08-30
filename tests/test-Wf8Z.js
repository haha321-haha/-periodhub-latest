// Test script to check assessment questions data
const fs = require('fs');
const path = require('path');

function testAssessmentData() {
  console.log('🔍 Testing assessment questions data...\n');
  
  try {
    // Read the assessment questions file
    const filePath = path.join(__dirname, 'app/[locale]/interactive-tools/shared/data/assessmentQuestions.ts');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Check if both zh and en sections exist
    const hasZhSection = fileContent.includes('zh: [');
    const hasEnSection = fileContent.includes('en: [');
    
    console.log('✅ File Structure Check:');
    console.log(`   Chinese section (zh): ${hasZhSection ? '✅ Found' : '❌ Missing'}`);
    console.log(`   English section (en): ${hasEnSection ? '✅ Found' : '❌ Missing'}`);
    
    // Check for specific questions
    const hasSleepQualityZh = fileContent.includes('您的睡眠质量如何？');
    const hasSleepQualityEn = fileContent.includes('How is your sleep quality?');
    
    console.log('\n✅ Sleep Quality Question Check:');
    console.log(`   Chinese: ${hasSleepQualityZh ? '✅ Found' : '❌ Missing'}`);
    console.log(`   English: ${hasSleepQualityEn ? '✅ Found' : '❌ Missing'}`);
    
    // Count questions in each section more accurately
    const zhSectionStart = fileContent.indexOf('zh: [');
    const enSectionStart = fileContent.indexOf('en: [');

    if (zhSectionStart !== -1 && enSectionStart !== -1) {
      const zhSection = fileContent.substring(zhSectionStart, enSectionStart);
      const enSection = fileContent.substring(enSectionStart);

      const zhQuestionCount = (zhSection.match(/{\s*id: '/g) || []).length;
      const enQuestionCount = (enSection.match(/{\s*id: '/g) || []).length;

      console.log('\n✅ Question Count:');
      console.log(`   Chinese questions: ${zhQuestionCount}`);
      console.log(`   English questions: ${enQuestionCount}`);
      console.log(`   Count match: ${zhQuestionCount === enQuestionCount ? '✅ Yes' : '❌ No'}`);

      // List some question IDs for verification
      const zhIds = (zhSection.match(/id: '([^']+)'/g) || []).slice(0, 5);
      const enIds = (enSection.match(/id: '([^']+)'/g) || []).slice(0, 5);

      console.log('\n✅ Sample Question IDs:');
      console.log(`   Chinese (first 5): ${zhIds.join(', ')}`);
      console.log(`   English (first 5): ${enIds.join(', ')}`);
    }
    
    // Check for proper export
    const hasExport = fileContent.includes('export const assessmentQuestions');
    console.log('\n✅ Export Check:');
    console.log(`   Proper export: ${hasExport ? '✅ Found' : '❌ Missing'}`);
    
    return true;
    
  } catch (error) {
    console.error('❌ Error reading assessment data:', error.message);
    return false;
  }
}

// Run the test
if (require.main === module) {
  testAssessmentData();
}

module.exports = { testAssessmentData };

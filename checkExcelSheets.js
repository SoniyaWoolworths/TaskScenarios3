const XLSX = require('xlsx');

const filePath = 'C:\\Users\\1502543\\Desktop\\NAVIGATION SCENARIOS\\testdata\\DSISpecialistaccess.xlsx';

console.log('📂 Reading Excel file:', filePath);
console.log('');

try {
    const workbook = XLSX.readFile(filePath);
    
    console.log('✅ File loaded successfully!');
    console.log('');
    console.log('📋 Available sheets:');
    workbook.SheetNames.forEach((sheetName, index) => {
        console.log(`  ${index + 1}. "${sheetName}"`);
        
        // Get sheet data
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet);
        
        console.log(`     - Rows: ${data.length}`);
        
        if (data.length > 0) {
            console.log(`     - Columns: ${Object.keys(data[0]).join(', ')}`);
        }
        console.log('');
    });
    
    // Try to read the specific sheet
    console.log('🔍 Looking for sheet: "DSINavigation"');
    if (workbook.SheetNames.includes('DSINavigation')) {
        const sheet = workbook.Sheets['DSINavigation'];
        const data = XLSX.utils.sheet_to_json(sheet);
        console.log(`✅ Found "DSINavigation" sheet with ${data.length} rows`);
    } else {
        console.log('❌ Sheet "DSINavigation" not found!');
        console.log('💡 Tip: Sheet names are case-sensitive');
    }
    
} catch (error) {
    console.error('❌ Error reading file:', error.message);
}

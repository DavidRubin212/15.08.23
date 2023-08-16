function readDataFromFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading file:', error.message);
        return null;
    }
}


function writeDataToFile(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
        console.log('Data has been written to file:', filePath);
    } catch (error) {
        console.error('Error writing file:', error.message);
    }
}function writeDataToFile(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
        console.log('Data has been written to file:', filePath);
    } catch (error) {
        console.error('Error writing file:', error.message);
    }
}
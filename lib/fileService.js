const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'data.json');

const readDataFromFile = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data from file:', error.message);
        return null;
    }
};

const writeDataToFile = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log('Data written to file successfully.');
    } catch (error) {
        console.error('Error writing data to file:', error.message);
    }
};

module.exports = {
    readDataFromFile,
    writeDataToFile
};
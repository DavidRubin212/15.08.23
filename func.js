const fs = require("fs").promises;

const read = new Promise((resolve, reject) => {
    function readData(filePath) {
        fs.readFile(filePath, "utf-8")
            .then(data => {
                const parsedData = JSON.parse(data);
                resolve(parsedData); // Resolve with the parsed data
            })
            .catch(error => {
                console.log('Error reading file:', error.message);
                reject(error);
            });
    }
    
    readData("./data.json");
});

// Usage
read.then(data => {
    console.log(data);
}).catch(error => {
    console.log('An error occurred:', error.message);
});

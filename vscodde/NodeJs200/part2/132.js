const fs = require('fs');

const renameFile = (fromFilePathName, toFilePathName) => {
    fs.rename(fromFilePathName, toFilePathName, (err) => {
        if(err) console.log(`ERROR: ${err}`);
    });
};

const fromFilePathName = './hell.txt';
const toFilePathName = './bye.txt';

renameFile(fromFilePathName, toFilePathName);

const fs = require('fs').promises;


function uppercase(string) {
  const result = string.toUpperCase();
  return result;
}


function readFile(file) {
  return fs.readFile(file, { encoding: 'utf8' })
    .then(contents => {
      return contents;
    });
}


function writeFile(path, contents) {
  return fs.writeFile(path, contents)
    .then(contents => {
      return contents;
    });
}


module.exports = {
  writeFile,
  readFile,
  uppercase
};
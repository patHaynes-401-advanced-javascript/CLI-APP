jest.mock('../file-reader', () => {
  return () => Promise.resolve('this is fake');
});

jest.mock('../file-writer', () => {
  return () => Promise.resolve('this is fake');
});


describe('file reader tests', () => {

  const fileReader = require('../file-reader');
  const writeFile = require('../file-writer');



  it('it reads a file', () => {
    const source = '../text.txt';

    return fileReader(source)
      .then(contents => {
        expect(contents).toEqual('this is fake');
      });
  });


  it('writes a file', () => {
    const source = '../text.txt';

    return writeFile(source)
      .then(contents => {
        expect(contents).toEqual('this is fake');
      });
  });


});
import fileMetadata from '../src/getFileMetadata.js';
import uploadFile from '../src/uploadFile.js';
import deleteFile from '../src/deleteFile.js';
import expect from 'expect';


describe("uploadFile", function() {

    it('status code should be 200', async function () {
        
        let res = await uploadFile.uploadFile();
        expect(res).toEqual(200);
    });
});


describe("getFileMetadata", function() {

    it('status code should be 200', async function () {
        
        let res = await fileMetadata.getFileMetadata();
        expect(res).toEqual(200);
    });
});

describe("deleteFile", function() {

    it('status code should be 200', async function () {
        
        let res = await deleteFile.deleteFile();
        expect(res).toEqual(200);
    });
});
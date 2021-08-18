import deleteFile from "../src/deleteFile.js";
import expect from "expect";
import fileMetadata from "../src/getFileMetadata.js";
import uploadFile from "../src/uploadFile.js";

describe(
    "uploadFile",
    () => {

        it(
            "status code should be 200",
            async () => {

                const res = await uploadFile.uploadFile();
                expect(res).toEqual(200);

            }
        );

    }
);


describe(
    "getFileMetadata",
    () => {

        it(
            "status code should be 200",
            async () => {

                const res = await fileMetadata.getFileMetadata();
                expect(res).toEqual(200);

            }
        );

    }
);

describe(
    "deleteFile",
    () => {

        it(
            "status code should be 200",
            async () => {

                const res = await deleteFile.deleteFile();
                expect(res).toEqual(200);

            }
        );

    }
);

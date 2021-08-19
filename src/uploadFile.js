import Auth from "./Authorization.js";
import axios from "axios";

async function uploadFile () {

    try {

        const response = await axios({
            "headers": {
                "Content-type": "application/octet-stream"
            },
            "method": "post",
            "params": {
                "arg": {
                    "autorename": true,
                    "mode": "add",
                    "mute": false,
                    "path": "/Homework/math/Matrices.txt",
                    "strict_conflict": false
                },
                "authorization": `${Auth.params.authorization}`
            },
            "url": "https://content.dropboxapi.com/2/files/upload"
        });
        return response.status;

    } catch (error) {

        return error;

    }

}

export default {uploadFile};

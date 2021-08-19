import Auth from "./Authorization.js";
import axios from "axios";

async function deleteFile () {

    try {

        const response = await axios({
            "data": {
                "path": "/Homework/math/Matrices.txt"
            },
            "headers": {
                "Content-type": "application/json"
            },
            "method": Auth.method,
            "params": Auth.params,
            "url": "https://api.dropboxapi.com/2/files/delete_v2"
        });
        return response.status;

    } catch (error) {

        return error;

    }

}

export default {deleteFile};

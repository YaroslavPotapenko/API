import Auth from "./Authorization.js";
import axios from "axios";

async function getFileMetadata () {

    try {

        const response = await axios({
            "data": {
                "include_deleted": false,
                "include_has_explicit_shared_members": false,
                "include_media_info": false,
                "path": "/Homework/math"
            },
            "headers": {
                "Content-type": "application/json"
            },
            "method": Auth.method,
            "params": Auth.params,
            "url": "https://api.dropboxapi.com/2/files/get_metadata"
        });
        return response.status;

    } catch (error) {

        return error;

    }

}

export default {getFileMetadata};

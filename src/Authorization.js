import data from "./data/data.js";

class Authorization {

    constructor () {

        this.method = "post";
        this.params = {
            "authorization": `Bearer ${data.accessToken}`
        };

    }

    uploadOptions () {

        return {
            "headers": {
                "Content-type": "application/octet-stream"
            },
            "method": this.method,
            "params": {
                "arg": {
                    "autorename": true,
                    "mode": "add",
                    "mute": false,
                    "path": "/Homework/math/Matrices.txt",
                    "strict_conflict": false
                },
                "authorization": this.params.authorization
            },
            "url": "https://content.dropboxapi.com/2/files/upload"
        };

    }

    getFileMetadataOptions () {

        return {
            "data": {
                "include_deleted": false,
                "include_has_explicit_shared_members": false,
                "include_media_info": false,
                "path": "/Homework/math"
            },
            "headers": {
                "Content-type": "application/json"
            },
            "method": this.method,
            "params": this.params,
            "url": "https://api.dropboxapi.com/2/files/get_metadata"
        };

    }

    deleteFileOptions () {

        return {
            "data": {
                "path": "/Homework/math/Matrices.txt"
            },
            "headers": {
                "Content-type": "application/json"
            },
            "method": this.method,
            "params": this.params,
            "url": "https://api.dropboxapi.com/2/files/delete_v2"
        };

    }

}

export default new Authorization();

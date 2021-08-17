import data from './data/data.js';

class Authorization {
    constructor() {
        this.method = "post";
        this.params = {
            authorization : `Bearer ${data.accessToken}`
        };
    }
    uploadOptions() {
        return {
            method: this.method,
            url: 'https://content.dropboxapi.com/2/files/upload',
            params: {
                authorization : this.params.authorization,
                arg : {
                    "path": "/Homework/math/Matrices.txt",
                    "mode": "add",
                    "autorename": true,
                    "mute": false,
                    "strict_conflict": false
                },
            },
            headers: {
                "Content-type": "application/octet-stream"
            }
        }
    }
    getFileMetadataOptions() {
        return {
            method: this.method,
            url: 'https://api.dropboxapi.com/2/files/get_metadata',
            params: this.params,
            headers: {
                "Content-type": "application/json"
            },
            data: {
                "path": "/Homework/math",
                "include_media_info": false,
                "include_deleted": false,
                "include_has_explicit_shared_members": false
            } 
        }
    }
    deleteFileOptions() {
        return {
            method: this.method,
            url: 'https://api.dropboxapi.com/2/files/delete_v2',
            params: this.params,
            headers: {
                "Content-type": "application/json"
            },
            data: {
                "path": "/Homework/math/Matrices.txt"
            } 
        }
    }
}

export default new Authorization();
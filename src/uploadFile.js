import axios from 'axios';
import Auth from './Authorization.js';

async function uploadFile() {

    try {
        const response = await axios(Auth.uploadOptions());
        return response.status;
    } catch (error) {
        return error;
    }
}

export default { uploadFile };
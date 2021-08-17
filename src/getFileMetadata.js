import axios from 'axios';
import Auth from './Authorization.js';

async function getFileMetadata() {

    try {
        const response = await axios(Auth.getFileMetadataOptions());
        return response.status;

    } catch (error) {
        return error;
    }
}

export default { getFileMetadata };
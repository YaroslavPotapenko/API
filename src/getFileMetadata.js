/* eslint-disable func-style */
import Auth from "./Authorization.js";
import axios from "axios";

async function getFileMetadata () {

    try {

        const response = await axios(Auth.getFileMetadataOptions());
        return response.status;

    } catch (error) {

        return error;

    }

}

export default {getFileMetadata};

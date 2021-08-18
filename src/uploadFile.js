/* eslint-disable func-style */
import Auth from "./Authorization.js";
import axios from "axios";

async function uploadFile () {

    try {

        const response = await axios(Auth.uploadOptions());
        return response.status;

    } catch (error) {

        return error;

    }

}

export default {uploadFile};

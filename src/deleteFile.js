/* eslint-disable func-style */
import Auth from "./Authorization.js";
import axios from "axios";

async function deleteFile () {

    try {

        const response = await axios(Auth.deleteFileOptions());
        return response.status;

    } catch (error) {

        return error;

    }

}

export default {deleteFile};

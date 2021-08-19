import data from "./data/data.js";

class Authorization {

    constructor () {

        this.method = "post";
        this.params = {
            "authorization": `Bearer ${data.accessToken}`
        };

    }

}

export default new Authorization();

import DataUriParser from 'datauri/parser.js';
import path from "path";

const getDataUri = (file) => {
    const parser = new DataUriParser();
    if (!file || !file.buffer || !file.originalname) {
        throw new Error("Invalid file object provided");
    }
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer).content;
}

export default getDataUri;

import { ExternalUrl } from "./externalUrl";

export class Artist {

    constructor(_id = '', href = '', name = '', type = '', uri = '', externalUrl = new ExternalUrl() ) {
        this._id = _id;
        this.href = href;
        this.name = name;
        this.type = type;
        this.uri = uri;
        this.externalUrl = externalUrl;
    }

    _id         : string;
    href        : string;
    name        : string;
    type        : string;
    uri         : string;
    externalUrl : ExternalUrl;
}
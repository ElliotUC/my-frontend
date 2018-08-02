export class Image {

    constructor(_id = '', height = 0, width = 0, url = '' ) {
        this._id = _id;
        this.height = height;
        this.width = width;
        this.url = url;
    }

    _id     : string;
    height  : number;
    width   : number;
    url     : string;
}
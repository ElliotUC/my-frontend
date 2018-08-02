export class ExternalUrl {

    constructor(_id = '', spotify = '') {
        this._id = _id;
        this.spotify = spotify;
    }

    _id: string;
    spotify: string;
}

import { Artist } from "./artist";
import { Image } from "./image";

export class Album {

    constructor(_id = '', href = '', name = '', releaseDate = '', uri = '', 
        albumType = '', artist = [], images = []) {
        
            this._id = _id;
            this.href = href;
            this.name = name;
            this.releaseDate = releaseDate;
            this.uri = uri;
            this.albumType = albumType;
            this.artist = artist;
            this.images = images;
    }

    _id          : string;
    href         : string;
    name         : string;
    releaseDate  : string;
    uri          : string;
    albumType    : string;
    artist       : Artist[];
    images       : Image[];
}

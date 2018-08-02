import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  readonly URL_API = 'http://localhost:3000/api';
  selectedAlbums: Album;

  constructor(private http: HttpClient) { }

  getAlbums(album: string) {
    const url = this.URL_API + '/albumBySearch?q=' + album
    return this.http.get(url)
  }
}
import { Component, OnInit } from '@angular/core';

import { AlbumService } from '../../services/album.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Album } from '../../models/album';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [AlbumService]
})
export class SearchComponent implements OnInit {

  albums: Album[];
  isLoading: boolean = false;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.isLoading = true;
    const album = f.form.value.album;

    this.albumService.getAlbums(album).subscribe((response: any) => {
      this.albums = response;
      this.isLoading = false;
    });
  }
  
}

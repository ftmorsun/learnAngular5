import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //the configuration object in this decorater 
  templateUrl: './app.component.html',
  //or template with `` and multi line html code
  //template:`<h1>Hello</h1>`,
  //style will apply only in this conponent
  //styleUrls: []
})
export class AppComponent {
  //define the type of variable
  query:string; 
  //most generic data type
  artist: object;

  //the value is initialized in the constructor
  constructor() {
    this.query="Fatma Orsun";
    this.artist=[{
      "Biography": "Daft Punk is a French house music group consisting [...]",
      "Genres": [
        "Electronic / Dance"
      ],
      "Subgenres": [
        "Dance"
      ],
      "Id": "music.C61C0000-0200-11DB-89CA-0019B92A3933",
      "Name": "Daft Punk",
      "ImageUrl": "https://musicimage.xboxlive.com/content/music.C61C0000-0200-11DB-89CA-0019B92A3933/image?locale=en-US",
      "Link": "https://music.microsoft.com/Artist/C61C0000-0200-11DB-89CA-0019B92A3933?partnerID=AwesomePartner",
      "OtherIds": {
        "music.amg": "P   168791"
      },
      "Source": "Catalog",
      "CompatibleSources": "Catalog, Collection"
    }]
  }
  title = 'your app';
}

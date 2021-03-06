import { Component} from '@angular/core';
import { MouseEvent, AgmMap} from '@agm/core';
import {Marker} from '../../models/marker.model';
import {pointedPlaces} from './pointedPlaces';
import {HttpClient} from '@angular/common/http';

declare var google: any;

@Component({
    selector: 'app-map',
    templateUrl: './app-map.component.html',
    styleUrls: ['./app-map.component.css']
})
export class MapComponent{
    constructor(private http: HttpClient) { 
    } 
    zoom = 16;
    lat = 46.599201;
    lng = 30.800976;
    map = AgmMap;
    newPoinedPlaces = pointedPlaces;
    latLng;
    imageOfPlace: String;
setZoom(zoom: number){
    this.zoom = zoom;
}

getZoom(){
    return this.zoom;
}

zoomIn(){
    this.setZoom(this.getZoom() + 1);
}

zoomOut(){
    this.setZoom(this.getZoom() - 1);
}
sendData(){
   this.http.post('https://webhook.site/7ddccaaa-0b50-4a41-97f9-e9be509eeecd', JSON.stringify(this.newPlaces)).subscribe(
       () => {},
       err => console.error(err)
   );
}

newPlaces: Marker[] = [
    {'name_place': 'Myhome', lat: 46.599201, lng: 30.800976}
];

mapClicked($event: MouseEvent) {
    this.latLng  = {lat: $event.coords.lat, lng: $event.coords.lng};
    this.newPlaces.push(this.latLng);
}
showImage(image: String) {
    this.imageOfPlace = image;
}

addMarkerPoinedPlaces(latValue, lngValue){
    this.lat = latValue;
    this.lng = lngValue;
    this.latLng = {lat: latValue, lng: lngValue};
    this.newPlaces.push(this.latLng);
    }
}
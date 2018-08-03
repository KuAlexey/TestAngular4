import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
    selector: 'app-map1',
  templateUrl: './app-map.html',
  styleUrls: ['./app-map.css']
})
export class MapComponent {
zoom: number = 17;
lat: number = 46.599149;
lng: number = 30.801047;

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

clickedMarker(label: string, index: number) {
console.log(`clicked the marker: ${label || index}`);
}

mapClicked($event: MouseEvent) {
this.markers.push({
lat: $event.coords.lat,
lng: $event.coords.lng,
draggable: true
});
}

markerDragEnd(m: marker, $event: MouseEvent) {
console.log('dragEnd', m, $event);
}

// tslint:disable-next-line:member-ordering
markers: marker[] = [
{
lat: 46.599149,
lng: 30.801047,
label: 'A',
draggable: false
}
];
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

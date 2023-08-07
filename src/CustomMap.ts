interface Mappable {
    location: {
        lat: number,
        lng: number
    };
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(htmlTagId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(htmlTagId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    public addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({content: 'This is an info window'});
            infoWindow.open(this.googleMap, marker);
        });
    }
}

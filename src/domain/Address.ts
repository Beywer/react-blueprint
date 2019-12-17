import { LatLng } from 'domain/LatLng';

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: LatLng;
}

import {ILatLng} from 'domain/ILatLng';

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: ILatLng;
}

import {IAddress} from 'domain/IAddress';
import {ICompany} from 'domain/ICompany';

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}

import { Address } from 'domain/Address';
import { Company } from 'domain/Company';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

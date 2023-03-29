export type AddressProps = {
  street: string;
  number: number;
  floor: number;
  letter: string;
  zip: number;
  city: string;
  province: string;
}

export class Address {
  street: string;
  number: number;
  floor: number;
  letter: string;
  zip: number;
  city: string;
  province: string;

  constructor({ street, number, floor, letter, zip, city, province }: AddressProps) 
  {
    this.street= street;
    this.number= number;
    this.floor= floor;
    this.letter= letter;
    this.zip= zip;
    this.city= city;
    this.province= province;
  }
}
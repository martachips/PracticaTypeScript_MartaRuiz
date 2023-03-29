import { Mail, MailProps } from './Mail';
import { Phone, PhoneProps } from "./Phone";
import { Address, AddressProps } from "./Address";
type Sex = "male" | "female";

type PersonProps = {
  name: string;
  surname: string;
  age: number;
  dni: string;
  birthday: string;
  favoriteColor: string;
  sex: Sex;
  addresses: AddressProps[];
  mails: MailProps[];
  phones: PhoneProps[];
  notes: string[];
}

export class Person {
  name: string;
  surname: string;
  age: number;
  dni: string;
  birthday: string;
  favoriteColor: string;
  sex: Sex;
  addresses: Address[];
  mails: Mail[];
  phones: Phone[];
  notes: string[];

  constructor({ name, surname, age, dni, birthday, favoriteColor, sex, addresses, mails, phones, notes }: PersonProps) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.dni = dni;
    this.birthday = birthday;
    this.favoriteColor = favoriteColor;
    this.sex = sex;
    this.addresses = addresses.map((address) => new Address(address));
    this.mails = mails.map((mail) => new Mail(mail));
    this.phones = phones.map((phone) => new Phone(phone));
    this.notes = notes;
  }

  showData(): void {
    console.log(JSON.stringify({
      name: this.name,
      surname: this.surname,
      age: this.age,
      dni: this.dni,
      birthday: this.birthday,
      favoriteColor: this.favoriteColor,
      sex: this.sex,
      addresses: this.addresses,
      mails: this.mails,
      phones: this.phones,
      notes: this.notes,
    }, null, 2));
  }

  addAddress(address: AddressProps): void {
    this.addresses.push(new Address(address));
  }

  addMail(mail: MailProps): void {
    this.mails.push(new Mail(mail));
  }

  addPhone(phone: PhoneProps): void {
    this.phones.push(new Phone(phone));
  }
}

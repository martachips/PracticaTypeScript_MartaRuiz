export type PhoneType = 'personal' | 'professional';

export type PhoneProps = {
  type: PhoneType;
  number: number;
} 

export class Phone {
  type: PhoneType;
  number: number;

  constructor({ number, type }: PhoneProps) {
    this.number = number;
    this.type = type;
  }
}

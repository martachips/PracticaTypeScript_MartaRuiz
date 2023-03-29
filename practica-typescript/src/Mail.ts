export type MailType = 'personal' | 'professional';

export type MailProps = {
  type: MailType;
  address: string;
}

export class Mail {
  type: MailType;
  address: string;

  constructor({ address, type }: MailProps) {
    this.address = address;
    this.type = type;
  }

  toString() {
    return JSON.stringify({
      address: this.address,
      type: this.type,
    });
  }
}

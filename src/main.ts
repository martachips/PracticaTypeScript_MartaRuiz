import { Person } from './Person';

const agenda = [];

const edu = new Person({
  name: "Edu",
  surname: "Ruiz",
  age: 32,
  dni: "48309572G",
  birthday: "16-05",
  favoriteColor: "naranja",
  sex: "male",
  addresses: [{
    street: "calle de la nube", number: 3,
    floor: 3, letter: "A", zip: 30058, city: "Barcelona",
    province: "Barcelona",
  }],
  mails: [{ type: "personal", address: "edu@jg.es", }],
  phones: [{ type: "personal", number: 58472948, }],
  notes: ["Datos de contacto"],
});

const marta = new Person({
  name: "Marta",
  surname: "Ruiz",
  age: 29,
  dni: "48307354G",
  birthday: "14-12",
  favoriteColor: "rojo",
  sex: "female",
  addresses: [{
    street: "calle de la piraña", number: 4,
    floor: 2, letter: "A", zip: 30278, city: "Murcia",
    province: "Murcia",
  }],
  mails: [{ type: "professional", address: "marta@jg.es", }],
  phones: [{ type: "professional", number: 58472937, }],
  notes: ["Datos de contacto Marta"],
});


const carlos = new Person({
  name: "Carlos",
  surname: "Muñoz",
  age: 31,
  dni: "48571072G",
  birthday: "03-10",
  favoriteColor: "verde",
  sex: "male",
  addresses: [{
    street: "calle turbulenta", number: 8,
    floor: 1, letter: "B", zip: 30198, city: "Tarragona",
    province: "Tarragona",
  }],
  mails: [{ type: "personal", address: "carlos@jg.es", }],
  phones: [{ type: "personal", number: 58463572, }],
  notes: ["Datos de contacto de Carlos"],
});

console.log('============================');
console.log('CONTACTS');
edu.showData();
marta.showData();
carlos.showData();

agenda.push(edu);
agenda.push(marta);
agenda.push(carlos);

const contactToModify = agenda.find(contact => contact.dni === "48307354G");

if (contactToModify) {
  contactToModify.addAddress({
    street: "calle psicodélica", number: 6,
    floor: 43, letter: "B", zip: 38888, city: "Tarra",
    province: "Tarrago",
  });
  contactToModify.addMail({ type: "personal", address: "carlos765@jg.es" });
  contactToModify.addPhone({ type: "personal", number: 584654326, });
}
console.log('============================');
console.log('CONTACTS AFTER EDIT');
edu.showData();
marta.showData();
carlos.showData();
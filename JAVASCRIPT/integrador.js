/***********************************************
 *
 * 1. Hacer una función que guarde una lista
 *    de listas de datos de personas. Deberia
 *    guardar por cada persona, una lista de datos
 *    que incluyan el nombre completo, la edad y
 *    la dirección de email.
 * 1b. Al ingresar nueva persona, validar que no
 *     exista en la lista. Si existe, tirar
 *     un error. (Usar funcion distinta para validar
 *     y llamar dentro de la funcion de guardar persona).
 * 2. Hacer una función que me devuelva la lista
 *    completa de personas.
 * 3. Hacer una función que me permita encontrar
 *    una persona por email.
 * 4. Hacer una función que me permita encontrar
 *    personas por nombre o parte del nombre.
 * 5. Hacer una función para borrar personas por mail.
 * 6. Hacer una funcion que permita modificar nombre
 *    buscando por mail.
 * 7. Hacer una funcion que permita modificar edad
 *    buscando por mail.
 * Observaciones: Google. Mucho google.
 *
 ************************************************/
let personList = [];

const newPerson = () => {
  let person = [];
  let nombre = prompt("Nombre: ");
  person.push(nombre);
  let apellido = prompt("Apellido: ");
  person.push(apellido);
  let edad = prompt("Edad: ");
  edad = parseInt(edad);
  person.push(edad);
  let email = prompt("Email: ");
  person.push(email);
  return person;
};

const person = newPerson();

const isValid = agregar => {
  let found = personList.find(element => {
    return agregar[3] === element[3];
  });
  return found === undefined;
};

isValid(person);

const addPerson = p => {
  if (isValid(p)) {
    personList.push(p);
  } else {
    throw "Person already exists";
  }
};

addPerson(person);

const imprimirLista = () => {
  return personList;
};

imprimirLista();

const findEmail = email => {
  let personMail;
  for (i = 0; i < personList.length; i++) {
    if (personList[i][3] === email) {
      personMail = personList[i];
    }
  }
  return personMail;
};
findEmail("vic@gmail.com");

//Ambas versiones potables.

const findNames = name => {
  let personFound = personList.find(persona => {
    return persona[0].match(name);
  });
  return personFound;
};
findNames("vic");

const findNamess = name => {
  let personFound = personList.find(persona => {
    return persona[0].indexOf(name) > -1 ? true : false;
  });
  return personFound;
};

//5.
//version con bug
const removePersonMail = mail => {
  let removed;
  let personFound = personList.findIndex(persona => {
    return persona[3].indexOf(mail) > -1 ? true : false; // return persona[3]===mail;
  });
  removed = personList.splice(personFound, 1);
};
removePersonMail("vico");



//version debuggeada!
const removePersonMail2 = mail => {
  let removed;
  let index = personList.findIndex(persona => {
    return persona[3].indexOf(mail) > -1 ? true : false; // return persona[3]==mail;
  });
  if (index != -1) {
    removed = personList.splice(index, 1);
  }
};
removePersonMail2("vico");

//6.

const modifyNamebyEmail = (mail, name) => {
  let i = personList.findIndex(persona => {
    return persona[3] == mail;
  });
  personList[i][0] = name;
};

//7

const modifyAgebyEmail = (mail, age) => {
  let i = personList.findIndex(persona => {
    return persona[2] == mail;
  });
  personList[i][2] = age;
};

/**************************** 
 * variacion resolución ejercicio:
 * 
 * const agregarPersona=()=>{
 * 
 * let name:prompt;
 * let age:prompt;
 * let email:prompt;
 * validarEmail(email);
 * personas.push([name,age,email]);
 * 
 *};
const validarEmail =(email)=>{
  for(let i=0;i< personas.length;i++){
    if(personas[i][3] == email){
      throw "el email ya existe.";
    }
  }
}

const getPersonas=()=>{
  return personas;
};

const getPersonaByEmail=()=>{
  for(let i=0;i< personas.length;i++){
    if(personas[i][3] == email){
      return personas[i];
    }
}


 * 
 * 
 * 
 * 
 * 
 * 
 * */
/**
 * @param {*} name;
 * @returns 
 * 
 */
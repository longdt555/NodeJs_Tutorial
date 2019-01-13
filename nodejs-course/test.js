//object literal

//object constructor

function person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.showName = function() {
    console.log(this.firstName + " " + this.lastName);
  };
}

var person = new person("long", "dinh", "nam_muoi");
console.log(person['firstName']);
person.showName();
var stringify = JSON.stringify(person);
console.log(stringify);
var parse = JSON.parse(stringify);
console.log(parse);

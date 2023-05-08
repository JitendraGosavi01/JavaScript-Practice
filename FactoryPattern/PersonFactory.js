class PersonFactory {
  constructor(name, age, options = []) {
    this.name = name;
    this.age = age;
    this.options = options;
  }

  createPerson() {
    return `Hello my name is ${this.name}, 
    I am ${this.age} old, 
    my other info ${this.options.join(", ")}`;
  }
}

const Jitendra = new PersonFactory("Jitendra", 32, [
  "A203",
  "Oxy Evolve, wagholi Pune",
]);
const Priyanka = new PersonFactory("Priyanka", "32", ["Golegaon"]);
console.log(Jitendra.createPerson());
console.log(Priyanka.createPerson());

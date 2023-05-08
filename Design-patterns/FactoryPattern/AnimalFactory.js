function AnimalFactory(name, color, sound) {
  this.name = name;
  this.color = color;
  this.sound = sound;

  this.createAnimal = function () {
    return `Animal Name: ${this.name},
            Color: ${this.color},
            Sound: ${this.sound}
            `;
  };
}

const Dog = new AnimalFactory("Dog", "black", "Barks..!");
const Tiger = new AnimalFactory("TIger", "Stripped-black", "Roarrrrr...!");
console.log(Dog.createAnimal());
console.log(Tiger.createAnimal());

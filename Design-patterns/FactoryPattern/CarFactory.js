const CAR_COMPANY = {
  MARUTI_SUZUKI: "marutiSuzuki",
  TATA: "TATA",
};

/* The class "Car" has a constructor that takes in parameters for name, model, and color. */
class Car {
  constructor(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
  }
}

/* The MarutiSuzuki class extends the Car class and creates a car with its company name, model, and
color. */
class MarutiSuzuki extends Car {
  createCar() {
    return `${this.name},
    Company: MarutiSuzuki,
    Model: ${this.model},
    Color: ${this.color}`;
  }
}

/* The TATA class extends the Car class and creates a car with TATA as the company. */
class TATA extends Car {
  createCar() {
    return `${this.name},
      Company: TATA,
      Model: ${this.model},
      Color: ${this.color}`;
  }
}

/* The CarFactory class extends the Car class and allows for the creation of specific car models based
on the name provided. */
class CarFactory extends Car {
  constructor(name, model, color) {
    super(name, model, color);
  }
  manufactureCar() {
    switch (this.name) {
      case CAR_COMPANY.MARUTI_SUZUKI:
        return new MarutiSuzuki(this.name, this.model, this.color).createCar();
      case CAR_COMPANY.TATA:
        return new TATA(this.name, this.model, this.color).createCar();
      default:
        return "Invalid data....!";
    }
  }
}

const baleno = new CarFactory("marutiSuzuki", "Baleno Delta", "Magma-Gray");
const tiago = new CarFactory("TATA", "Tiago.ev", "Black");
console.log(baleno.manufactureCar());
console.log(tiago.manufactureCar());

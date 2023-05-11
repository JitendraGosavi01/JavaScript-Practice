// Let's say you have a Shape class that represents different shapes,
//such as circles and rectangles. You want to be able to calculate the area of these shapes,
//but you don't want to modify the Shape class every time you add a new shape.

// To adhere to the OCP, you can create a separate class
//for each shape that extends the Shape class and implements
//its own area calculation method:

class Shape {
  area() {
    return "13.4**2";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super();
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}

//Now, if you want to calculate the area of a new shape,
//you can simply create a new class that extends Shape and
//implements its own area calculation method, without having to modify any existing code:
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  area() {
    return 0.5 * this.height * this.base;
  }
}

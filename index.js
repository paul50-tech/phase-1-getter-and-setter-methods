class Circle {
    constructor(radius) {
      this._radius = radius;
    }
 
    get radius() {
      return this._radius;
    }
  
    set radius(newRadius) {
      this._radius = newRadius;
    }

    get diameter() {
      return this._radius * 2;
    }
  
    set diameter(newDiameter) {
      this._radius = newDiameter / 2;
    }
  
    get circumference() {
      return 2 * Math.PI * this._radius;
    }

    set circumference(newCircumference) {
      this._radius = newCircumference / (2 * Math.PI);
    }

    get area() {
      return Math.PI * this._radius * this._radius;
    }
  
    set area(newArea) {
      this._radius = Math.sqrt(newArea / Math.PI);
    }
  }
  
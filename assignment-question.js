//Javascript code to find the volume of cylinder, cone, sphere.

let pi = 3.14159265359;

class Cylinder{
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    getVolume(){
        let volume = pi*(this.radius**2)*(this.height);
        return volume;
    }
}

class Sphere{
    constructor(radius){
        this.radius = radius;
    }

    getVolume(){
        let volume = (4*(pi)*(this.radius**3))/3;
        return volume;
    }
}

class Cone{
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    getVolume(){
        let volume = ((pi)*(this.radius**2)*(this.height))/3;
        return volume;
    }
}


let object = new Cylinder(5,3);
console.log(`Volume is ${object.getVolume()}`);
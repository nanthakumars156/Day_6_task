// Task 1

class Person{
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }


displayDetails(){
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`City: ${this.city}`);
}
}
// Details for Person class
let person = new Person('Nani',26,'Salem');

// Display person details
console.log("Person Details:");
// person.displayDetails();

/*--------------------------------------------------*/
// Task 2

class UberPriceCalculator {

    constructor(distance, duration) {
    this.distance = distance;
    this.duration = duration;
    }
    calculateFare() {
    const distanceFare = this.distance * 1.5; //PER_MILE_RATE = 1.5;
    const timeFare = this.duration * 0.5; //PER_MINUTE_RATE = 0.5;
    const totalFare = 2.0 + distanceFare + timeFare; //BASE_FARE = 2.0;
    return totalFare;
    }
    toString() {
        return `UberPriceCalculator[distance=${this.distance.toFixed(2)} miles, duration=${this.duration} minutes]`;
       }
    }
    const calculator = new UberPriceCalculator(5.5, 15);
    console.log(calculator.toString());
    const fare = calculator.calculateFare();
    console.log(`Total Fare: $${fare.toFixed(2)}`);
    
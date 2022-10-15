//                          --------------------- Exercise 1 ---------------------
class PersonalAccount{
    constructor (firstName, lastName,incomes, expenses){
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = [];
        this.expenses = [];
      }
//add incomes
  addIncome(description,income){
  this.incomes.push({income:income,
    description:description})
    }
// add expenses
  addExpense(description,expense){
  this.expenses.push({expense:expense,
    description:description})
    }
//calculate total incomes
   totInc(){
   let tot_income = 0;
  this.incomes.forEach(function(income)
  {
      tot_income += income.income;
  })
  return tot_income;
  }
// calculate total expenses
  totExp(){
   let tot_expense = 0;
  this.expenses.forEach(function(expense)
  {
      tot_expense += expense.expense;
  })
 return tot_expense;
}
// calculate amount
  AccountBal(){
    const balance = this.totInc() - this.totExp();
     return balance;
  }
//show reports
  Result(){
  let detail = `${this.firstName} ${this.lastName} has income = ${this.totInc()}. His expenses = ${this.totExp()}. and Balance = ${this.AccountBal()}.`
     return detail;
  }
  }

let person1 = new PersonalAccount("John","Doe");
person1.addIncome("Salary",25000);
person1.addIncome("Commission",3000);
person1.addExpense("rent",10000);
person1.addExpense("bills",10000);
console.log(person1.Result());

//                          --------------------- Exercise 2 ---------------------
// Make class and pass different properties in constructor
class Automobile{
  constructor(name,model,color,type){
        this.name = name
        this.model = model
        this.color = color
        this.type = type
    }
// Show message
   start(){
       console.log("Car is ready to drive");
    }
   openDoor(){
        console.log("Door is open");
   }
}
// Child classes of automobile
class Truck extends Automobile{
    constructor(name,model,color,type,maxcapacity){
   super(name,model,color,type)
   this.maxcapacity = maxcapacity
}
}
class Bus extends Automobile{
constructor(name,model,color,type,fueltype,maxspeeds){
   super(name,model,color,type)
   this.fueltype = fueltype
   this.maxspeeds = maxspeeds    
}
}
class Car extends Automobile{
  constructor(name,model,color,type,doors,maxspeeds){
  super(name,model,color,type)
   this.doors = doors
   this.maxspeeds = maxspeeds    
}
}
let truck1 = new Truck("Cement Mixer", "2020", "Black", "Automatic", "	2.36 US tons");
console.log(truck1);
let bus1 = new Bus("breeze Express", "2021", "Green", "Automatic/manual", "hybrid", "54 km/h")
console.log(bus1);
let car1 = new Car("Honda", "3series", "offwhite", "Manual", "scissor", "155 mph");
console.log(car1);
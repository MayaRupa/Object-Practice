// class declaration
class Person {
    constructor(x,y,z) {
      this.first_name = x
      this.last_name = y
      this.age= z
    }
    CompleteName () {
      return this.first_name+' '+ this.last_name
    }
    ageInMonth () {
      return (this.age*12)
    }

}

class House {
  constructor(a,b,c){
    this.address = a
    this.city = b
    this.state = c
  }
  CompleteAddress () {
    return this.address+' in '+ this.city+ ' on '+ this.state
  }
}


var person1 = new Person ('Andi','Susanto',17)
person1.first_name
person1.last_name
person1.age
person1.ageInMonth

var address1 = new House ('Dago','Bandung','JawaBarat')
address1.address
address1.city
address1.state

console.log(person1)
console.log(address1)
console.log(person1.ageInMonth)




//   }
// } person {
//   let firstName= prompt("whats your first name?"),
//   let lastName= prompt("whats your last name?")
//   completeName (){
//     this.firstName+ " "+ this.lastName
//   }
//   let userAge= prompt("what your age?")
//   ageInMonth () { parseInt(userAge)* 12}
//
// }

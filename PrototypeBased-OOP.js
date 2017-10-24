


function Person (x,y,z) {
  this.first_name= x
  this.last_name = y
  this.interest = z
}

// if( Person.jobs.toString ()==="programmer") {
//   console.log("You are a Programmer, AWESOME!")
// } else {
//   console.log ("you are not so awesome")
// }

//

function address (house,city,state){
  this.house= house
  this.city= city
  this.state = state
}



//

var a = prompt("Whats your First Name?")
var b = prompt("whats your Last Name?")
var c = prompt("Whats your interest?")

Person.prototype.jobs = prompt("what do you do for living?")

Person.prototype.BioData= function() {
  return this.first_name+ " "+this.last_name+" like to "+this.interest+"and he is a"+
  this.jobs
}

person1 = new Person(a,b,c)
console.log(person1.BioData())


var i = prompt("Where do you live?")
var j = prompt("whats city?")
var k = prompt("what state is that?")

address.prototype.CompleteAddress= function() {
  return person1.first_name+" live "+this.house+ " in "+this.city+" on "+this.state
}

address1 = new address (i,j,k)
console.log(address1.CompleteAddress())
//
// function CompleteProfile() {
//   return person1.toString()+' '+address1.toString()
// }
//
// CompleteProfile()

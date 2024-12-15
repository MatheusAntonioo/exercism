console.log("Amusement Park exercises");

console.log("----------------------");

const visitors = {}

function createVisitor(name, age, ticketId) {
  visitors.name = name;
  visitors.age = age;
  visitors.ticketId = ticketId;

  return visitors;
}

createVisitor('Verena Nardi', 45, 'H32AZ123');

console.log(visitors);
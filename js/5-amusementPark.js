console.log("Amusement Park exercises");

console.log("----------------------");

const visitors = {};
function createVisitor(name, age, ticketId) {
  visitors.name = name;
  visitors.age = age;
  visitors.ticketId = ticketId;

  return visitors;
}

createVisitor("Verena Nardi", 45, "H32AZ123");

console.log(visitors);

console.log("----------------------");

function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

console.log(revokeTicket(visitors));

console.log("----------------------");

const tickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verena Nardi",
};

console.log(tickets);

function ticketStatus(tickets, ticketId) {
  if (!(ticketId in tickets)) {
    return console.log("unknown ticket id");
  }
  if (tickets[ticketId] === null) {
    return console.log("not sold");
  } else {
    return console.log(`sold to ${tickets[ticketId]}`);
  }
}

// ticketStatus(tickets, 'RE90VAW7');
// ticketStatus(tickets, "0H2AZ123");
// ticketStatus(tickets, "23LA9T41");

let hasTicket = true;
let hasID = false;

let canEnter = hasTicket && hasID;
console.log("Pode entrar (AND)? " + canEnter);

let canEnterOr = hasTicket || hasID;
console.log("Pode entrar (OR)? " + canEnterOr);

let notHasID = !hasID;
console.log("Não tem ID? " + notHasID);

let canEnterWithVIP = hasTicket || hasID || true;
console.log("Pode entrar (com VIP)? " + canEnterWithVIP);
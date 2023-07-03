import LinkedList from "./linkedlist.js";

let test = new LinkedList();
test.prepend("isra");
test.append("adel");
test.append("mama");

test.insertAt("islam", 1);
console.log(test.toString());

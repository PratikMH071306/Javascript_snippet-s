let shoppingList = [
  "Milk",
  "Eggs",
  "Bread",
  ["Apples", "Bananas", "Oranges"],
  ["Potatoes", "Tomatoes", "Onions"],
];

console.log("<---- Accessing Specific Value: ----->");
let firstItem = shoppingList[0];
console.log("First item:", firstItem);

console.log("<---- Implementing push Method: ----->");
shoppingList.push("Carrots");
console.log("Implementing push:", shoppingList);

console.log("<---- Implementing pop Method: ----->");
shoppingList.pop("Carrots");
console.log("Implementing pop:", shoppingList);

console.log("<---- Implementing splice Method: ----->");
let vegetables = shoppingList[4];
vegetables.splice(1, 2, "Cucumbers", "Bell Peppers");
console.log("Implementing splice:", shoppingList);

//
//
//

//
//
//
let student = {
  name: "Amit",
  age: 20,
  grade: "A",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "India",
  },
};

console.log("<---- Accessing Object Properties: ----->");
let studentName = student.name;
console.log(studentName);

console.log("<---- Adding Value: ----->");
student.phone = "123-456-7890";
console.log(student);

console.log("<---- Removing Value: ----->");
console.log(student);
delete student.grade;
console.log(student);

console.log("<---- Modifying Value: ----->");
student.age = 21;
console.log(student);

//
//
//

//
//
//

console.log("<---- Function to Check Number Sign: ----->");
let Sign = checkNumber(3);
function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(Sign);

//
//
//

//
//
//

console.log("<---- Else If Sign: ----->");
let scoreCheck = getGrade(40);
function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score < 60) {
    return "F";
  } else {
    return "Invalid score";
  }
}
console.log(scoreCheck);

//
//
//

//
//
//

console.log("<---- Truthy/Falsy Concepts: ----->");

let stringCheck = checkString("Hello");

function checkString(str) {
  if (str) {
    return "Truthy";
  } else {
    return "Falsy";
  }
}
console.log(stringCheck);

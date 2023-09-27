console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log(
    "received password matches our 'SUPER_SECRET_PASSWORD'\nWelcome! You are logged in as Brunhilde1984"
  );
} else {
  console.log(
    "received password doesn't macht our 'SUPER_SECRET_PASSWORD' \nAccess denied!"
  );
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 10000000;

if (numberOfHotdogs <= 5) {
  console.log("2 euro per hotdog");
} else if (numberOfHotdogs <= 100) {
  console.log("1.50 euro per hotdog");
} else if (numberOfHotdogs <= 1000000) {
  console.log("1 euro per hotdog");
} else {
  console.log("0.10 euro per hotdog");
}
// Part 4: Daytime
const currentHour = 18;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime";

console.log(statement);

// Part 5: Greeting
const name = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);

// Get the current hour
const currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
    greeting = "Good morning!";
} else if (currentHour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

// Show the greeting in an alert box
alert(greeting);

// Head
const header = document.createElement("h1");
header.innerHTML = "Freelancer Forum";
header.style.textAlign = "center";
header.style.fontSize = "70px";
document.body.appendChild(header);

// Average price
const price = document.createElement("p");
price.innerHTML = "The average starting price is $30";
price.style.textAlign = "center";
price.style.fontSize = "30px";
document.body.appendChild(price);

// Available freelancers
const avfree = document.createElement("h2");
avfree.innerHTML = "Available Freelancers";
avfree.style.textAlign = "center";
avfree.style.fontSize = "50px";
document.body.appendChild(avfree);

// Create an array for the freelance workers
const freelancers = [
    { name: "Alice", price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" },
    { name: "Carol", price: 70, occupation: "Programmer" },
    { name: "Athena", price: 180, occupation: "Wizard" },
    { name: "Eros", price: 20, occupation: "Lover" },
    { name: "Hercules", price: 110, occupation: "Strong Man" },
    { name: "Medusa", price: 130, occupation: "Snake Charmer" },
    { name: "Lilith", price: 150, occupation: "Barer of Secrets" },
];

// Display list of freelancers
freelancers.forEach((i, idx)=> {
    document.body.innerHTML += '<h2>{name}. {occupation}</h2>';
    document.body.innerHTML += '<p>Price: {i.price}</p>';
    document.body.innerHTML += '<p>Occupation: {i.occupation}</p>';
})

// Interval for freelance workers to show
const addFreelancerIntervalId = setInterval(5000);

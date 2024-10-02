// imports
const Stress = require("ddos-stress");

// instance
const stress = new Stress();

// stress
const sendManyRequest = () => {
  stress.run("http://localhost:3000/", 8000);
};

sendManyRequest();

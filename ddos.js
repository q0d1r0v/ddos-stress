// imports
const Stress = require('ddos-stress')

// data
const stress = new Stress()

// methods

const sendManyRequest = () => {
    stress.run("http://localhost:3000/", 8000)
}

sendManyRequest()
const firstPerson = {
    name:"peter",
    sex:"male"
}

const secondPerson = {
    name:"sarah",
    sex:"female"
}

function detectSex(person) {
    if(person.sex === "female"){
        return "this person is a female"
    } else if(person.sex === "male") {return "this person is a male"}
    else { return "the person's sex not male nor female "}
}


console.log(detectSex(firstPerson));

console.log(detectSex(secondPerson));

console.log(detectSex( {
    name:"penelope",
    sex: "female2"
}));

// else után if(person.sex === "male") biztosít hogy csak akkor ezért undefined lesz female2 


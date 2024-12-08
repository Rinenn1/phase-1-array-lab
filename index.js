//defining cats array

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    let newcat = cats.push("Ralph");
    return newcat;
}

function destructivelyPrependCat(){
    let newcat = cats.unshift("Bob");
    return newcat;
}

function destructivelyRemoveLastCat(){
    let newcat = cats.pop();
    return newcat;
}


function destructivelyRemoveFirstCat(){
    let newcat = cats.shift();
    return newcat;
}

function appendCat(){
    let newcat = [...cats.slice(0, 3), "Broom"];
    return newcat;
}

function prependCat(){
    let newcat = ["Arnold", ...cats.slice()];
    return newcat;
}

function removeLastCat(){
    let newcat = [...cats.slice(0, 2)];
    return newcat;
}

function removeFirstCat(){
    let newcat = [...cats.slice(-2)];
    return newcat;
}

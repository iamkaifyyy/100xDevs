// **** promises in JS ****


console.log("promises JS");

// promises in JS


function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
};

function callback(){
    console.log("3 seconds have passed!");
}

setTimeoutPromisified(3000).then(callback);
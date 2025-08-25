// this async class is from Cohort 3/Week2-offlinevideos/5.Callback hell,rejects and async/await



// creating a promiified version of setTimeout

// function setTimeoutPromisified(){
//     return new Promise(function(resolve){
//         setTimeout(resolve, duration)
//     })
// }

// function callback(){
//     console.log("1 second has passed!")
// }

// setTimeout => promisified setTimeout

setTimeoutPromisified(1000).then(callback)




// callback hell example

function callback(){
    console.log("hi");
}

// callback example---

setTimeout(function(){
    console.log("hi");
    setTimeout(function(){
        console.log("hello");
        setTimeout(function(){
            console.log("hello there");
        }, 5000);
    }, 3000)
}, 1000);


// promisified way of writing setTimeout 

// promise chaining--
 
function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
}

setTimeoutPromisified(1000).then(function(){
    console.log("hi");
    setTimeoutPromisified(3000).then(function(){
        console.log("hello");
        setTimeoutPromisified(5000).then(function(){
            console.log("hi there!");
        });
    });
});


console.log("outside of callback hell")
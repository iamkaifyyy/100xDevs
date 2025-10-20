// map function 


const numbers = [1, 2, 3, 4, 5];

function square(numbers) {
    return numbers * numbers;
}

const squaredNumbers = Map(numbers, sqaure);

// filtering 

const arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
        newArr.push(arr[i]);
    }
}

console.log(newArr); 
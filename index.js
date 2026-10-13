//1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, ana, ] = empleados


//2
const [{email: emailLuis}, , ] = empleados


//3
let {a = 5 , b = 3} = {a: 3, b: 5}


//4
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const {yesterday, today: maximaHoy, tomorrow: maximaManana} = HIGH_TEMPERATURES


//5
function sumEveryOther(...num) {
    let total = 0
    for (let i = 0; i < num.length; i++) {
        total += num[i]
    }
    return total
}


//6
function addOnlyNums(...arg) {
    let total2 = 0
    for (let i = 0; i < arg.length; i++) {
        if ((typeof arg[i]) == "number") {
            total2 += arg[i]
        }
    }
    return total2
}

addOnlyNums(1, "perro", 2, 4)


//7
function countTheArgs(...arr) {
    return arr.length
}

countTheArgs("gato", "perro");
countTheArgs("gato", "perro", "pollo", "oso");


//8
function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2]
}


//9
function onlyUniques(...arr3) {
    let arr4 = []
    for (let i = 0; i < arr3.length; i++) {
        if (!(arr4.includes(arr3[i]))) {
            arr4.push(arr3[i])
        }
    }
    return arr4
}

onlyUniques("gato", "pollo", "cerdo", "cerdo")
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)


//10
function combineAllArrays(...arr5) {
    let arr6 = []
    for (let elemento of arr5) {
        for (let i = 0; i < elemento.length; i++) {
            arr6.push(elemento[i])
        }
    }
    return arr6
}

combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]


//11
function sumAndSquare(...arg2) {
    let total3 = 0
    for (let elemento2 of arg2) {
        total3 += elemento2**2
    }
    return total3
}
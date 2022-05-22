console.log("Tabuada com function");

let a = 0
let b = 1
let c = 2
let d = 3
let e = 4
let f = 5
let g = 6
let h = 7
let i = 8 
let j = 9
let k = 10

function Tabuada () { 
console.log ("7 x 0 =", h*a);
console.log ("7 x 1 =", h*b);
console.log ("7 x 2 =", h*c);
console.log ("7 x 3 =", h*d);
console.log ("7 x 4 =", h*e);
console.log ("7 x 5 =", h*f);
console.log ("7 x 6 =", h*g);
console.log ("7 x 7 =", h*h);
console.log ("7 x 8 =", h*i);
console.log ("7 x 9 =", h*j);
console.log ("7 x 10 =", h*k)
}

Tabuada()

console.log("Tabuada com for")
let tabuada = [
{'resultado': 7*0},
{'resultado': 7*1},
{'resultado': 7*2},
{'resultado': 7*3},
{'resultado': 7*4},
{'resultado': 7*5},
{'resultado': 7*6},
{'resultado': 7*7},
{'resultado': 7*8},
{'resultado': 7*9},
{'resultado': 7*10}
]

for (let i = 1; i <= 10; i++) {
console.log(tabuada[i].resultado)
}
// IF-ELSE
let mode = "dark";
let color;

if(mode === "dark")
    {
        color = "black";
    }

else if(mode === "light")
    {
        color = "white";
    }
else{
    color = "white";
}
    console.log(color);

// VOTE    
let age = 20;

if (age >= 18)
    {
        console.log("Vote");
    }
else{
    console.log("can't vote");
}

// ODD EVEN
let a = 4;

if (a % 2 == 0)
    {
        console.log("Even");
    }
else{
    console.log("Odd");
}

// TERNARY OPERATOR(? and :)
let old = 14;
let result = old >=18 ? "adult" : "not adult";
console.log(result);


//1 Named Function — Without Input & Without Return
let car = {
    brand: "MG",
    model: "Hector",
    price: 4000000
};

car.display = function show() {
    console.log(car.brand);
};

car.display();

// 2. Named Function — With Input & Without Return
let car = {
    brand: "Maruti Suzuki",
    model: "Swift Vxi",
    price: 600000
};

function display(a) {
    console.log(a.brand);
    console.log(a.model);
}

display(car);

// 3.Named Function — Without Input & With Return
let bank = {
    name: "SBI",
    location: "Warangal",
    branches: 20,

    display: function show() {
        return bank.name;
    }
};

let result = bank.display();
console.log(result);

// 4.Named Function — With Input & With Return
let employee = {
    name: "Nani",
    role: "Developer",
    salary: 50000
};

function display(a) {
    return a.name;
}

let ans = display(employee);
console.log(ans);
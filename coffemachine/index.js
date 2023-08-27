// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

// export and import js
// const coffeeStock = require('./state');

// console.log(coffeeStock);

// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat!");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }

// makeCoffee("robusta", 80);

// import beberapa nilai
// const {coffeeStock, isCoffeMachineReady} = require('./state');

// console.log(coffeeStock);
// console.log(isCoffeMachineReady);

//ES6 module exports imports
import {coffeeStock as jawir, isCoffeMachineReady} from './state.js';

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(jawir);
console.log(isCoffeMachineReady);
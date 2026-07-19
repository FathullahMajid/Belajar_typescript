let id: symbol = Symbol();
console.log(id);

let idPengguna: symbol = Symbol("rumah");
console.log(idPengguna);

let idA: symbol = Symbol("barang");
let idB: symbol = Symbol("barang");
console.log(idA === idB);

let S1: symbol = Symbol();
let S2: symbol = Symbol();
console.log(S1 !== S2);

let kartuA: symbol = Symbol("kuning");
let kartuB: symbol = Symbol("merah");
console.log(kartuA !== kartuB);
// const myObj = {
//     name: 'filankes', 
//     fn: () => {
//         return this.name;
//     }
// }
// const myObj2 = {
//     name: 'filankes', 
//     fn: function() {
//         return this.name;
//     }
// }
// console.log(myObj.fn(), myObj2.fn())

// function methodlari - call, apply, bind

// const myObj = {
//     name: 'filankes',
//     surname: 'filankesov'
// }

// function handle(name, surname, age, location) {
//     return `${this.name} ${this.surname} ${age} ${location}`
// }

// console.log(handle.call(myObj, 20, "Baku"));

// const handle = (name, surname, age, location) => {
//     return `${name} ${surname} ${age} ${location}`
// }

// console.log(handle.call(null, 'filankes', 'filankesov', 20, "Baku"));

// const myObj = {
//     name: 'filankes',
//     surname: 'filankesov'
// }

// const handle = (name, surname, age, location) => {
//     return `${name} ${surname} ${age} ${location}`
// }

// const handleFn = handle.apply(null, ['filankes', 'filankesov', 20, "Baku"]);

// console.log(handleFn);

// const myObj = {
//     name: 'filankes',
//     surname: 'filankesov'
// }

// const handle = (age, location) => {
//     return `${this.name} ${this.surname} ${age} ${location}`
// }

// const binded = handle.bind(myObj, 20, "Baku");

// console.log(binded())

// CALL ve APPLY methodlari cagrildigi yerde aninda isleyir ve geriye deyer dondurur
// BIND ise cagrildigi yerde cagrilmadan geriye yeni bir function dondurur.
/* BU 3nun de ortaq noqteleri her 3u de ilk argument olaraq this baglamaq ucun object teleb edir. 
ilk argumentden sonrakilar ise functionin parametrlerine assign edilen argumentler olacaq.
sadece olaraq apply methodunda functiona gonderilecek argumentleri apply methodunun 2ci argumentinde
array acib onun icine sirasiyla argumentleri yaziriq. */

// GELEN DERS MOVZULARI === destruction, spread, rest
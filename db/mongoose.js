const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
// const obj1 = new Restauarant({
//     name: 'S&F',
//     address: {
//         building: 12,
//         coords: [-23.39, 20.45],
//         street: 'Zabotinsky',
//         zipcode: 8657
//     },
//     borough: 'A',
//     cuisine: 'America',
//     restuarant_id: 8
// })

// obj1.save().then(() => {
//     console.log(obj1);
// }).catch((error) => {
//     console.log('Error', error);
// })

// const obj2 = new Restauarant({
//     name: 'gal&tal',
//     address: {
//         building: 10,
//         coords: [-70.39, 50.45],
//         street: 'Habakkuk',
//         zipcode: 2431
//     },
//     borough: 'B',
//     cuisine: 'Caesar',
//     restuarant_id: 3
// })
// obj2.save().then(() => {
//     console.log(obj2);
// }).catch((error) => {
//     console.log('Error', error);
// })

// const obj3 = new Restauarant({
//     name: 'Farjun',
//     address: {
//         building: 3,
//         coords: [-40, 39],
//         street: 'Amos',
//         zipcode: 5489
//     },
//     borough: 'A',
//     cuisine: 'America',
//     restuarant_id: 5
// })

// obj3.save().then(() => {
//     console.log(obj3);
// }).catch((error) => {
//     console.log('Error', error);
// })

// const obj4 = new Restauarant({
//     name: 'S&F',
//     address: {
//         building: 9,
//         coords: [-80, 70],
//         street: 'Ezekiel',
//         zipcode: 2143
//     },
//     borough: 'B',
//     cuisine: 'Chinese',
//     restuarant_id: 2
// })

// obj4.save().then(() => {
//     console.log(obj4);
// }).catch((error) => {
//     console.log('Error', error);
// })

// const obj5 = new Restauarant({
//     name: 'Miriam\'s kitchen',
//     address: {
//         building: 5,
//         coords: [-34, 25],
//         street: 'Ben Gra',
//         zipcode: 3249
//     },
//     borough: 'C',
//     cuisine: 'Chinese',
//     restuarant_id: 1
// })

// obj5.save().then(() => {
//     console.log(obj5);
// }).catch((error) => {
//     console.log('Error', error);
// })
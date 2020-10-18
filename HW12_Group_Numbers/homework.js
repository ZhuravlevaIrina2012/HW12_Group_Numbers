// let group = {
//     title: 'Java Ashkelon 2020',
//     students: ['Anna', 'Anna', 'Elena', 'Irina', 'Yuliia', 'Irina', 'Elina'],
//     showList: function () {
//         const show = function (name) {
//             console.log(`${this.title}: ${name}`);
//         }
//         this.students.forEach(show);
//     }
// }

let group = {
    title: 'Java Ashkelon 2020',
    students: ['Anna', 'Anna', 'Elena', 'Irina', 'Yuliia', 'Irina', 'Elina'],
    showList: function () {
        const show = (name) => {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show);
    }
}

group.showList();
let newGroup = group;
group = null;
console.log('=======================');
newGroup.showList();


console.log('============ Part 2 ===============')
//Problem -> console 10 times 10
// for (var i = 0; i < 10; i++){
//     setTimeout(function () {
//         console.log(i);
//     },1000);
// }

setTimeout(function () {
    for (var i = 0; i < 10; i++)
        console.log(i);
},1000);

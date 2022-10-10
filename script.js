let arr_students = [
    {
        id: 1,
        name: "Timur",
        age: 16,
        children: ["Amin","Davlat"],   
        gender: "male"
    },
    {
        id: 2,
        name: "Amin",
        age: 15,
        children: ["Aziz","Zafar","Asad"],
        gender: "female"
    },
    {
        id: 3,
        name: "Naim",
        age: 21,
        children: ["Timur","Orif"],
        gender: "male"
    },
    {
        id: 4,
        name: "Laziz",
        age: 17,
        children: ["Munis"],   
        gender: "female"
    },
    {
        id: 5,
        name: "Jamshed",
        age: 28,
        children: ["Munis"],   
        gender: undefined
    }
]
//Найти средний возраст студентов
let sredniy = arr_students.reduce((a,b) => a + b.age, 0) / (arr_students.length || 1)

// Найти самого старшего студента и сохранить в переменную
let old = arr_students.reduce((a,b) => {
    if(a.age > b.age) {
        return a
    } else {
        return b
}})
// Найти самого младшего студента и сохранить в переменную
let youngest = arr_students.reduce((a,b) => {
    if(a.age < b.age) {
        return a
    } else {
        return b
}})
let gruppa = {old, youngest}

// посчитать сколько малчиков и сколько девочек и бинарных
let ladies = arr_students.filter(arr_students => arr_students.gender === 'female');
let gentelemen = arr_students.filter(arr_students => arr_students.gender === 'male');
let binarniy = arr_students.filter(arr_students => arr_students.gender === undefined)
let lgbt = {ladies, gentelemen, binarniy}

console.log(sredniy, gruppa, lgbt );

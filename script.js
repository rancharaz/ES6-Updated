/* var topic = "Javascript";

if (topic) {
    var topic = "Ecmascript";
    console.log('block', topic)
}

console.log('global', topic) */



/* var div;
var box = document.getElementById('box');


for (let i = 0; i < 5; i++) {
    div = document.createElement("div");
    div.onclick = function () {
        alert('this box' + i);;
    }
    box.appendChild(div)
} */


/* const pizza = true;
pizza = false;

console.log(pizza) */





/* function print(firstName) {
    console.log(`Hello ${firstName}`)
}
print("David") */



/* function createEmail(firstName, price) {
    let shipping = 5.95;
    console.log(`hi ${firstName}! Thanks! 
        Total: $${price}
        shipping: $${shipping}
        Grand Total: $${price + shipping}
    `)
}

createEmail("David", 600) */




/* const planet = "earth"; */

/* console.log(planet.startsWith("ear") + planet.endsWith("th")); */
/* console.log(planet.includes("r"))
console.log(planet.includes('T'))  whatever inside */
/* 
console.log(planet.search("h")) */

/* if (planet.includes("t")) {
    console.log("This is true")
} else {
    console.log('This is false')
} */

/* planet.includes("t") ? console.log(true) : console.log(false) */

/* let name = ['david', 'john', 'michel'];

if (name.includes('tata' && 'john')) {
    console.log(true)
} else {
    console.log(false)
} */






/* const id = Symbol();

const courseInfo = {

    title: "Javascript",
    topics: [
        "strings",
        "arrays",
        "object"
    ]
}
courseInfo[id] = 4545;
console.log(courseInfo) */






/* let course = new Map();

course.set("react", { description: "ui" });
course.set("jest", { description: "testing" })


console.log(course);
console.log(course.react)
console.log(course.get("react"));



let details = new Map([
    [new Date(), "today"],
    [2, { javascript: ["js", "node", "react"] }],
    ["items", [1, 2]]
])

console.log(details);
console.log(details.size) */





/* 
let book = new Set();


book.add("The pride and the prejudice");
book.add('war and peace').add('oliver twist')

book.delete("oliver twist") */


/* book.map(function (item) {
    console.log(item)
}) */


/* book.forEach(function (item) {
    console.log(item)
})

console.log(book);
console.log(book.size)

console.log("Has oliver twist", book.has("oliver twist")) */






/* let cars = ['toyota', 'mercedes']
let moto = ['honda', 'harley']

let vehicules = ['bmw', 'suzuki', ...cars, ...moto];

console.log(vehicules) */




/* let [firstName, , last] = ['toyota', 'mercedes', "bmw", "audi"]


console.log(last) */



/* let cities = {
    tt: 'Port-Louis',
    oo: 'Quatre-Bornes',
    xx: 'Vacoas'

}
let { tt, oo, xx } = cities;

console.log(tt) */




/* let cars = ['toyota', 'mercedes', "bmw", "audi"]

console.log(cars.includes("bmw")) */





/* 
function skier(name, sound) {
    return {
        name,
        sound,

        powderYell: function () {
            let yell = this.sound.toUpperCase();
            console.log(`${yell} ${yell}`)
        }
    }
}

skier("Ranveer", "yeeeaaah").powderYell() */



/* const daytime = {
    breakfast: "roti so",
    lunch: "briyani papao"
}
const nighttime = " Ene bon kfc"


const allMeals = {
    ...daytime,
    nighttime
}

console.log(allMeals) */





/* const vacation = {
    destination: "chile",
    travelers: 2,
    activity: "skiing",
    cost: "tooo much"
}

function marketing({ cost, activity }) {
    return `The vacation const: ${cost} and the activity is ${activity}`
}

console.log(marketing(vacation)); */





/* 
for (let letter of "Javascript") {
    console.log(letter)
} */

/* let topics = ["Javascript", "csharp", "java", "python"];

for (let topic of topics) {
    console.log(topic)
} */



/* let topics = new Map();

topics.set("Html", "/topic/html");
topics.set("CSS", "/topic/css");
topics.set("Javascript", "/topic/javascript");
 */

/* for (let topic of topics) {
    console.log(topic)
} */

/* for (let topic of topics.keys()) {
    console.log(topic)
}

for (let route of topics.values()) {
    console.log(`The course can be found at ${route}`)
}


for (let topic of topics.entries()) {
    console.log(topic)
}
 */









/* class vehicules {
    constructor(description, wheels) {
        this.description = description;
        this.wheels = wheels
    }

    describeYourself() {
        console.log(`I am a ${this.description} with ${this.wheels} wheels`)
    }
} */

/* let vehiculesAll = new vehicules("BMW", 4);

vehiculesAll.describeYourself() */


/* class Suv extends vehicules {
    constructor() {
        super("Audi", 8)
    }
}
let allSuv = new Suv();
allSuv.describeYourself() */








/* let attendance = {
    _list: [],
    set addName(name) {
        this._list.push(name);
    },
    get list() {
        return this._list.join(", ")
    }
}

function getAllData() {
    var test = document.getElementById("test").value;
    let push = document.querySelector("#box");

    attendance.addName = test;
    push.innerHTML = attendance._list;
} */
/* 




attendance.addName = "Yoan barbe";
attendance.addName = "Yogesh Bissessur";

console.log(attendance.list) */





/* class hike {
    constructor(distance, pace) {
        this.distance = distance;
        this.pace = pace
    }
    get lengthHours() {
        return `${this.calcLength()} hours`;
    }

    calcLength() {
        return this.distance / this.pace;
    }
}

const pieterBoth = new hike(2, 50);
console.log(pieterBoth.lengthHours) */





/* let data = "My name is ranveer";
console.log(data.repeat(6)) */



/* function add(x, y) {
    return x + y;
}
console.log(add(10, 5));

 */

/* function haveFun(activity = "hiking",
    time = 3) {
    console.log(`Today I will go to ${activity} for ${time} hours`)
}

haveFun() */




/* let student = (students) => {
    console.log(students)
}

student(["Ranveer", "Ancharaz"])


let list = ["apple", "banana", "strawberry"];
list.map((item) => console.log(item)) */


/* promises */


/* const delay = (seconds) =>

    new Promise((resolve, reject) => {

        if (typeof seconds !== "number") {
            reject(new Error("Seconds must be a number"))
        }

        setTimeout(resolve, seconds * 1000)
    }
    );

console.log("Test")

delay(1).then(() => console.log("test"))
delay(5).then(() => console.log("test 5")) */





/* const spacePeople = () => {

    return new Promise((resolve, reject) => {
        const api = "http://api.open-notify.org/astros.json";

        const request = new XMLHttpRequest();
        request.open("GET", api);

        request.onload = () => {
            if (request.status === 200) {
                resolve(JSON.parse(request.response));
            } else {
                reject(Error(request.statusText))
            }
        }
        request.onerror = (err) => reject(err);
        request.send()
    })
}
spacePeople().then(
    (spaceData) => console.log(spaceData),

    (err) => console.error(new Error("Can't load people"))
) */






/* let spacePeople = () => fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())


let spaceNames = () =>
    spacePeople().then(json => json.people)
        .then(people => people.map(p => p.name))
        .then((names) => names.join(" , "))
spaceNames().then(console.log)
 */



/* const delay = (seconds) =>
    new Promise((resolve) =>
        setTimeout(resolve, seconds * 1000))


const countSeconds = async () => {
    console.log("zero seconds")

    await delay(1);
    console.log("ONE");


    await delay(5);
    console.log("Five");


    await delay(8);
    console.log("Eight");
}

countSeconds() */





/* const githubRequest = async (login) => {

    let response = await fetch(
        `https://api.github.com/users/${login}`
    );
    let json = await response.json();

    let summary = `${json.name}, ${json.company}`
    console.log(summary)
}

githubRequest("rancharaz") */
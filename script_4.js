const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


function year70(){
    for (let index in entrepreneurs) {
        if (entrepreneurs[index]["year"] >= 1970 && 1979 >= entrepreneurs[index]["year"]){
            console.log(entrepreneurs[index]["year"]);
        }
    }
}

function name(){
    let firstAndLast = []
    for (let index in entrepreneurs) {
       
        firstAndLast[index] = entrepreneurs[index]["first"] +" "+ entrepreneurs[index]["last"]; 
    }
    console.log(firstAndLast);
}


function ageToday(){
    for (let index in entrepreneurs) {
       console.log(2019 - entrepreneurs[index]["year"]);

    
    }
}

function sortName(){
    let alphabetic_sort_name = []
    for (let index in entrepreneurs) {
       alphabetic_sort_name.push(entrepreneurs[index]["first"]);
    }
console.log(alphabetic_sort_name.sort());
}

console.log("Quels sont les entrepreneurs nés dans les années 70");
console.log(year70());

console.log("Nom & prénom entrepreneurs");
console.log(name());

console.log("Age aujourd'hui");
console.log(ageToday());

console.log("Trie les entrepreneurs par ordre alphabétique");
console.log(sortName());
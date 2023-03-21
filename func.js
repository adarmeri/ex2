const data = [
{
name: "John",
birthday: "1-1-1995",
favoriteFoods: {
meats: ["hamburgers", "sausages"],
fish: ["salmon", "pike"],
},
},
{
name: "Mark",
birthday: "10-5-1980",
favoriteFoods: {
meats: ["hamburgers", "steak", "lamb"],
fish: ["tuna", "salmon", "barracuda"],
},
},
{
name: "Mary",
birthday: "1-10-1977",
favoriteFoods: {
meats: ["ham", "chicken"],
fish: ["pike"],
},
},
{
name: "Thomas",
birthday: "1-10-1990",
favoriteFoods: {
meats: ["bird", "rooster"],
fish: ["salmon"],
},
},
{
name: "Mary",
birthday: "1-10-1977",
favoriteFoods: {
meats: ["hamburgers", "lamb"],
fish: ["anchovies", "tuna"],
},
},
];
/*
//Create a function that returns all the names from the array.
const names = data.map((data) => data.name);
console.log(names);

//Create a function that returns all the objects that are born before 1990.
const find = data.filter(data => data.birthday.slice(-4) > 1990);
console.log(find);
*/
//Create a function that returns an object of all the different foods from all the objects as the key and the number of
//times that food is present in all the objects as the value.

const meats = data.map((data) => data.favoriteFoods.meats);
const fish = data.map((data) => data.favoriteFoods.fish);

var food = {
  
    }
//// dogs.some((dog) => dog.temperament.includes("Trusting"));
function iterate(item, index) {
    if(Object.keys(food).includes(item))
        food[item]+=1;
    else
        food[item] = 1;

       
    
}

for(let i=0;i<meats.length;i++)
{const arr = meats[i]; arr.forEach(iterate);}

for(let i=0;i<fish.length;i++)
{const arr = fish[i]; arr.forEach(iterate);}

Object.entries(food).forEach(entry => {
    const [key, value] = entry;
    console.log(key, value);
  });
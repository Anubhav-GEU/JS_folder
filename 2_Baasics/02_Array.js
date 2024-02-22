const m_heroes = ["thor","Ironman", "Spiderman"];
const dc_heroes = ["superman", "flash"]
console.log(m_heroes);
console.log(dc_heroes);
m_heroes.push(dc_heroes); // arrays can take another arrays as data so it will not concatenate it will become nested list.
console.log(m_heroes[3][1]);
m_heroes.pop()

// concat joins the two string but it returns a new array
console.log(m_heroes.concat(dc_heroes));

// use spread operations -> it spreads the values.
const all_new_heroes = [...m_heroes, ...dc_heroes];
console.log(all_new_heroes); // in concat we can concat only 2 arrays but using spread we can spread multiple arrays.

const an_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(an_array);
// in flat array we have to provide depth. can also provide infinity
const f_array = an_array.flat(2);
console.log(f_array);

console.log(Array.isArray("Anubhav"));
// to convert anything to array/
console.log(Array.from("Anubhav"));
console.log(Array.from({name:"Anubhav"})); // it cant directly convert to array we have to tell whether we want to make array of keys or values, if array is not created the it will return empty array.

console.log(Array.of(100,200,300));
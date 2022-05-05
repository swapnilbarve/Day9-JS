console.log("Working...");

//Map - map prevents the order of insertion of key value pair.
//Map also preserves the datatypes of keys i.e,. it doesnot convert the keys to string by default like objects does So, maps can store keys of any datatype

let map=new Map();

map.set("name","ravi");
map.set("age","29");
map.set(1,"one");
map.set("phone",9954826803);
map.set(true , "true");
console.log(map);
console.log(map.get("name"));

console.log(map.has("email"));

map.delete(1);
// map.clear();
for(let key of map.keys()){
    console.log(key);
}
for(let key of map.values()){
    console.log(key);
}
for(let keys of map.entries()){
    console.log(keys);
}
map.forEach(function(values,keys){
    console.log(keys,values);
})
console.log(map);
console.log(map.size);

//sets- sets has only unique values.
//set cannot give you key value pair but value value pair only. using .entries method.


let set=new Set();

set.add("Apple");
set.add("Banana");
set.add("orenge");
set.add("Mangoes");
set.add("Letchi");
set.add("orenge");

console.log(set);

console.log(set.values());

console.log(set.has("kiwi"));
console.log(set.has("Banana"));

set.delete("Banana");
// set.clear();
console.log(set);

for(let key of set.keys()){
    console.log(key);
}
for(let key of set.values()){
    console.log(key);
}
for(let entry of set.entries()){
    // let key = entry;
    // console.log(key[0]);
    console.log(entry);
}
set.forEach(function(values,keys){
    console.log(keys,values);
})
console.log(set.size);
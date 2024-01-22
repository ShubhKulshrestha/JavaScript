// Arrays in JavaScript...
let marks=[23,45,67,43,76];
  console.log(marks);
  console.log(marks.length);// Arrays length

//Looping over an array...
let marks=[23,45,67,43,76];
for(i=0;i<marks.length;i++){
    console.log(marks[i]);
  }
// for of loop
for (i of marks){
    console.log(i);
}

// Array Methods...
//Push()
 let item=["Apple","Orange","Mango"];
 item.push("Banana","Grapes");
 console.log(item);

//pop()
let items=["Apple","Orange","Mango"];
 items.pop();
 console.log(items);
 let deletedItem=items.pop();
 console.log(items); 
 console.log("deleted item is",deletedItem);

 //toString()
let items=["Apple","Orange","Mango"];
 console.log(items.toString());
 console.log(items);

 //concate()
 let marvelHeroes=["ironman","thor","spiderman"];
 dc_Heroes=["batman","superman"];
 let heroes=marvelHeroes.concat(dc_Heroes);
 console.log(heroes);

/* Array is Empty or Not
let eids=[];
let uids=[100,101,102,103,104];
console.log(eids.length);
console.log(uids.length);
console.log(eids.length>0);
console.log(uids.length>0);

if(eids.length>0){
    console.log("Not Empty Array");
} 
else {
    console.log("Empty Array");
}*/

//Verify given object is empty or not 

let user={}
let emp={
    eid:101,
    ename:"Rahul",
    esal:450000
}
console.log(emp.eid)//101
console.log(emp.email)//undefined
console.log(emp.length)//undefined
console.log(Object.keys(emp))
console.log(Object.keys(emp).length)
console.log(Object.keys(emp).length>0)

if (Object.keys(user).length>0) {
    console.log("Not Empty Object")
} else {
    console.log("Empty Object")
}



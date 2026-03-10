//print object in browser//

let ename="Rahul Gandhi";   
let esal=45000.45;          
let avail=true;             
let locs=["Wayanad","New Delhi","Bangalore"] 
let emp={                                  
        eid:103,
        ename:"Priyanka",
        esal:750000
}
document.writeln(ename)
document.writeln("<br/>")
document.writeln(esal)
document.writeln("<br/>")
document.writeln(avail)
document.writeln("<br/>")
document.writeln(locs)
document.writeln("<br/>")
document.writeln(emp)
document.writeln("<br/>")
document.writeln(JSON.stringify(emp))
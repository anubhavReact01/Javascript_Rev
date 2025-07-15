
// In js  before comapariosn make sure datatypes is of same type otherwise it will not give us predictable results.

 console.log(3>2);
 console.log(3<2);
 console.log(3>=2);
 console.log(3!=2);
 console.log(3==2);
 
// so in the above case its obvious and we get the predictable result. Right


// Try to stricly avoid the below type of conversion this causes confusion

 let a = null;
  console.log(null==0);
 console.log(null>=0); // null = 0 >=0 true
 console.log(null<=0); //true
 console.log(null<0); // false bcoz null = 0 and 0 < 0 i.e false
 console.log(null>0); // again false 

// // so here in js Comparison and equaltity operator works differently , in the comparison operator null turns into the or treat as 0 and then performs the opertaion 

 console.log("3"===2); // here in the === we striclty check the datatype of both operands and check so the answer is FALSE

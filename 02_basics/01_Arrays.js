console.log('Array is here')

 const arr = [1,2,3,4,5]
  arr.push(6) // simply adds a new element in the last position
  console.log(arr)

 const arr1 = [1,2,3,4,5,6]
  arr.pop(6) // simply removes a  element from the last position
  console.log(arr)
 
// .unshift() adds a new element in very first postion
// .shift() removes 1st element 

// .includes() checks if the element is present or not
// .index() checks the index of element



 const ages = [21,23,22,24]

 const newages = ages.join() // it returns the elemnt of array into string check with the typeof 
 console.log(typeof newages)

 console.log(ages);
 console.log(newages);


//Slice and Splice
 const arr4 = [21,22,23,24,25]
 console.log("Original",arr)

 const slicedArr = arr.slice(1,4) // includes or returns  1,2 and 3 element.. 

 console.log("Sliced Array: ", slicedArr)
 console.log("Original arr after sliced arr",arr)

// // Spliced mai 1,2,3,4

 const splicedArr = arr.splice(1,4) // includes 1,2,3 and 4th element
 console.log("Spliced Array: ", splicedArr) //
 console.log("Orginal arr after spliced op", arr)
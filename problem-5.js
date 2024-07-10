function customIncludes (arr, element){
for(let i = 0; i<arr.length; i++){
  if (arr[i]==element){
        return true;
    } 
    
}
return false;
}

const arr1 = [1,2,3,4,5];
console.log(customIncludes(arr1,3));
const arr2 = ["apple", "banana", "orange"];
console.log(customIncludes(arr2, "banana"));
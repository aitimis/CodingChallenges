// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)



function isIsogram(str){
    let strLow = str.toLowerCase();
    
    if(strLow === ""){
      return true;
    }
    
    for(i = 0; i < strLow.length; i++){
      if(strLow.indexOf(str[i]) !== strLow.lastIndexOf(str[i])){
         return false;
      }
    }
    return true;
  }
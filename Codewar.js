
Vowel Controller

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

// Solution-1 Long Way
function getCount(str) {
  var vowelsCount = 0;
  
  var strArr=[];
  for(let i=0; i<str.length; i++){
    strArr.push(str[i]);
  }
  
  var strLeng = strArr.length;
  
  for(let i=0; i < strLeng; i++){
    if(strArr[i] == "a"){
      vowelsCount++
    }else if(strArr[i] == "e"){
      vowelsCount++
    }else if(strArr[i] == "u"){
      vowelsCount++
    }else if(strArr[i] == "i"){
      vowelsCount++
    }else if(strArr[i] == "o"){
      vowelsCount++
    }
  }
  
  return(vowelsCount);
  
}

//Solution-2 
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;

//Solution-3 
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }
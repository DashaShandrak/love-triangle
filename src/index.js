/**
* @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var countTriangle = 0;
  for(var i = 0; i < preferences.length; i++) {
    var firstNumber = i+1; 
    var firstLove = preferences[i]; 
    if(firstLove != firstNumber && !isNaN(firstLove)) {
      var secondLove = preferences[firstLove-1]; 
      if(!isNaN(secondLove) && secondLove != firstLove) {
        if(secondLove != firstNumber) {
         var thirdlove = preferences[secondLove-1]; 
         if(!isNaN(thirdlove) && thirdlove != secondLove) {
           if(thirdlove != firstLove) {
             if(thirdlove == firstNumber) {
             countTriangle++;
             preferences[i] = "*";
             preferences[firstLove-1] = "*";
             preferences[secondLove-1] = "*";
           }
          }  
        }else{
        preferences[thirdlove-1] = "*";
       }
      }
    }
    else {
    preferences[secondLove-1] = "*";
    }
  }else {
  preferences[i] = "*";
}
}
return countTriangle; 
};


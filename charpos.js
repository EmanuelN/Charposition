function countLetters(str){
  //background
  //remove all spaces in the string and create an empty object
  var noSpaces = str.replace(/ /g,'')
  var letters = {}
  //execute
  //parse each character and add key/value pair or add 1 to key value
  for (var i = 0; i < noSpaces.length; i++){
    if (letters[(noSpaces.charAt(i))]){
      letters[(noSpaces.charAt(i))].push(i)
    }
    else {
      letters[(noSpaces.charAt(i))] = [i]
     }
  }
  //output
  //return the object
  return letters
}
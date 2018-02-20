/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 	Spichonees (made-up name) live in country Spichland where are no gender. 
 	Spichonees are big lovers, so each Spichonee loves any another Spichonee. 
 	Unfortunately there are sometimes situations, when Spichonee A loves Spichonee B, 
 	Spichonee B loves Spichonee C and Spichonee C loves Spichonee A. 
 	This phenomenon is called Love triangle.
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
  for (var i = 0; i <= preferences.length - 1; i++) {
  	

  	if(preferences[preferences[preferences[i] - 1] - 1] === i - 1){
  		count += 1;
  	}
  }
  return count;
};

/**
*
*	COMPUTE: median
*
*
*	DESCRIPTION:
*		- Computes the median of an array of values.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: median( arr )
	*	Computes the median of an array of values.
	*
	* @param {Array} arr - array of values
	* @returns {Number} median value
	*/
	function median( arr ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'median()::invalid input argument. Must provide an array.' );
		}
		var id, vec;

		// Create a copy of the input array:
		vec = arr.slice();

		// Sort the vector:
		vec.sort( function sort( a, b ) {
			return a - b;
		});

		// Get the middle index:
		id = Math.floor( vec.length / 2 );

		if ( vec.length % 2 ) {
			// The number of elements is not evenly divisible by two, hence we have a middle index:
			return vec[ id ];
		}

		// Even number of elements, so must take the mean of the two middle values:
		return ( vec[ id-1 ] + vec[ id ] ) / 2.0;
	} // end FUNCTION median()


	// EXPORTS //

	module.exports = median;

})();
/**
*
*	COMPUTE: median
*
*
*	DESCRIPTION:
*		- Computes the median of a numeric array.
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

'use strict';

// FUNCTIONS //

/**
* FUNCTION: ascending( a, b )
*	Comparator function used to sort values in ascending order.
*
* @private
* @param {Number} a
* @param {Number} b
* @returns {Number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
} // end FUNCTION ascending()


// MEDIAN //

/**
* FUNCTION: median( arr[, sorted] )
*	Computes the median of a numeric array.
*
* @param {Array} arr - numeric array
* @param {Boolean} [sorted] - boolean flag indicating if the array is sorted in ascending order
* @returns {Number} median value
*/
function median( arr, sorted ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'median()::invalid input argument. Must provide an array.' );
	}
	if ( arguments.length > 1 && typeof sorted !== 'boolean' ) {
		throw new TypeError( 'median()::invalid input argument. Second argument must be a boolean.' );
	}
	var len = arr.length,
		id;

	if ( !sorted ) {
		arr = arr.slice();
		arr.sort( ascending );
	}

	// Get the middle index:
	id = Math.floor( len / 2 );

	if ( len % 2 ) {
		// The number of elements is not evenly divisible by two, hence we have a middle index:
		return arr[ id ];
	}
	// Even number of elements, so must take the mean of the two middle values:
	return ( arr[ id-1 ] + arr[ id ] ) / 2.0;
} // end FUNCTION median()


// EXPORTS //

module.exports = median;

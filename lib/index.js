/**
*
*	COMPUTE: median
*
*
*	DESCRIPTION:
*		- Computes the median of an array.
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

// MODULES //

var isArray = require( 'validate.io-array' ),
	isObject = require( 'validate.io-object' ),
	isBoolean = require( 'validate.io-boolean' ),
	isFunction = require( 'validate.io-function' );


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
* FUNCTION: median( arr[, options] )
*	Computes the median of an array.
*
* @param {Array} arr - input array
* @param {Object} [options] - function options
* @param {Boolean} [options.sorted] - boolean flag indicating if the array is sorted in ascending order
* @param {Function} [options.accessor] - accessor function for accessing array values
* @returns {Number|null} median value or null
*/
function median( arr, options ) {
	var sorted,
		clbk,
		len,
		id,
		d, i;

	if ( !isArray( arr ) ) {
		throw new TypeError( 'median()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isObject( options) ) {
			throw new TypeError( 'median()::invalid input argument. Options must be an object. Value: `' + options + '`.' );
		}
		if ( options.hasOwnProperty( 'sorted' ) ) {
			sorted = options.sorted;
			if ( !isBoolean( sorted ) ) {
				throw new TypeError( 'median()::invalid option. Sorted flag must be a boolean. Option: `' + sorted + '`.' );
			}
		}
		if ( options.hasOwnProperty( 'accessor' ) ) {
			clbk = options.accessor;
			if ( !isFunction( clbk ) ) {
				throw new TypeError( 'median()::invalid option. Accessor must be a function. Option: `' + clbk + '`.' );
			}
		}
	}
	len = arr.length;
	if ( !len ) {
		return null;
	}
	if ( !clbk && sorted ) {
		d = arr;
	}
	else if ( !clbk ) {
		d = [];
		for ( i = 0; i < len; i++ ) {
			d.push( arr[ i ] );
		}
	}
	else {
		d = [];
		for ( i = 0; i < len; i++ ) {
			d.push( clbk( arr[ i ] ) );
		}
	}
	if ( !sorted ) {
		d.sort( ascending );
	}
	// Get the middle index:
	id = Math.floor( len / 2 );

	if ( len % 2 ) {
		// The number of elements is not evenly divisible by two, hence we have a middle index:
		return d[ id ];
	}
	// Even number of elements, so must take the mean of the two middle values:
	return ( d[ id-1 ] + d[ id ] ) / 2.0;
} // end FUNCTION median()


// EXPORTS //

module.exports = median;

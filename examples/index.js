'use strict';

var median = require( './../lib' );

var data = new Array( 1001 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random() * 100 );
}
console.log( median( data ) );

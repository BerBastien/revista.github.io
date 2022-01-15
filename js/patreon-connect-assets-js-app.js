;(function() {

	jQuery( function( $ ) {

		jQuery( document ).on( 'click', '.patreon-locked-image', function( e ) {
			
			e.preventDefault();
			
			// Get the encoded url
			var patreon_flow_url = atob( jQuery( this ).attr( 'data-patreon-flow-url' ) );
			
			window.location.replace( patreon_flow_url );
			return;
		});

	});
	
})()
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */
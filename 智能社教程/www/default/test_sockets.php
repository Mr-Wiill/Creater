<?php
if (extension_loaded('sockets')) {
	//Create socket IPv4
	$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP) ;
	if($socket === false) {
		$errorcode = socket_last_error() ;
		$errormsg = socket_strerror($errorcode);
		echo "<p>Error socket IPv4: ".$errormsg."</p>\n" ;
	}
	else {
		echo "<p>Socket IPv4 supported</p>\n" ;
		socket_close($socket);
	}

	//Create socket IPv6
	$socket = socket_create(AF_INET6, SOCK_STREAM, SOL_TCP) ;
	if($socket === false) {
		$errorcode = socket_last_error() ;
		$errormsg = socket_strerror($errorcode);
		echo "<p>Error socket IPv6: ".$errormsg."</p>\n" ;
	}
	else {
		echo "<p>Socket IPv6 supported</p>\n" ;
		socket_close($socket);
	}
}
else echo "<p>Extension PHP sockets not loaded</p>\n" ;
?>

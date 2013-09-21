<?php

// Include the javascript code from ishlet.js
$js = file_get_contents("ishlet.js");
// encodes the js string so it doesn't interfere with the landing page
$js_html = htmlentities($js);

?>
<!DOCTYPE html>
<html>
<head>
	<title>ishlet. A bookmarklet version of Brad Frost's viewport resizer.</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width" />
	<style type="text/css">

		body {
			padding-top: 3em;
			background-color: #fafbfd;
			font-family: helvetica, arial, sans-serif;
			text-align: center;
		}

		.container {
			max-width: 25em;
			margin: 2em auto;
			padding: 4em 0;
		}

		.btn {
			display: block;
			margin-bottom: .5em;
			padding:.5em;
			background-color: #ccc;
			-webkit-border-radius: 8px;
			-moz-border-radius: 8px;
			border-radius: 8px;
			font-weight: bold;
			color: #333;
			text-decoration: none;
			text-transform: uppercase;
		}

	</style>
</head>
<body>
	<h1>ishlet.</h1>
	<h2>A bookmarklet version of Brad Frost's viewport resizer.</h2>

	<div class="container">
		<a class='btn' href="<?php echo($js_html); ?>">ishlet.</a>
		<small>Drag link to the bookmarks bar to install</small>
	</div>

</body>
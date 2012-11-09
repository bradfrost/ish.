<!DOCTYPE html>
<html>
<head>
    <title>ish. yet another viewport resizer.</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="styles.css" media="all" />
</head>
<body>
<?php //Get URL Parameter
$url = $_GET['url'];
if ($url!="") {
	$src= $url;
} else {
	$src = 'http://bradfrostweb.com/blog/post/ish';
}
?>
<!--iFrame-->
<div id="vp-wrap"><iframe id="viewport" src="<?php echo $src; ?>"></iframe></div>
<!--end iFrame-->
<ul class="nav size" id="nav">
	<li><a href="#" id="size-toggle" class="active">Size</a></li>
	<li><a href="#" id="size-s">S</a></li>
	<li><a href="#" id="size-m">M</a></li>
	<li><a href="#" id="size-l">L</a></li>
	<li><a href="#" id="size-xl">XL</a></li>
	<li><a href="#" id="size-random">Random</a></li>
	<li>
		<form method="post" action="#" id="size-enter" >
			<input id="size-num" type="number" pattern="[0-9]*" step="10" min="100" placeholder="Enter Size" />
		</form>
	</li>
</ul>

<div class="nav url-change">
	<form method="get" action="">
		<label for="url" id="url-toggle" class="url-toggle">URL</label>
	     <input id="url" type="url" name="url" placeholder="Enter any URL" />
	  </form>
</div>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"></script>
<script type="text/javascript" src="js/init.js "></script>
</body>
</html>
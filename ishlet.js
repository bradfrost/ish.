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
	$src = (empty($_GET['url'])) ? 'http://bradfrostweb.com/blog/post/ish' : addslashes(filter_input(INPUT_GET, 'url', FILTER_SANITIZE_URL));
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
	<li><a href="#" id="size-full">100%</a></li>
	<li><a href="#" id="size-random">Random</a></li>
	<li><a href="#" id="size-disco">Disco</a></li>
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
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-2687475-3']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
</body>
</html>
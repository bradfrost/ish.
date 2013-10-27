<!DOCTYPE html>
<html>
<head>
<?php //Get URL Parameter
	$src = (empty($_GET['url'])) ? 'http://bradfrostweb.com/blog/post/ish' : addslashes(filter_input(INPUT_GET, 'url', FILTER_SANITIZE_URL));
	// Get an optional Title Parameter. Handy for more than one instance of ish during presentations
	$title = (empty($_GET['title'])) ? 'ish. yet another viewport resizer.' : filter_input(INPUT_GET, 'title');
?>

    <meta charset="UTF-8">
    <title><?php echo $title; ?></title>
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="styleguide/css/styleguide.css" media="all" />
    <script src="styleguide/js/jquery.js"></script>
</head>
<body class="sg-nav-wrapper">
<!--Style Guide Header-->
<header class="sg-header" role="banner">
	<a href="#sg-nav-container" class="sg-nav-toggle">Menu</a>
	<div class="sg-nav-container" id="sg-nav-container" style="min-height: 33px">
		<!--Begin Pattern Navigation-->
<?php 
//Get the correct URL for this domain. Is there really no easier way to do this?
$protocol = (empty($_SERVER['HTTPS'])) ? 'http' : 'https';
$bookmarkletURL = $protocol."://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]";
?>
		<a href="javascript:location.href='<?php echo $bookmarkletURL; ?>?title='+document.title+'&url='+window.location.href">ish</a>

		<!--End Pattern Navigation-->
		
		<!--Begin Controls-->
		<div class="sg-controls" id="sg-controls">
				<div class="sg-control-content">
					<ul class="sg-control">
						<li class="sg-size">
							<div class="sg-current-size"><form id="sg-form">Size <input type="text" class="sg-input sg-size-px" value="320">px / <input type="text" class="sg-input sg-size-em" value="20">em</form></div>
							<ul class="sg-acc-panel sg-size-options">
								<li class="sg-quarter"><a href="#" id="sg-size-s">S</a></li> 
								<li class="sg-quarter"><a href="#" id="sg-size-m">M</a></li>
								<li class="sg-quarter"><a href="#" id="sg-size-l">L</a></li>
								<li class="sg-quarter"><a href="#" id="sg-size-xl">XL</a></li>
								<li class="sg-half"><a href="#" id="sg-size-full">Full</a></li>
								<li class="sg-half"><a href="#" id="sg-size-random">Random</a></li>
								<li class="sg-half"><a href="#" class="mode-link" id="sg-size-disco">Disco</a></li>
								<li class="sg-half"><a href="#" class="mode-link" id="sg-size-hay">Hay!</a></li>
							</ul>
						</li>
					</ul>
				</div>
		</div>
		<!--End Controls-->
	</div>
</header>
<!--End Style Guide Header-->


<!-- Iframe -->
<div id="sg-vp-wrap">
	<div id="sg-cover"></div>
	<div id="sg-gen-container">
		<iframe id="sg-viewport" src="<?php echo $src; ?>" style="background: #fff;"></iframe>
		<div id="sg-rightpull-container">
			<div id="sg-rightpull"></div>
		</div>
	</div>
</div>
<!--end iFrame-->

<script src="styleguide/js/data-saver.js"></script>
<script src="styleguide/js/styleguide.js "></script>
<script src="styleguide/js/annotations-viewer.js "></script>
</body>
</html>
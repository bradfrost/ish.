javascript:void((function()%7Bvar d=document;d.write('
<!DOCTYPE html>
<html>
<head>
    <title>
'+d.title+'-ish.</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="http://demo.patternlab.io/styleguide/css/styleguide.css" media="all" />
</head>
<body>
<header class="sg-header" role="banner" style="height:33px">
	<div class="sg-controls" id="sg-controls">
		<div class="sg-control-content">
			<ul class="sg-control">
				<li class="sg-size">
					<div class="sg-current-size">
						<form id="sg-form">
							Size <input type="text" class="sg-input sg-size-px" value="320">px /
							<input type="text" class="sg-input sg-size-em" value="20">em
						</form><!--end #sg-form-->
					</div><!--end #sg-current-size-->
					<ul class="sg-acc-panel sg-size-options">
						<li class="sg-quarter"><a href="#" id="sg-size-s">S</a></li>
						<li class="sg-quarter"><a href="#" id="sg-size-m" class="active">M</a></li>
						<li class="sg-quarter"><a href="#" id="sg-size-l">L</a></li>
						<li class="sg-half"><a href="#" id="sg-size-full">Full</a></li>
						<li class="sg-half"><a href="#" id="sg-size-random">Random</a></li>
						<li class="sg-half"><a href="#" class="mode-link" id="sg-size-disco">Disco</a></li>
						<li class="sg-half"><a href="#" class="mode-link" id="sg-size-hay">Hay!</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</header>

<!-- Iframe -->
<div id="sg-vp-wrap" style="background-color:#4b4b4b;">
	<div id="sg-cover" style="display: none;"></div>
	<div id="sg-gen-container" class="vp-animate" style="width: 737.4595843125135px;">
		<iframe id="sg-viewport" src="'+d.URL+'" class="vp-animate" style="width: 723.4595843125135px;"></iframe>
		<div id="sg-rightpull-container">
			<div id="sg-rightpull"></div>
		</div>
	</div>
</div>
<!--end iFrame-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script src="http://bradfrostweb.com/demo/ish/js/data-saver.js"></script>
<script src="http://bradfrostweb.com/demo/ish/js/url-handler.js"></script>
<script src="http://bradfrostweb.com/demo/ish/js/init.js"></script>
</body>
</html>
')%7D)());

(function(w){
	var sw = document.body.clientWidth,
		sh = document.body.clientHeight,
		$sgViewport = $('#viewport'),
		$urlToggle = $('#url-toggle'),
		$sizeToggle = $('#size-toggle'),
		$tSize = $('#size'),
		$sizeS = $('#size-s'),
		$sizeM = $('#size-m'),
		$sizeL = $('#size-l'),
		$sizeXL = $('#size-xl'),
		$sizeR = $('#size-random'),
		$sizeInput = $('#size-enter'),
		$vp,
		$sgPattern;
	
	$(w).resize(function(){ //Update dimensions on resize
		sw = document.body.clientWidth;
		sh = document.body.clientHeight;
	});
	
	//View Trigger
	$urlToggle.on("click", function(e){
		e.preventDefault();
		$(this).parents('.nav').toggleClass('active');
	});

	//Size Trigger
	$sizeToggle.on("click", function(e){
		e.preventDefault();
		$(this).parents('ul').toggleClass('active');
	});
	
	//Size View Events
	$sizeS.on("click", function(e){
		e.preventDefault();
		sizeiframe(getRandom(240,500));
	});
	$sizeM.on("click", function(e){
		e.preventDefault();
		sizeiframe(getRandom(500,800));
	});
	$sizeL.on("click", function(e){
		e.preventDefault();
		sizeiframe(getRandom(800,1200));
	});
	$sizeXL.on("click", function(e){
		e.preventDefault();
		sizeiframe(getRandom(1200,1920));
	});
	$sizeR.on("click", function(e){
		e.preventDefault();
		sizeiframe(getRandom(240,sw));
	});
	
	$sizeInput.submit(function(){
		var val = $('#size-num').val();
		sizeiframe(val);
		return false;
	});


	$sgViewport.load(function (){
		$vp = $sgViewport.contents();
		$sgPattern = $vp.find('.pattern');

		
		$tClean.on("click", function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$sgViewport.contents().hide();
			$vp.find('#intro, .head, #about-sg').toggle();
			$vp.find('[role=main]').toggleClass('clean');
		});
		
		//Code View Trigger
		$tCode.on("click", function(e){
			var $code = $vp.find('.code');
			e.preventDefault();
			$(this).toggleClass('active');
			
			if($vp.find('.code').length==0) {
				buildCodeView();
			} else {
				$code.toggle();
			}
		});
	});

	function buildCodeView() {
		$sgPattern.each(function(index) {
			$this = $(this),
			$thisHTML = $this.html().replace(/[<>]/g, function(m) { return {'<':'&lt;','>':'&gt;'}[m]}),
			$thisCode = $( '<code></code>' ).html($thisHTML);
			
			$('<pre class="code" />').html($thisCode).appendTo($this);
		});
		$vp.find('.code').show();
	}
	
	function sizeiframe(size) {
		$('#viewport').width(size);
	}
	
	
	/* Returns a random number between min and max */
	function getRandom (min, max) {
	    return Math.random() * (max - min) + min;
	}

})(this);
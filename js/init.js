(function(w){
	var doc = document,
	docBody = doc.body,
	WIDTH = docBody.clientWidth,
	SMALL = 240,
	MEDIUM = 500,
	LARGE = 800,
	XLARGE = 1200,
	FULL = 1900,
	$urlToggle = $('#url-toggle'),
	$sizeToggle = $('#size-toggle'),
	$body = $('body'),
	$sizeS = $('#size-s'),
	$sizeM = $('#size-m'),
	$sizeL = $('#size-l'),
	$sizeXL = $('#size-xl'),
	$sizeFull = $('#size-full'),
	$sizeR = $('#size-random'),
	$sizeDisco = $('#size-disco'),
	$sizeInput = $('#size-enter'),
	discoID = false,
	discoMode;
	
	$(w).resize(function(){ //Update dimensions on resize
		WIDTH = docBody.clientWidth;
	});
	
	$(w).keydown(function (a) {
	    if ($body.hasClass("focusMode")) {
	      switch (a.keyCode) {
	      case 49:
		      $sizeS.click();
		      break; 
	      case 50:
		      $sizeM.click();
		      break; 
	      case 51:
		      $sizeL.click();
		      break; 
	      case 52:
		      $sizeXL.click();
		      break; 
	      case 53:
		      $sizeFull.click();
		      break; 
	      }
	    }
	    // alt+U
	    if (a.keyCode == 85 && a.altKey) {
	      $body.toggleClass("focusMode");
	    }
	});
		
	//View Trigger
	$urlToggle.on("click", function(event){
		toggleActive(event, this, '.nav');
	});

	//Size Trigger
	$sizeToggle.on("click", function(event){
		toggleActive(event, this, 'ul');
	});
	
	//Size View Events
	$sizeS.on("click", function(event) {
		resizePage(event, SMALL, MEDIUM);
	});
	$sizeM.on("click", function(event) {
		resizePage(event, MEDIUM, LARGE);
	});
	$sizeL.on("click", function(event){
		resizePage(event, LARGE, XLARGE);
	});
	$sizeXL.on("click", function(event){
		resizePage(event, XLARGE, FULL);
	});
	$sizeFull.on("click", function(event){
		resizePage(event, WIDTH);
	});
	$sizeR.on("click", function(event){
		resizePage(event, SMALL, WIDTH);
	});
	$sizeDisco.on("click", function(e){
		e.preventDefault();
		if (discoMode) {
			stopDisco();
		} else {
			discoMode = true;
			discoID = setInterval(disco, MEDIUM);
		}
	});
	
	$sizeInput.submit(function(){
		setViewportWidth(doc.getElementById('size-num').value);
		return false;
	});
	
	//Private functions
	function resizePage(event, minWidth, maxWidth) {
		event.preventDefault();
		stopDisco();
		setViewportWidth(maxWidth === undefined ?
			minWidth :
			getRandom(minWidth, maxWidth));
	}
	
	function setViewportWidth(size) {
		doc.getElementById('viewport').style.width = size + 'px';
	}

	function startDisco() {
		setViewportWidth(getRandom(SMALL, WIDTH));
	}
	
	function stopDisco() {
		discoMode = false;
		clearInterval(discoID);
		discoID = false;
	}
	
	function toggleActive(event, root, container {
		event.preventDefault();
		return $(root).parents(container).toggleClass('active');
	}
	
	/* Returns a random number between min and max */
	function getRandom (min, max) {
	    return Math.random() * (max - min) + min;
	}

})(this);

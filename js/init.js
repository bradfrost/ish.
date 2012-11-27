(function(w){
	var sw = document.body.clientWidth,
		sh = document.body.clientHeight,
		$sgViewport = $('#viewport'),
		$urlToggle = $('#url-toggle'),
		$sizeToggle = $('#size-toggle'),
		$body = $('body'),
		$tSize = $('#size'),
		$sizeS = $('#size-s'),
		$sizeM = $('#size-m'),
		$sizeL = $('#size-l'),
		$sizeXL = $('#size-xl'),
		$sizeFull = $('#size-full'),
		$sizeR = $('#size-random'),
		$sizeDisco = $('#size-disco'),
		$sizeInput = $('#size-enter'),
		$urlUpdate = $('#updateIFrame'),
		$vp,
		$sgPattern,
		discoID = false,
		discoMode;
	
	$(w).resize(function(){ //Update dimensions on resize
		sw = document.body.clientWidth;
		sh = document.body.clientHeight;
	});
	
  $(w).keydown(function (a) {
    if($body.hasClass("focusMode")) {
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
    if(a.keyCode == 85 && a.altKey) {
      $body.toggleClass("focusMode");
    }
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
		killDisco();
		sizeiframe(getRandom(240,500));
	});
	$sizeM.on("click", function(e){
		e.preventDefault();
		killDisco();
		sizeiframe(getRandom(500,800));
	});
	$sizeL.on("click", function(e){
		e.preventDefault();
		killDisco();
		sizeiframe(getRandom(800,1200));
	});
	$sizeXL.on("click", function(e){
		e.preventDefault();
		killDisco();
		sizeiframe(getRandom(1200,1920));
	});
	$sizeFull.on("click", function(e){
		e.preventDefault();
		killDisco();
		sizeiframe(sw);
	});
	$sizeR.on("click", function(e){
		e.preventDefault();
		killDisco();
		sizeiframe(getRandom(240,sw));
	});
	
	$urlUpdate.submit(function () {
        $sgViewport.attr('src', $('#url').val());
        $('#url').val(' ');
        return false;
    });
	
	$sizeDisco.on("click", function(e){
		e.preventDefault();
		if (discoMode) {
			killDisco();
		} else {
			discoMode = true;
			discoID = setInterval(disco, 800);
		}
		
	});
	
	$sizeInput.submit(function(){
		var val = $('#size-num').val();
		sizeiframe(val);
		return false;
	});

	function disco() {
		sizeiframe(getRandom(240,sw));
	}
	
	function sizeiframe(size) {
		$('#viewport').width(size);
	}
	
	function killDisco() {
		discoMode = false;
		clearInterval(discoID);
		discoID = false;
	}
	
	/* Returns a random number between min and max */
	function getRandom (min, max) {
	    return Math.random() * (max - min) + min;
	}

})(this);
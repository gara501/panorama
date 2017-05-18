var interior360 = (function() {
	'use strict';
	var marzi = {
		controls: true,
		controlsContainer: '',
		root: '',
		context: '',
		image: '',
		viewer: {},
		source: {},
		tileSize: 0,
		size: 0,
		zoomLimit: 0,
	};

	function init(options) {
		marzi.root = document.getElementById(options.root);
		marzi.context = marzi.root.querySelector('.panorama');
		marzi.image = options.path + options.image;
		marzi.viewer = new Marzipano.Viewer(marzi.context);
		marzi.tileSize = options.tileSize || 1024;
		marzi.size = options.size || 1024;
		marzi.zoomLimit = options.zoomLimit || 4096;
		console.log(marzi.viewer);
		marzi.zoom = marzi.root.querySelector('.zoom');
		marzi.zoomIn = marzi.root.querySelector('.zoom-in');
		marzi.zoomOut = marzi.root.querySelector('.zoom-out');
		marzi.fullScreen = marzi.root.querySelector('.fullScreen');
		marzi.controlsContainer = marzi.root.querySelector('.controls');

		if (options.controls.length > 0) {
			var controlsClass = options.controls.split(' ');
			controlsClass.map(function(el) {
				marzi.controlsContainer.classList.add(el);
			});
		}

		marzi.source = Marzipano.ImageUrlSource.fromString(marzi.image);
		zoomListener();
    addZoomListener();
		render();
	}

  function zoomListener() {
    marzi.zoomIn.addEventListener('click', zoomInOut);
    marzi.zoomOut.addEventListener('click', zoomInOut);
  }

  function zoomInOut(event) {
    event.preventDefault();
    if (event.target.classList.contains('zoom-in')) {
      this.classList.add('hide');
      this.parentNode.querySelector('.zoom-out').classList.remove('hide')
    } else {
      this.classList.add('hide');
      this.parentNode.querySelector('.zoom-in').classList.remove('hide')
    }
  }

	function addZoomListener() {
		var velocity = 0.8;
		var friction = 0.2;
		var controls = marzi.viewer.controls();

		controls.registerMethod(
			'inElement',
			new Marzipano.ElementPressControlMethod(marzi.zoomIn, 'zoom', -velocity, friction),
			true
		);

		controls.registerMethod(
			'outElement',
			new Marzipano.ElementPressControlMethod(marzi.zoomOut, 'zoom', velocity, friction),
			true
		);
	}

	function render() {
		// Create geometry.
		var geometry = new Marzipano.CubeGeometry([{ tileSize: marzi.tileSize, size: marzi.size }]);

		// Create view.
		//var limiter = Marzipano.RectilinearView.limit.traditional(marzi.zoomLimit, 100 * Math.PI / 180);
    var limiter = Marzipano.RectilinearView.limit.traditional(2048, 1.74, 1.74);

		var view = new Marzipano.RectilinearView(null, limiter);

		// Create scene.
		var scene = marzi.viewer.createScene({
			source: marzi.source,
			geometry: geometry,
			view: view,
			pinFirstLevel: true,
		});

		// Display scene.
		scene.switchTo();
	}

	return {
		init: init,
	};
})();

var panOptions = {
	root: 'marzi1',
	image: '16_Pilot_Interior_360_o_{f}.jpg',
	path: 'https://gara501.github.io/panorama/images/',
	controls: 'zoom-desktop-on fullscreen-off zoom-mobile-off'
};

var panOptionsHrv = {
	root: 'marzi2',
	image: '17_HR-V_Interior_360_o_{f}.jpg',
	path: 'https://gara501.github.io/panorama/images/',
	controls: 'zoom-desktop-on fullscreen-off zoom-mobile-off'
};
interior360.init(panOptions);
interior360.init(panOptionsHrv);

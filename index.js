
'use strict';

function marzi(element, model) {
  // Create viewer.
  var viewer = new Marzipano.Viewer(document.getElementById(element));

  // Create source.
  switch (model) {
    case 'pilot':
      var source = Marzipano.ImageUrlSource.fromString(
        "/images/16_Pilot_Interior_360_o_{f}.jpg"
      );
    break;
    case 'hrv':
      var source = Marzipano.ImageUrlSource.fromString(
        "/images/17_HR-V_Interior_360_o_{f}.jpg"
      );
    break;
    default:

  }

  // Create geometry.
  var geometry = new Marzipano.CubeGeometry([{ tileSize: 1024, size: 1024 }]);

  // Create view.
  var limiter = Marzipano.RectilinearView.limit.traditional(4096, 100*Math.PI/180);
  var view = new Marzipano.RectilinearView(null, limiter);

  // Create scene.
  var scene = viewer.createScene({
    source: source,
    geometry: geometry,
    view: view,
    pinFirstLevel: true
  });

  // Display scene.
  scene.switchTo();
}

marzi('pano', 'pilot');
marzi('pano2', 'hrv');

'use strict';

function panel(id, model) {
  var path = 'https://gara501.github.io/panorama/images/';
  switch (model) {
    case 'hrv':
      pannellum.viewer(id, {
        "type": "cubemap",
        "autoLoad": true,
        "maxLevel": 10,
        "showControls": true,
        "cubeMap": [
            path + "17_HR-V_Interior_360_o_0.jpg",
            path + "17_HR-V_Interior_360_o_1.jpg",
            path + "17_HR-V_Interior_360_o_2.jpg",
            path + "17_HR-V_Interior_360_o_3.jpg",
            path + "17_HR-V_Interior_360_o_4.jpg",
            path + "17_HR-V_Interior_360_o_5.jpg"
        ]
      });
      break;
    case 'pilot':
      pannellum.viewer(id, {
        "type": "cubemap",
        "autoLoad": true,
        "maxLevel": 10,
        "showControls": true,
        "cubeMap": [
            path + "16_Pilot_Interior_360_o_0.jpg",
            path + "16_Pilot_Interior_360_o_1.jpg",
            path + "16_Pilot_Interior_360_o_2.jpg",
            path + "16_Pilot_Interior_360_o_3.jpg",
            path + "16_Pilot_Interior_360_o_4.jpg",
            path + "16_Pilot_Interior_360_o_5.jpg"
        ]
      });
      break;
    default:
  }

}

panel('panorama2', 'hrv');
panel('panorama', 'pilot');

'use strict';

function panel(id, model) {
  console.log(pannellum);
  switch (model) {
    case 'hrv':
      pannellum.viewer(id, {
        "type": "cubemap",
        "autoLoad": true,
        "maxLevel": 10,
        "showControls": true,
        "cubeMap": [
            "/images/17_HR-V_Interior_360_o_0.jpg",
            "/images/17_HR-V_Interior_360_o_1.jpg",
            "/images/17_HR-V_Interior_360_o_2.jpg",
            "/images/17_HR-V_Interior_360_o_3.jpg",
            "/images/17_HR-V_Interior_360_o_4.jpg",
            "/images/17_HR-V_Interior_360_o_5.jpg"
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
            "/images/16_Pilot_Interior_360_o_0.jpg",
            "/images/16_Pilot_Interior_360_o_1.jpg",
            "/images/16_Pilot_Interior_360_o_2.jpg",
            "/images/16_Pilot_Interior_360_o_3.jpg",
            "/images/16_Pilot_Interior_360_o_4.jpg",
            "/images/16_Pilot_Interior_360_o_5.jpg"
        ]
      });
      break;
    default:
  }

}

panel('panorama2', 'hrv');
panel('panorama', 'pilot');

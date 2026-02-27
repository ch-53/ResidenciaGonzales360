var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala",
      "name": "sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.4451403542668793,
        "pitch": -0.004096009224131336,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.960788949508405,
          "pitch": 0.3731489518494957,
          "rotation": 0,
          "target": "3-comedor"
        },
        {
          "yaw": 1.1385950961029838,
          "pitch": 0.42999743644112165,
          "rotation": 0,
          "target": "1-cuarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cuarto",
      "name": "cuarto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.8864148871099147,
        "pitch": 0.0031066941576654017,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0739683970102867,
          "pitch": 0.2936563397173071,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina-2",
      "name": "cocina 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0842381729728352,
        "pitch": 0.004993257212454694,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3389781526580222,
          "pitch": 0.30257638495556094,
          "rotation": 6.283185307179586,
          "target": "3-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-comedor",
      "name": "comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.4959553548340008,
        "pitch": -0.006283185307150774,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5371109482033418,
          "pitch": 0.45427641837549615,
          "rotation": 0.7853981633974483,
          "target": "2-cocina-2"
        },
        {
          "yaw": -1.814484833904272,
          "pitch": 0.45006575357889567,
          "rotation": 0,
          "target": "0-sala"
        },
        {
          "yaw": -1.4194751846740612,
          "pitch": -0.05641925308441742,
          "rotation": 14.137166941154074,
          "target": "1-cuarto"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "RESIDENCIA GONZALEZ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

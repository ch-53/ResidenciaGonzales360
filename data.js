var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala-de-estar",
      "name": "SALA DE ESTAR",
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
        "yaw": -1.7508563576648406,
        "pitch": -0.0009544165705257512,
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
          "target": "1-cuarto-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cuarto-principal",
      "name": "CUARTO PRINCIPAL",
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
          "yaw": -2.075948129273483,
          "pitch": 0.30073774810452036,
          "rotation": 0,
          "target": "0-sala-de-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina",
      "name": "COCINA",
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
        "yaw": 0.2397610254414957,
        "pitch": 0.000280868232074738,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8896408392769724,
          "pitch": 0.21852256454571517,
          "rotation": 18.06415775814132,
          "target": "4-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-comedor",
      "name": "COMEDOR",
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
          "yaw": 1.5371114642337602,
          "pitch": 0.4526715492096862,
          "rotation": 0.7853981633974483,
          "target": "2-cocina"
        },
        {
          "yaw": -1.814484833904272,
          "pitch": 0.45006575357889567,
          "rotation": 0,
          "target": "0-sala-de-estar"
        },
        {
          "yaw": -1.4194751846740612,
          "pitch": -0.05641925308441742,
          "rotation": 14.137166941154074,
          "target": "1-cuarto-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-entrada",
      "name": "ENTRADA",
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
        "yaw": -1.2290223396447963,
        "pitch": 0.0006349556259479527,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6115660793106237,
          "pitch": 0.12864214806337415,
          "rotation": 1.5707963267948966,
          "target": "1-cuarto-principal"
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

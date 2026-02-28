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
      "faceSize": 1456,
      "initialViewParameters": {
        "yaw": -1.6181424179469097,
        "pitch": 0.0031800870770535283,
        "fov": 1.4795154723455672
      },
      "linkHotspots": [
        {
          "yaw": 1.1160722144623954,
          "pitch": 0.2378408545695052,
          "rotation": 0,
          "target": "4-habitacin-principal"
        },
        {
          "yaw": 2.845111163303132,
          "pitch": 0.1861182587128205,
          "rotation": 0,
          "target": "2-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cocina",
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
      "faceSize": 1456,
      "initialViewParameters": {
        "yaw": -0.15109977944857889,
        "pitch": -0.010902270463457597,
        "fov": 1.4786529366841208
      },
      "linkHotspots": [
        {
          "yaw": 2.766584430838023,
          "pitch": 0.1622833984171823,
          "rotation": 5.497787143782138,
          "target": "0-sala-de-estar"
        },
        {
          "yaw": 2.991686844923372,
          "pitch": -0.017577657723549578,
          "rotation": 7.853981633974483,
          "target": "4-habitacin-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-comedor",
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
      "faceSize": 1456,
      "initialViewParameters": {
        "yaw": 1.4873633153073662,
        "pitch": 0.010748515225719402,
        "fov": 1.4795154723455672
      },
      "linkHotspots": [
        {
          "yaw": 1.4662615141334836,
          "pitch": 0.21704365508901802,
          "rotation": 0.7853981633974483,
          "target": "1-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entrada",
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
      "faceSize": 1456,
      "initialViewParameters": {
        "yaw": -1.2414742934122316,
        "pitch": -0.011499409989465192,
        "fov": 1.4795154723455672
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "4-habitacin-principal",
      "name": "HABITACIÓN PRINCIPAL",
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
      "faceSize": 1456,
      "initialViewParameters": {
        "yaw": 1.1176327465944347,
        "pitch": -0.002460847837603808,
        "fov": 1.4795154723455672
      },
      "linkHotspots": [
        {
          "yaw": -2.1665295243582587,
          "pitch": 0.1846750410973499,
          "rotation": 0,
          "target": "0-sala-de-estar"
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

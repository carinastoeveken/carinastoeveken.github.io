var APP_DATA = {
  "scenes": [
    {
      "id": "0-vogelperspektive",
      "name": "Vogelperspektive",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.03757167009223039,
        "pitch": 0.1659358893582894,
        "fov": 1.4510934010586207
      },
      "linkHotspots": [
        {
          "yaw": -0.07220087844096668,
          "pitch": 0.43631629295564167,
          "rotation": 5.497787143782138,
          "target": "1-erdgeschoss"
        },
        {
          "yaw": -0.4698857608081184,
          "pitch": 0.24054463652979585,
          "rotation": 9.42477796076938,
          "target": "5-dachgarten"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.028681223292071678,
          "pitch": 0.15704546491814142,
          "title": "DENKEN UND ARBEITEN Innovationszentrum Berlin TXL",
          "text": "<div>Ein Tageslicht-optimiertes Gebäude, dessen Geometrie nach den Regeln des Lichteinfalls ausgebildet wurden. Die sechs repräsentativen Lichthöfe bilden zusammen mit der Fassade nicht nur die Geometrie sondern auch die Grundstruktur der inneren Organisation.</div>"
        }
      ]
    },
    {
      "id": "1-erdgeschoss",
      "name": "Erdgeschoss",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.5019432842685205,
        "pitch": 0.08727880419590406,
        "fov": 1.4510934010586207
      },
      "linkHotspots": [
        {
          "yaw": -0.33851422377165896,
          "pitch": -0.09288511761959839,
          "rotation": 0.7853981633974483,
          "target": "2-kommunikationsbereich"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.048229746993746,
          "pitch": 0.06433610891406794,
          "title": "Erdgeschossebene",
          "text": "Im Erdgeschoss gibt es Sondernutzungen wie Gastronomie, Kita, Fitness, Vortragssäle, Bibliothek und Eventflächen. Diese können von der angrenzenden Hochschule mitgenutzt werden."
        }
      ]
    },
    {
      "id": "2-kommunikationsbereich",
      "name": "Kommunikationsbereich",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.473146179546241,
        "pitch": -0.048315290810696965,
        "fov": 1.4510934010586207
      },
      "linkHotspots": [
        {
          "yaw": -1.9132974227256803,
          "pitch": 0.3176239982859279,
          "rotation": 3.141592653589793,
          "target": "1-erdgeschoss"
        },
        {
          "yaw": 2.8659002474411306,
          "pitch": 0.01885415515704736,
          "rotation": 10.995574287564278,
          "target": "3-brobereich"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3107387443925154,
          "pitch": 0.08692004728096059,
          "title": "informelle Kommunikation",
          "text": "<div>Die Bereiche um die Lichthöfe beinhalten zum Beispiel Sitzgelegenheiten, Teeküche und die Erschließung, und fördern somit stark die informelle Kommunikation und den Austausch zwischen den MitarbeiterInnen und Firmen.&nbsp;</div>"
        }
      ]
    },
    {
      "id": "3-brobereich",
      "name": "Bürobereich",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.799074214176164,
        "pitch": 0.04191979616386732,
        "fov": 1.4510934010586207
      },
      "linkHotspots": [
        {
          "yaw": 1.7695419374054024,
          "pitch": -0.10848925941597898,
          "rotation": 0,
          "target": "0-vogelperspektive"
        },
        {
          "yaw": -1.6412060376218367,
          "pitch": 0.06875415571562371,
          "rotation": 0.7853981633974483,
          "target": "4-lichthof"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9151567038788997,
          "pitch": -0.06239496529714472,
          "title": "Bürolayer",
          "text": "<div>Der Fassaden-Layer wird als standartisierte Bürofläche mit Besprechungsräumen, hellen Arbeitsplätzen und Einzelbüros genutzt.&nbsp;<br></div>"
        },
        {
          "yaw": -1.205621903180445,
          "pitch": 0.0427192681828803,
          "title": "Forschungsbereich",
          "text": "<div>Zwischen diesen Bereichen in Fassaden- bzw. Lichthofnähe ergibt sich ein Zwischenbereich, welcher um einen Meter herabgesetzt wurde, um hier mehr Tageslicht zu erhalten. In diesen Splitlevels befindet sich der stützenfreie Forschungs- und Produktionsraum der Firmen.</div>"
        }
      ]
    },
    {
      "id": "4-lichthof",
      "name": "Lichthof",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.1627638898876267,
        "pitch": 0.01710042728520378,
        "fov": 1.4510934010586207
      },
      "linkHotspots": [
        {
          "yaw": -1.0622797619240263,
          "pitch": 0.043972527304809716,
          "rotation": 7.0685834705770345,
          "target": "3-brobereich"
        },
        {
          "yaw": 1.3560662332293596,
          "pitch": -0.3674552228825174,
          "rotation": 0,
          "target": "5-dachgarten"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.44042664284733135,
          "pitch": 0.030884845098247737,
          "title": "Forschung/Produktion",
          "text": "Zwischen diesen Bereichen in Fassaden- bzw. Lichthofnähe ergibt sich ein Zwischenbereich, welcher um einen Meter herabgesetzt wurde, um hier mehr Tageslicht zu erhalten. In diesen Splitlevels befindet sich der stützenfreie Forschungs- und Produktionsraum der Firmen."
        },
        {
          "yaw": 1.3274000866164783,
          "pitch": 0.44403748572636204,
          "title": "Seminarraum",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-dachgarten",
      "name": "Dachgarten",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.0039786698089017,
        "pitch": 0.10053821246042816,
        "fov": 1.4510934010586207
      },
      "linkHotspots": [
        {
          "yaw": -1.1228421628209944,
          "pitch": -0.06110826819541515,
          "rotation": 5.497787143782138,
          "target": "0-vogelperspektive"
        },
        {
          "yaw": 1.8428163333457963,
          "pitch": 0.22203523353523558,
          "rotation": 3.9269908169872414,
          "target": "4-lichthof"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.127352626259448,
          "pitch": 0.3222301286877709,
          "title": "Dachgarten",
          "text": "&nbsp;Der großzügige Dachgarten ermöglicht ein Arbeiten im Freien und stellt außerdem Sportangebote und Joggingstrecken bereit. Im Sommer werden die Oberlichter (ETFE-Membran) der Lichthöfe nach oben gefahren, sodass das gesamte Gebäude zum Außenraum und natürlich belüftet werden kann."
        }
      ]
    }
  ],
  "name": "Innovationszentrum Urban Tech Republic Berlin",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};

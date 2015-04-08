var style = {
  "version": 7,
  "sprite": "https://www.mapbox.com/mapbox-gl-styles/sprites/outdoors",
  "glyphs": "mapbox://fontstack/{fontstack}/{range}.pbf",
  "constants": {
    "@land": "#000",
    "@water": "#3887be",
    "@coverage": "#ff3300",
    "@cicos": "#ff5fff",
    "@motorway_width": {
      "base": 1.25,
      "stops": [
        [
          9,
          1
        ],
        [
          20,
          30
        ]
      ]
    }
  },
  "sources": {
    //"chubbs": {
    //  "type": "vector",
    //  "tiles": ["http://localhost:3002/services/postgis/bangladesh_coverage/geom/vector-tiles/{z}/{x}/{y}.pbf"]
    //},
    //"chubbs_cicos": {
    //  "type": "vector",
    //  "tiles": ["http://localhost:3002/services/postgis/bangladesh_cicos/geom/vector-tiles/{z}/{x}/{y}.pbf?fields=featuretype"]
    //},
    //"osm-seattle": {
    //  type: "vector",
    //  "tiles": ['http://localhost:3002/services/vector-tiles/osm_seattle/{z}/{x}/{y}.pbf']
    //},
    //"bangladesh-districts":{
    //   "type": "vector",
    //  "tiles": ["http://localhost:3002/services/postgis/bangladesh_districts/geom/vector-tiles/{z}/{x}/{y}.pbf"]
    //},

    "kenya-cicos":{
      "type":"vector",
      "tiles": ["http://spatialserver.spatialdev.com/services/vector-tiles/cicos_2013_kenya/{z}/{x}/{y}.pbf"]
    },
    "kenya-districts":{
      "type": "vector",
      "tiles": ["http://spatialserver.spatialdev.com/services/vector-tiles/KenyaCounties/{z}/{x}/{y}.pbf"]
    },
    "kenya-coverage": {
      "type": "vector",
      "tiles": ["http://localhost:3002/services/postgis/kenya_coverage/geom/vector-tiles/{z}/{x}/{y}.pbf"]
    }
  },
  "layers": [
  //  {
  //  "id": "background",
  //  "type": "background",
  //  "paint": {
  //    "background-color": "@land"
  //  }
  //},
  //  {
  //    "id": "coverage",
  //    "type": "line",
  //    "source": "osm-seattle",
  //    "source-layer": "major_roads",
  //    "paint": {
  //      "line-color": "@coverage"
  //    }
  //  },
  //  {
  //    "id": "buildings",
  //    "type": "fill",
  //    "source": "osm-seattle",
  //    "source-layer": "buildings",
  //    "paint": {
  //      "fill-color": "@coverage",
  //      "fill-opacity": 0.3
  //    }
  //  },

    {
      "id": "coverage",
      "type": "fill",
      "source": "kenya-coverage",
      "source-layer": "kenya_coverage_geom",
      "paint": {
        //"fill-color": "#04cdff",
        "fill-color": {
          "base": 1.5,
          "stops": [
            [2, "#04cdff"],
            [10, "#c7ff04"]
          ]
        },
        //"fill-opacity": 0.3
        "fill-opacity": {
          "base": 1,
          "stops": [
            [2, 1],
            [10, 0]
          ]
        }
      }
    },
    {
      "id": "cicos",
      "type": "symbol",
      "source": "kenya-cicos",
      "source-layer": "data",

      "layout": {
        "icon-image": "bank-12",
        "text-field": "{type}",
        "text-optional": true,
        "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
        "text-max-size": 12,
        "text-letter-spacing": 0.4,
        "symbol-placement": "point",
        "text-offset": [
          0,
          3
        ]
      },
      "paint": {
        "text-size": 12,
        "text-color": "#000000",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,

        "text-opacity": {
          "base": 2,
          "stops": [
            [2, 0],
            [12, 1]
          ]
        }
      }
    }
  ]
}
define(['lib/leaflet/dist/leaflet'],function(){

  var _data = {

    defaults: {
      animationTime: 500
    },

    mapConfig: {
      center: [37.64, -97.11],
      zoom: 5,
      minZoom: 3,
      maxZoom: 16,
      maxBounds: {
        southWest:[10,-188],
        northEast: [75,-20]
      },
      basemapLayers: [{
        name: 'Gray',
        type: 'esriBasemap',
        displayRetina: true
      },{
        name: 'GrayLabels',
        type: 'esriBasemap',
        displayRetina: false,
        scaleDependent: {
          minZoom: 8,
        }
      }],
      operationalLayers: [{
        name: 'NationalParks',
        type: 'esriFeatureLayer',
        url: 'http://services.arcgis.com/nzS0F0zdNLvs7nc8/arcgis/rest/services/National_Parks/FeatureServer/0',
        popupFunction: function (feature) {
          var prop = feature.properties;
          var popupStr = '<h3>' + prop.Name + '</h3>';
          return popupStr;
        },
        popupOnHover: true
      }]
    },

    slides: [{
      title: 'Favorite National Parks',
      content: 'My first name is <input type="text" name="fname" placeholder="Sam">. I live in <input type="text" name="location" placeholder="Redlands"> and my favorite national park or monument is <input type="text" name="park" placeholder="Yellowstone">.',
      layers: {
        basemaps: ['Gray','GrayLabels'],
        operational: ['NationalParks']
      },
      tasks: {
        mapTasks: [{
          type: 'setBounds',
          data: {
            bounds: {
              southWest:[25,-125],
              northEast: [51,-66]
            }
          }
        }]
      }
    }],

    footer: {
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      relatedStories: [{
        title: 'Feeding the World',
        url: 'http://storymaps.esri.com/stories/feedingtheworld/',
        thumbnail: 'http://www.arcgis.com/sharing/content/items/5c6188dd18654760ae59a6822a0a67f0/info/thumbnail/feeding.png'
      },{
        title: 'Zoo Babies',
        url: 'http://storymaps.esri.com/stories/2014/zoo-babies/',
        thumbnail: 'http://www.arcgis.com/sharing/content/items/6a213c9015604f80b47f8718debce911/info/thumbnail/Zoo.png'
      },{
        title: 'Twister Dashboard',
        url: 'http://storymaps.esri.com/stories/2014/tornadoes/',
        thumbnail: 'http://www.arcgis.com/sharing/rest/content/items/bf071b4bd72147108ddad032a7fdc092/info/thumbnail/Twist.png'
      }]
    }

  };

  return _data;
});

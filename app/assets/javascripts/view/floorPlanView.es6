var CycleDOM = require('@cycle/dom');
var svg = CycleDOM.svg;


module.exports = (message => {
  var roomOpacity = (room) => (message['room'] == room ? (message['time'])/message['duration'] : 0);
  var roomOffset = (index) => (message['rooms'][index]['name'].length-1)*4;
  return svg("svg#svg2", {
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",
      "xmlns:cc": "http://creativecommons.org/ns#",
      "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      "xmlns:svg": "http://www.w3.org/2000/svg",
      "xmlns": "http://www.w3.org/2000/svg",
      "version": "1.1",
      "width": "673.22833",
      "height": "318.89764"
  }, [
    svg("title#title3010", [ "Floor plans of Buda castle" ]),
    svg("defs#defs4"),
    svg("metadata#metadata7", [
      svg("rdf:rdf", [
        svg("cc:work", {
            "rdf:about": ""
        }, [
          svg("dc:format", [ "image/svg+xml" ]),
          svg("dc:type", {
              "rdf:resource": "http://purl.org/dc/dcmitype/StillImage"
          }),
          svg("dc:title", [ "Floor plans of Buda castle" ]),
          svg("dc:date", [ "20131210" ]),
          svg("dc:creator", [
            svg("cc:agent", [
              svg("dc:title", [ "Göran Jönsson" ])
            ])
          ]),
          svg("dc:rights", [
            svg("cc:agent", [
              svg("dc:title", [ "Göran Jönsson" ])
            ])
          ]),
          svg("dc:publisher", [
            svg("cc:agent", [
              svg("dc:title", [ "Göran Jönsson" ])
            ])
          ]),
          svg("cc:license", {
              "rdf:resource": "http://creativecommons.org/licenses/by-sa/3.0/"
          }),
          svg("dc:identifier", [ "Floor plans of Buda Castle" ])
        ]),
        svg("cc:license", {
            "rdf:about": "http://creativecommons.org/licenses/by-sa/3.0/"
        }, [
          svg("cc:permits", {
              "rdf:resource": "http://creativecommons.org/ns#Reproduction"
          }),
          svg("cc:permits", {
              "rdf:resource": "http://creativecommons.org/ns#Distribution"
          }),
          svg("cc:requires", {
              "rdf:resource": "http://creativecommons.org/ns#Notice"
          }),
          svg("cc:requires", {
              "rdf:resource": "http://creativecommons.org/ns#Attribution"
          }),
          svg("cc:permits", {
              "rdf:resource": "http://creativecommons.org/ns#DerivativeWorks"
          }),
          svg("cc:requires", {
              "rdf:resource": "http://creativecommons.org/ns#ShareAlike"
          })
        ])
      ])
    ]),
    svg("g#layer2", {
        "transform": "translate(0,-38.976335)",
        "style": "display:inline"
    }, [
      svg("path#rect4311", {
          "d": "m 12.880344,91.5 0,100.75 95.968786,0 0,-69.78125 26.5,0 0,-30.96875 -26.5,0 -2.59375,0 -93.375036,0 z",
          "style": "color:#000000;fill:#00a3e8;fill-opacity:" + roomOpacity('A') + ";stroke:#595959;stroke-width:0.88582677;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate"
      }),
      svg("path#rect4315", {
          "d": "m 174.4375,48.0625 0,6.84375 -39.09375,0 0,67.5625 14.53125,0 0,15.5625 91.875,0 0,-15.5625 13.59375,0 8.375,0 20.71875,0 0,-37.25 -20.71875,0 0,-30.3125 -38.625,0 0,-6.84375 -50.65625,0 z",
          "style": "color:#000000;fill:#b97a57;fill-opacity:" + roomOpacity('B') + ";stroke:#595959;stroke-width:0.88582677;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate"
      }),
      svg("path#rect5095", {
          "d": "m 537.5,93.40625 0,28.69958 22.40625,0 0,69.43447 98.96875,0 0,-69.43447 0,-11.44897 0,-17.25061 -121.375,0 z",
          "style": "color:#000000;fill:#ed1b24;fill-opacity:" + roomOpacity('E') + ";stroke:#595959;stroke-width:0.88582677;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate"
      }),
      svg("path#rect5101", {
          "d": "m 317.375,75.6875 0,5.75 -4.4375,0 0,3.78125 -28.5,0 0,106.34375 73.09375,0 9.78125,0 19.3125,0 0,-106.34375 -19.3125,0 -7.75,0 0,-3.78125 -4.4375,0 0,-5.75 -37.75,0 z",
          "style": "color:#000000;fill:#23b14d;fill-opacity:" + roomOpacity('C') + ";stroke:#595959;stroke-width:0.88582677;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate"
      }),
      svg("path#rect5109", {
          "d": "m 448.09375,48.0625 0,6.84375 -39.125,0 0,30.3125 -22.34375,0 0,37.25 29.09375,0 14.90625,0 0,9.71875 26.21875,0 0,3.21875 34.125,0 0,-3.21875 26.21875,0 0,-9.71875 11.9375,0 8.375,0 0,-37.25 0,-30.3125 -38.875,0 0,-6.84375 -50.53125,0 z",
          "style": "color:#000000;fill:#b6c083;fill-opacity:" + roomOpacity('D') + ";stroke:#595959;stroke-width:0.88582677;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate"
      }),
      svg("path#rect5121", {
          "d": "m 357.46875,191.5625 0,37 -2.59375,0 0,117.15625 2.59375,0 26.46875,0 2.59375,0 0,-4.09375 50.5,0 0,3.28125 11.875,0 0,5.40625 48.375,0 0,-5.40625 11.875,0 0,-3.28125 50.84375,0 0,4.09375 31.6875,0 0,-117.15625 -2.59375,0 0,-37 -26.5,0 0,37 -2.59375,0 0,24.5 -50.65625,0 0,-10.40625 -20.25,0 0,-11.59375 -32,0 0,11.59375 -20.28125,0 0,10.40625 -50.28125,0 0,-24.5 -2.59375,0 0,-37 -26.46875,0 z",
          "style": "color:#000000;fill:#d2f332;fill-opacity:" + roomOpacity('F') + ";stroke:#595959;stroke-width:0.88582677;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate"
      }),
      svg("text#text5180", {
          "x": "50.998672",
          "y": "146.5088",
          "xml:space": "preserve",
          "style": "font-size:16px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#595959;fill-opacity:1;stroke:none;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans"
      }, [ svg("tspan#tspan5182", {
          "x": (50.998672 - roomOffset(0)).toString(),
          "y": "146.5088",
          "style": "font-size:18px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;fill:#595959;fill-opacity:1;font-family:Liberation Sans;-inkscape-font-specification:Liberation Sans Bold"
      }, [ message['rooms'][0]['name'] ]) ]),
      svg("text#text5184", {
          "x": "192.44991",
          "y": "96.263573",
          "xml:space": "preserve",
          "style": "font-size:16px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#595959;fill-opacity:1;stroke:none;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans"
      }, [ svg("tspan#tspan5186", {
          "x": (192.44991 - roomOffset(1)).toString(),
          "y": "96.263573",
          "style": "font-size:18px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;fill:#595959;fill-opacity:1;font-family:Liberation Sans;-inkscape-font-specification:Liberation Sans Bold"
      }, [ message['rooms'][1]['name'] ]) ]),
      svg("text#text5188", {
          "x": "462.79105",
          "y": "96.263573",
          "xml:space": "preserve",
          "style": "font-size:16px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#595959;fill-opacity:1;stroke:none;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans"
      }, [ svg("tspan#tspan5190", {
          "x": (462.79105 - roomOffset(3)).toString(),
          "y": "96.263573",
          "style": "font-size:18px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;fill:#595959;fill-opacity:1;font-family:Liberation Sans;-inkscape-font-specification:Liberation Sans Bold"
      }, [ message['rooms'][3]['name'] ]) ]),
      svg("text#text5192", {
          "x": "326.80124",
          "y": "146.5088",
          "xml:space": "preserve",
          "style": "font-size:16px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#595959;fill-opacity:1;stroke:none;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans"
      }, [ svg("tspan#tspan5194", {
          "x": (326.80124 - roomOffset(2)).toString(),
          "y": "146.5088",
          "style": "font-size:18px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;fill:#595959;fill-opacity:1;font-family:Liberation Sans;-inkscape-font-specification:Liberation Sans Bold"
      }, [ message['rooms'][2]['name'] ]) ]),
      svg("text#text5196", {
          "x": "606.97296",
          "y": "146.5088",
          "xml:space": "preserve",
          "style": "font-size:16px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#595959;fill-opacity:1;stroke:none;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans"
      }, [ svg("tspan#tspan5198", {
          "x": (606.97296 - roomOffset(4)).toString(),
          "y": "146.5088",
          "style": "font-size:18px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;fill:#595959;fill-opacity:1;font-family:Liberation Sans;-inkscape-font-specification:Liberation Sans Bold"
      }, [ message['rooms'][4]['name'] ]) ]),
      svg("text#text5200", {
          "x": "462.79105",
          "y": "301.06747",
          "xml:space": "preserve",
          "style": "font-size:16px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#595959;fill-opacity:1;stroke:none;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans"
      }, [ svg("tspan#tspan5202", {
          "x": (462.79105 - roomOffset(5)).toString(),
          "y": "301.06747",
          "style": "font-size:18px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;fill:#595959;fill-opacity:1;font-family:Liberation Sans;-inkscape-font-specification:Liberation Sans Bold"
      }, [ message['rooms'][5]['name'] ]) ])
    ])
  ])
});

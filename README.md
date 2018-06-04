# GeoRss to GeoJSON

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

> Library to convert GeoRSS Tag into GeoJSON Feature.

## Usage

You need to convert your GeoRss tag with [xml-js](https://github.com/nashwaan/xml-js) module and pass the tag to this module.

```RssToGeoJson.convert(xmlJson)```

## Exemple

See `exemples/index.js` for featured exemple.

## Limitation

For the moment, this module support only `<georss:polygon>` tag.

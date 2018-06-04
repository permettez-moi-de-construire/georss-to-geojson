import getFeatureGeometry from './get-feature-geometry'

class RssToGeoJson {
  static convert (rss) {
    return ({
      'type': 'Feature',
      'geometry': getFeatureGeometry(rss)
    })
  }
}

export default RssToGeoJson

import {
  getPolygonGeometry
} from './get-geometry'

const getFeatureGeometry = (item) => {
  let geometry

  if (item['georss:polygon']) {
    const rawGeometry = item['georss:polygon']._text
    geometry = getPolygonGeometry(rawGeometry)
  } else {
    throw new Error('Unknown feature type')
  }
  return geometry
}

export default getFeatureGeometry

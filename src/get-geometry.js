const getPolygonGeometry = (rawGeometry) => {
  const coordinates = []
  const rawCoordinates = rawGeometry.split(' ')
  rawCoordinates.forEach((coordinate, i) => {
    if (i === 0 || !(i % 2)) {
      const latitude = parseFloat(rawCoordinates[i])
      const longitude = parseFloat(rawCoordinates[i + 1])
      if (longitude === 'undefined' || latitude === 'undefined') {
        throw new Error('Error in coordinates format')
      }
      coordinates.push([longitude, latitude])
    }
  })
  return {
    'type': 'Polygon',
    'coordinates': [coordinates]
  }
}

export {
  getPolygonGeometry
}

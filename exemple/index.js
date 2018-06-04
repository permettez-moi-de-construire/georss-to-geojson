#!/usr/bin/env node

import {
  RssToGeoJson
} from '../lib/georss-to-geojson'
import convert from 'xml-js'
import fs from 'fs'

(async function () {
  try {
    const filePath = process.argv[2]
    if (!filePath) {
      throw new Error('Path is missing')
    }
    await fs.readFile(filePath, 'utf-8', (error, rss) => {
      if (error) {
        throw error
      }
      const xmlJson = JSON.parse(convert.xml2json(rss, {
        compact: true
      }))
      console.log(JSON.stringify(RssToGeoJson.convert(xmlJson), null, 2))
    })
  } catch (exception) {
    console.error('Error:', exception.message)
  }
})()

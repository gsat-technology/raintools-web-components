import React from 'react'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Rectangle
} from 'react-google-maps'
const {
  DrawingManager
} = require('react-google-maps/lib/components/drawing/DrawingManager')

const MapPicker = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=drawing',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)(({ mapItems, drawingOptions, mapItemsSelected }) => {
  return (
    <GoogleMap defaultZoom={4} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {mapItems.map(item => {
        return (
          <div key={`${item.north}${item.south}${item.east}${item.west}`}>
            <Rectangle
              bounds={{
                north: item.north,
                south: item.south,
                east: item.east,
                west: item.west
              }}
              options={item.options}
            />
          </div>
        )
      })}

      <DrawingManager
        onRectangleComplete={rectangle => {
          const drawnBounds = rectangle.getBounds()

          if (rectangle != null) rectangle.setMap(null)

          const intersected = []

          mapItems.forEach((item, index) => {
            const bounds = new window.google.maps.LatLngBounds(
              new window.google.maps.LatLng({
                lat: item.south,
                lng: item.east
              }),
              new window.google.maps.LatLng({
                lat: item.north,
                lng: item.west
              })
            )

            if (
              drawnBounds.contains(bounds.getNorthEast()) &&
              drawnBounds.contains(bounds.getSouthWest())
            ) {
              intersected.push(index)
            }
          })
          mapItemsSelected(intersected)
        }}
        defaultDrawingMode={window.google.maps.drawing.OverlayType.RECTANGLE}
        defaultOptions={{
          drawingControl: true,
          drawingControlOptions: {
            position: window.google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [window.google.maps.drawing.OverlayType.RECTANGLE]
          },
          rectangleOptions: drawingOptions.rectangle
        }}
      />
    </GoogleMap>
  )
})

export default MapPicker

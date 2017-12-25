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
)(({ bounds, options, drawingOptions }) => {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {bounds.map(item => (
        <div key={`${item.north}${item.south}${item.east}${item.west}`}>
          <Rectangle bounds={item} options={options} />
        </div>
      ))}

      <DrawingManager
        defaultDrawingMode={window.google.maps.drawing.OverlayType.CIRCLE}
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

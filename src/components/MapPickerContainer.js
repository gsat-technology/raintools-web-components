import React from 'react'
import MapPicker from './MapPicker'

class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mapItems: this.props.mapItems.map(item => ({
        ...item,
        options: this.props.rectangleOptions.default
      })),
      drawingOptions: {
        rectangle: {
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1
        }
      }
    }
  }

  handleMapItemsSelected = ids => {
    this.setState({
      ...this.state,
      mapItems: this.state.mapItems.map((item, index) => {
        if (ids.indexOf(index) !== -1) {
          return {
            ...item,
            options: this.props.rectangleOptions.highlight
          }
        } else {
          return {
            ...item,
            options: this.props.rectangleOptions.default
          }
        }
      })
    })

    this.props.mapItemsSelected(ids)
  }

  render() {
    return (
      <MapPicker
        mapItemsSelected={this.handleMapItemsSelected}
        mapItems={this.state.mapItems}
        drawingOptions={this.state.drawingOptions.rectangle}
      />
    )
  }
}

export default MapContainer

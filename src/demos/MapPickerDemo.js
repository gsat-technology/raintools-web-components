import React from 'react'
import MapPicker from '../components/MapPicker'

const mapItems = [
  {
    west: 139.18,
    east: 150.41,
    north: -33.6,
    south: -42.17
  },
  {
    west: 142.03,
    east: 148.48,
    north: -35.24,
    south: -39.59
  },
  {
    west: 143.31,
    east: 146.23,
    north: -36.33,
    south: -38.5
  }
]

const rectangleOptions = {
  default: {
    strokeColor: '#ccc',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#efefef',
    fillOpacity: 0.35
  },
  highlight: {
    strokeColor: '#666',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#efefef',
    fillOpacity: 0.35
  }
}

export default class MapPickerDemo extends React.Component {
  state = {
    items: []
  }

  handleMapItemSelected = items => {
    this.setState({
      items: JSON.stringify(items)
    })
  }

  render() {
    return (
      <div>
        selected items: <span id="selected-items">{this.state.items}</span>
        <MapPicker
          rectangleOptions={rectangleOptions}
          mapItemsSelected={this.handleMapItemSelected}
          mapItems={mapItems}
        />
      </div>
    )
  }
}

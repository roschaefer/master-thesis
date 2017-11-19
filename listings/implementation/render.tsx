render() {
  return (
    <div className="multiview-map-component">
    <Map ref={(m) => this._map= m} bounds={this.bounds()}>
    <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    />
    { this.state.geojsonUrl && this.state.geojson &&
      <GeoJSON
      key={this.state.geojsonUrl}
      data={this.state.geojson}
      style={this.featureStyle}
      pointToLayer={this.pointToLayer}
      onEachFeature={this.onEachFeature}
      >
      </GeoJSON>
    }
    </Map>
    </div>
  );
}

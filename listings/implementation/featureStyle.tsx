featureStyle(feature: geojson.Feature<geojson.GeometryObject>): Leaflet.PathOptions{
  const focused = (this.state.focusedIds.includes(Number(feature.id)))
  const fillColor = focused ?  Color('red') : Color('blue');
  let color = fillColor;
  let weight = 2;
  let dashArray = '3';
  if (this.state.highlightedIds.includes(Number(feature.id))) {
    weight = 4;
    color = 'white';
    dashArray = '';
  }
  return { color, weight, fillColor, dashArray };
}

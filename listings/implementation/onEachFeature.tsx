onEachFeature(feature: geojson.Feature<geojson.GeometryObject>, layer: Leaflet.Layer){
  this.state.layerList.push(layer);
  layer.on({
    mouseover: () => {
      this.state.controller.publish('mcv.select.highlight', [Number(feature.id)]);
    },
    click: (event: Leaflet.LeafletMouseEvent) => {
      if(event.originalEvent.ctrlKey){
        this.state.controller.publish('mcv.select.focus', this.xor(this.state.focusedIds, Number(feature.id)));
      } else {
        this.state.controller.publish('mcv.select.focus', [Number(feature.id)]);
      }
    }
  });
}

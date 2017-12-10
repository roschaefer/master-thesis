import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapComponent, MultiviewCoordinator} from 'urban-analytics-multiview-map-component';

let coordinator = new MultiviewCoordinator();


ReactDOM.render(
  <MapComponent coordinator={coordinator}/>,
  document.getElementById('multiview-map-component')
);


import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapComponent, MultiviewCoordinator} from 'urban-analytics-multiview-map-component';

let controller = new MultiviewCoordinator();


ReactDOM.render(
  <MapComponent controller={controller}/>,
  document.getElementById('multiview-map-component')
);


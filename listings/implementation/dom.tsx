import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapComponent, MultiviewCoordinator } from 'urban-analytics-multiview-map-component';

let controller = new MultiviewController();

ReactDOM.render(
  <MultiviewMap controller={controller}/>,
  document.getElementById('multiview-map-component')
);


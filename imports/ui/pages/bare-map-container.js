import {composeWithTracker} from "react-komposer";
import BareMapDisplay from "../components/bare-map-display";
import loadResourceData from "../../api/manager/load-resource-data";

// Use the loadResourceData composer to populate the "data" property of the ResourceData component.
export default composeWithTracker(loadResourceData)(BareMapDisplay);

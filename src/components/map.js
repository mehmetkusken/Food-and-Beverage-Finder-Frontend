import React from 'react';
import {GoogleMap , withScriptjs, withGoogleMap} from "react-google-maps";





function Map() {
    
    return (
    <GoogleMap defaultZoom={10} defaultCenter={{lat:39.739235,lng:-104.990250}} />   
    );  
}

export default Map
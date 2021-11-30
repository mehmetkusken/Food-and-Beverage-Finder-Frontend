import React , {useEffect, useState} from 'react';
import {GoogleMap , withScriptjs, withGoogleMap , Marker, InfoWindow} from "react-google-maps";
import {getRestaurants} from '../redux/actionCreators';
import {connect} from 'react-redux';





function Map(props) {

    const [restaurantsInfo, setrestaurantsInfo] = useState(null);
    const [centerMap, setCenterMap] = useState({lat:39.739235,lng:-104.990250});
    const [isInfoShow, setIsInfoShow] = useState(false);

    useEffect(() => {
        if (props.restaurants && props.restaurants.length > 0) {
            setCenterMap({lat: props.restaurants[0].latitude, lng: props.restaurants[0].longitude})
        }
    }, [props.restaurants]);

    useEffect(() => {
        if(props.selectedRestaurant) {
            setCenterMap({lat: props.selectedRestaurant.latitude, lng: props.selectedRestaurant.longitude})
            setIsInfoShow(true);
        } else {
            setIsInfoShow(false);
        }
    }, [props.selectedRestaurant])

   
    return (
    <GoogleMap zoom={isInfoShow ? 17 : 12} center={centerMap} >  
        {props.restaurants.map((park) => (
        <Marker key={park.id} position={{
            lat: park.latitude ,
            lng: park.longitude
        }}
        onClick={() => {
            setrestaurantsInfo(park);
        }}
        
        />
    ))}
    {restaurantsInfo && (
        <InfoWindow position={{
            lat: restaurantsInfo.latitude ,
            lng: restaurantsInfo.longitude
        }}
        onCloseClick={() => {
            setrestaurantsInfo(null);
        }}
        >
        <div>
            <h2>{restaurantsInfo.name}</h2>
    <p>{restaurantsInfo.description}</p>
    <p>Score:{restaurantsInfo.score}</p>
        </div>
        </InfoWindow>
    )}
    </GoogleMap> 
    );  
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
        selectedRestaurant: state.selectedRestaurant
    }
}
export default connect(mapStateToProps, {getRestaurants})(Map) ;

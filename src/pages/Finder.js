import React, { useEffect, useState } from 'react';
import Map from '../components/map';
import {getRestaurants} from '../redux/actionCreators';
import { withScriptjs, withGoogleMap} from "react-google-maps";
import {connect} from 'react-redux';
import SearchCardList from '../components/searchCardList';
import Search from '../components/search'


const WareppedMap = withScriptjs(withGoogleMap(Map));


const Finder = (props) => {
    const [showRestaurantInfo, setShowRestaurantInfo] = useState(false);

    useEffect(() => {
        props.getRestaurants();
    }, []);
    
    return(
        <div className=''
        style={styles.container}>

            <div style={styles.map}>
                <WareppedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDBANMz84xHoZWGGx2rGRNacO8LykbJJzk`}
                loadingElement={<div style={{ height: "100%"}}/>}
                containerElement={<div style={{ height: "100%"}}/>}
                mapElement={<div style={{ height: "100%"}}/>}
                />
            </div>


            <div style={styles.info}>
                { !showRestaurantInfo ?  <Search /> : '' }

                <SearchCardList restaurants={props.restaurants} showInfo={showRestaurantInfo} setShowInfo={setShowRestaurantInfo} />               
                
                
            </div>
        </div>
    );

}

const styles = {
    container: {
        height: "calc(100vh - 102px)",
        backgroundColor: "gray",
        display: "flex",
        width: "100vw"
    },
    map: {
        width: "67%",
        height: "100%",
        backgroundColor: "teal"
    },
    info: {
        width: "33%",
        height: "100%",
        backgroundColor: "white"
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
        
    }
}

export default connect(mapStateToProps, {getRestaurants})(Finder) ;
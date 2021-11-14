import React, { useState } from 'react';
import Search from '../components/search';
import image1 from "../assets/images/FoodAndBeverage.png";
import Map from '../components/map';
import {GoogleMap , withScriptjs, withGoogleMap} from "react-google-maps";



const WareppedMap = withScriptjs(withGoogleMap(Map));

const dummyData =  {
    cardData:[ 
        {  
            id:1 ,
            img : image1 ,
            title: "3 Margaritas",
            description: "Mexican Restaurant",
            score: 4.8
        }
    ],
    infoCardData: [
        { 
            id: 1,
            img : image1 ,
            title: "3 Margaritas",
            description: "Mexican Restaurant",
            score: 4.8,
            address: "Somewhere in somecity",
            phone_number: "+1 555 55 55",

        }
    ]
}

const Finder = () => {
    const [showRestorantInfo, setShowRestorantInfo] = useState(false);
    const [selectedRestorant, setSelectedRestorant] = useState(null);

    const showRestorant = () => {

    }
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
                <Search />
               
                <div onClick={showRestorant}>

                </div>
                {showRestorantInfo ? <dummyData rest={selectedRestorant}  /> : null}
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

export { Finder, dummyData} ;

import React, { useState } from 'react';
import Search from '../components/search';
import image1 from "../assets/images/FoodAndBeverage.png";

const dummyData =  {
    cardData:[ 
        {  
        id:1 ,
        img : image1 ,
        title: "3 Margaritas",
        description: "Mexican Restaurant",
        score: 4.8
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
                <h1>Map List</h1>
            </div>
            <div style={styles.info}>
                <Search />
                <h3 className='ui header'>Info box and Rest List</h3>
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
        display: "flex"
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

export default { Finder,dummyData} ;

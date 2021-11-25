import {useState} from 'react';
import {getRestaurant, clearRestaurant, submitFavorite} from '../redux/actionCreators';
import {connect} from 'react-redux';


function SearchCardList(props) {
    const [isOpenedInfoCard, setIsOpenedInfoCard] = useState(false);
    

    const getRestaurantInfo = (id) => {
        props.getRestaurant(id);
        
    }

    const closeInfoCard = (event) => {
        props.clearRestaurant();
    }

    const addToFavorite = (event, id) => {
        submitFavorite(id);
    }

    return (
        <div style={{ height: "calc(100vh - 103px)", overflowY: 'auto'}}>
            
            {props.restaurant ?
             <>
                <div>
                    <button onClick={closeInfoCard}>See All Restaurants</button>
                </div>
                <div style={{padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>{props.restaurant.name}</div>
                    <div>
                        <button onClick={(event) => addToFavorite(event, props.restaurant.id)}>Add Favorite</button>
                    </div>

                </div>
             </>
            : 
            <>
                {props.restaurants.map((restaurantData) => {
                    return <div onClick={(event) => getRestaurantInfo(restaurantData.id)} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', cursor: 'pointer'}} key={restaurantData.id}>
                        <div>{restaurantData.name}</div>
                        <div>{restaurantData.score}</div>
                    </div>
                })}
             </>
            }
            
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        restaurant: state.selectedRestaurant,  
        
    }
}

export default connect(mapStateToProps, {getRestaurant, clearRestaurant})(SearchCardList) ;
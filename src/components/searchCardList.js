import {useState} from 'react';
import {getRestaurant, clearRestaurant, submitFavorite} from '../redux/actionCreators';
import {connect} from 'react-redux';
import SearchInfoCard from './searchInfoCard';




function SearchCardList(props) {
    const [isOpenedInfoCard, setIsOpenedInfoCard] = useState(false);
    const [favoritedRestaurant, setFavoritedRestaurant] = useState(null)
    

    const getRestaurantInfo = (id) => {
        props.getRestaurant(id);
        props.setShowInfo(true);
    }

    const closeInfoCard = (event) => {
        props.clearRestaurant();
        props.setShowInfo(false);
    }

    const addToFavorite = (id = null) => {
      if (id) {
        props.submitFavorite(id);
      }
    
    }

    return (
        <div style={{ height: "calc(100vh - 103px)", overflowY: 'auto'}}>
            
            {props.restaurant ?
             <SearchInfoCard closeInfoCard={closeInfoCard} restaurant={props.restaurant} onAddFavoriteClick={addToFavorite} />
            : 
            <>
                {props.restaurants.map((restaurantData) => {
                    return <div style={stylesList.container} onClick={(event) => getRestaurantInfo(restaurantData.id)} key={restaurantData.id}>
                       <div style={stylesList.imgContainer}>
                            <img style={stylesList.img} src={restaurantData.imageUrl} />
                       </div>
                        <div style={stylesList.detailsContainer}>
                            <div style={stylesList.title}>{restaurantData.name}</div>
                            <div style={stylesList.meta}>{restaurantData.address}</div>
                            <div style={stylesList.meta}>{restaurantData.description}</div>
                            <div class="" style={stylesList.rating} >
                                <i style={stylesList.ratingIcon} class="fas fa-star yellow"></i>
                                {restaurantData.score}</div>
                        </div>
                        
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

const stylesList = {
    container: {
        padding: "16px 16px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        cursor: "pointer"
    },
    imgContainer: {
        marginRight: "16px"
    },
    img: {
        width: "75px",
        height: "75px",
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: "8px"
    },
    detailsContainer: {},
    rating: { 
        fontWeight: "bold",
        fontSize: "12px"
    },
    ratingIcon: {
        color: "#f1c40f",
        marginRight: "4px"
    },
    title: { 
        color: "#2c3e50",
        fontWeight: "600"
    },
    meta: {
        color: "#34495e",
        fontSize: "12px"
    }
}




export default connect(mapStateToProps, {getRestaurant, clearRestaurant, submitFavorite})(SearchCardList) ;
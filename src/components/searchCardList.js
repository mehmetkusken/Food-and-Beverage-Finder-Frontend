import {useState} from 'react';
import {getRestaurant, clearRestaurant, submitFavorite} from '../redux/actionCreators';
import {connect} from 'react-redux';



function SearchCardList(props) {
    const [isOpenedInfoCard, setIsOpenedInfoCard] = useState(false);
    

    const getRestaurantInfo = (id) => {
        props.getRestaurant(id);
        props.setShowInfo(true);
    }

    const closeInfoCard = (event) => {
        props.clearRestaurant();
        props.setShowInfo(false);
    }

    const addToFavorite = (event, id) => {
        submitFavorite(id);
    }

    return (
        <div style={{ height: "calc(100vh - 103px)", overflowY: 'auto'}}>
            
            {props.restaurant ?
             <div style={stylesInfo.container}>

                <div style={stylesInfo.header}>
                    <button class="tiny ui left labeled icon button" onClick={closeInfoCard}>
                        <i class="left icon fas fa-arrow-left"></i>
                        Back
                    </button>
                    
                    <div style={stylesInfo.title}>{props.restaurant.name}</div>
                    <div class="tiny yellow ui labeled button" tabindex="0">
                        <div class="tiny yellow ui button">
                            <i class="star icon"></i> 
                        </div>
                        <a class="ui basic label">
                        {props.restaurant.score}
                        </a>
                    </div>
                    
                </div>
                <img style={stylesInfo.restaurantImg} src={props.restaurant.imageUrl} />
                <div style={stylesInfo.body}>
                    <div style={stylesInfo.description}>{props.restaurant.description}</div>
                    <div class="" style={stylesInfo.address} >
                        <i class="fas fa-map-marker-alt" style={stylesInfo.addressIcon}></i>
                        {props.restaurant.address}</div>
                    <div class="" style={stylesInfo.phoneNumber} >
                        <i class="fas fa-mobile-alt" style={stylesInfo.phoneNumberIcon}></i>
                        {props.restaurant.phone}</div>
                    
                    <div style={stylesInfo.actions}>
                        <a target="_blank" rel="noreferrer" href={props.restaurant.url} class="tiny ui red button">
                            <i class="yelp icon"></i>
                            View On Yelp
                        </a>
                        <div>
                            <button class="tiny ui button violet"  onClick={(event) => addToFavorite(event, props.restaurant.id)}>Add Favorite</button>
                        </div>
                    </div>
                    

                </div>
             </div>
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


const stylesInfo = {
    container: {},
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 16px"
    },
    title: {
        color: "#2c3e50",
        fontSize: "14px",
        fontWeight: "600",
        letterSpacing: "0.02rem"
    },
    restaurantImg: {
        width: "100%",
        height: "250px",
        objectFit: "cover",
        objectPosition: "center"
    } ,
    body: { 
        padding: "16px" ,
        display: "flex",
        flexDirection: "column",
        alingItems: "center",
        height: "100%"
    },
    description: {
        fontSize: "18px",
        fontWeight: "300",
        paddingBottom: "8px"
    },
    address: { 
        paddingBottom: "8px"
    },
    addressIcon: { 
        marginRight: "4px",
        color: "#e74c3c"
    },
    phoneNumber: { 
        paddingBottom: "8px",
    },
    phoneNumberIcon: { 
        color: "#3498db",
        marginRight: "4px"
    },
    actions: {
        marginTop:"8px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
};

export default connect(mapStateToProps, {getRestaurant, clearRestaurant})(SearchCardList) ;
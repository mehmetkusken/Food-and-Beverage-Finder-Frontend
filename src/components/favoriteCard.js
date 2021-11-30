function FavoriteCard({id, user, restaurant, onDeleteFavorite}){
        
    return <div>
        
        <div style={stylesInfo.container}>
        <div style={stylesInfo.header}>

            <div style={stylesInfo.title}>{restaurant.name}</div>
            <div class="tiny yellow ui labeled button" tabindex="0">
                <div class="tiny yellow ui button">
                    <i class="star icon"></i> 
                </div>
                <a class="ui basic label">
                {restaurant.score}
                </a>
            </div>
            
        </div>
        <img style={stylesInfo.restaurantImg} src={restaurant.imageUrl} />
        <div style={stylesInfo.body}>
            <div style={stylesInfo.description}>{restaurant.description}</div>
            <div class="" style={stylesInfo.address} >
                <i class="fas fa-map-marker-alt" style={stylesInfo.addressIcon}></i>
                {restaurant.address}</div>
            <div class="" style={stylesInfo.phoneNumber} >
                <i class="fas fa-mobile-alt" style={stylesInfo.phoneNumberIcon}></i>
                {restaurant.phone}</div>
            
            <div style={stylesInfo.actions}>
                <a target="_blank" rel="noreferrer" href={restaurant.url} class="tiny ui red button">
                    <i class="yelp icon"></i>
                    View On Yelp
                </a>
                <div>
                    <button class="tiny ui button violet"  onClick={(event) => onDeleteFavorite(id)}>Delete</button>
                </div>
            </div>
        </div>
     </div>

    </div>
}
const stylesInfo = {
    container: {
        
        
    },
    header: {  
        display: "flex",
        justifyContent: "space-between",
        padding: "16px 16px",
    },
    title: {
        color: "#2c3e50",
        fontSize: "14px",
        fontWeight: "600",
        letterSpacing: "0.02rem",
        
    },
    restaurantImg: {
        width: "250px",
        height: "250px",
        objectFit: "cover",
        objectPosition: "center",
    } ,

    body: { 
        padding: "16px" ,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
        
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

export default FavoriteCard;
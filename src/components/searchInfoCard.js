export default function SearchInfoCard(props) {

     return (<div style={stylesInfo.container}>

        <div style={stylesInfo.header}>
            <button class="tiny ui left labeled icon button" onClick={props.closeInfoCard}>
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
        <img  style={stylesInfo.restaurantImg} src={props.restaurant.imageUrl} />
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
                {
                    props.favorites.filter(favorite => favorite.restaurant.id == props.restaurant.id).length > 0 ? '' : <div>
                    <button class="tiny ui button violet"  onClick={(event) => props.onAddFavoriteClick(props.restaurant.id)}>Add Favorite</button>
                </div>
                }    
            </div>
        </div>
     </div>);
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
        alignItems: "center",
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
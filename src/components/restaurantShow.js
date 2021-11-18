import { useParams } from 'react-router-dom'
import { getRestaurant } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { useEffect } from 'react'


function RestaurantShow({getRestaurant,id, name, url, latitude, longitude, imageUrl, address, description, zipCode, score, phone }){
    const restaurantId = useParams().id
    useEffect(() => {
        getRestaurant(restaurantId)}, [getRestaurant, restaurantId])

    return <h1> Restaurant Show here</h1>
}

const mapStateToProps = (state) => {
    return {...state.restaurant}
}

export default connect(mapStateToProps, {getRestaurant})(RestaurantShow);
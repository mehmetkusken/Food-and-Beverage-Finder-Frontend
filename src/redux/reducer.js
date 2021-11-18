const initialState = {
    restaurants: [],
    restaurant: {
        id: 0,
        name: "",
        url: "",
        latitude: 0,
        longitude: 0, 
        imageUrl: "",
        address: "",
        description: "",
        zipCode: 0,
        score: 0,
        phone: "",
    },
    user: {
        username: "",
        email: "",
        zipcode: ""
    }
}


export default function reducer(state=initialState,action){
    switch (action.type){
        case "GET_RESTAURANTS":
            return {...state, restaurants: action.payload};
        case "GET_RESTAURANTS":
            return {...state, restaurant: action.payload};
        case "SET_USER":
            return {...state, user: action.payload};
        default:
            return{...state}
    }
}
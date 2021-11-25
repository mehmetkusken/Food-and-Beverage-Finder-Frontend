const initialRestaurant = null;

  const initialUser = {
    username: ""
  }
   
const initialState = {
    restaurants: [],
    selectedRestaurant: initialRestaurant,
    user: initialUser
}


export default function reducer(state=initialState,action){
    switch (action.type){
        case "GET_RESTAURANTS":
            return {...state, restaurants: action.payload};
        case "GET_RESTAURANT":
            return {...state, selectedRestaurant: action.payload};
        case "SET_USER":
            return {...state, user: action.payload};
        case "CLEAR_RESTAURANT":
            return {...state, selectedRestaurant: initialRestaurant};
        case "LOGOUT":
            return {...state, user: initialUser};
        default:
            return{...state}
    }
}
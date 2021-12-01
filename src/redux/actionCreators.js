function renderResponse(res,dispatch){
  { if(res.ok) {
      res.json()
      .then(response => {
         localStorage.token = response.token
         dispatch({type: "SET_USER", payload: response.user})
         
       })
     } else {
         res.json()
         .then(res => alert(res.errors))
     }
 }
}

const url = "http://localhost:3000/"

function graphQl (query){
  return fetch(url + "graphql",{
      method: "POST", 
      headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.token
      },
      body: JSON.stringify({query}),
  })
}

export const getRestaurants = (arr=[]) => {
const args = arr.map(obj => `${Object.keys(obj)}: "${obj[Object.keys(obj)]}"`).join(", ")
  return dispatch => graphQl(`{
      restaurants ${args && `(${args})`} {
          id
          name
          url
          latitude
          longitude
          imageUrl
          address
          zipCode
          description
          score
          phone
      }
  }`)
  .then(res => res.json())
  .then(({data}) => {
      
      dispatch({type: "GET_RESTAURANTS", payload: data.restaurants})
  })
}

export const getFavorites = () => {

  return dispatch => fetch(url + "favorites")
  .then(res => res.json())
  .then(favorites => dispatch({type: "GET_FAVORITES", payload: favorites}))
  
}

export const submitFavorite = (id) => {
   
  return dispatch => fetch(url + "favorites", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    },
    body: JSON.stringify({restaurant_id: id})
    
  })
  .then(res => {
      
    if (res.ok) {
      res.json().then(favorite => {
        console.log(favorite);
        dispatch({type: "ADD_FAVORITE", payload: favorite})
      })
    } else {
      res.json().then(res => alert(res.errors))
    }
  })
}



export const deleteFavorite = (id) => { 
   
  return dispatch => fetch(url + "favorites/" + id, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.token
        }, 
      })
      .then(res => dispatch({type: "DELETE_FAVORITE", payload: id}))
}






export const getRestaurant = (id) => {
  return dispatch => fetch(url + `restaurants/${id}`)
  .then(res => res.json())
  .then(restaurants => dispatch({type: "GET_RESTAURANT", payload: restaurants}))
}

export const clearRestaurant = () => ({type: "CLEAR_RESTAURANT"})

export const submitSignup = (user) => {

   return dispatch => fetch(url + "users",{
       method: "POST", 
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(user),
   })
   .then(res => renderResponse(res,dispatch))
   
  }

export const submitLogin = (user) => {

   return dispatch => fetch(url + "sessions",{
       
       method: "POST", 
       headers: {
           "Content-Type": 'application/json',
      },
       body: JSON.stringify(user),
      })
      .then(res => renderResponse(res,dispatch))
  }

export const autoLogin = () => {
  return dispatch => fetch(url + "me", {
  headers: {
          'Authorization': localStorage.token
       }
  })

  .then(res => renderResponse(res,dispatch))
  }

  export const logout = () => {
      return dispatch => {
        localStorage.clear()
        dispatch({type: "LOGOUT"})
      }
    }
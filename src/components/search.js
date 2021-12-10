import { useEffect, useState } from "react"
import { getRestaurants } from '../redux/actionCreators'
import { connect } from 'react-redux'

function Search(props){
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")


    const onSubmit = (e) => {
        e.preventDefault()
        let args = []
        location && args.push({location})
        description && args.push({description})
        props.getRestaurants(args)
       
    }
    
    return <form class="ui form" onSubmit={onSubmit} style={{padding: "16px"}} >
       <div class="two fields">
        <div class="field">
            <label>Type of Food</label>
            <input class="tiny" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Taco , Mexican etc."/>
        </div>
        <div class="field">
            <label>Location:</label>
            <input class="tiny" type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Denver, 80216 etc."/>
        </div>
        <div class="field">
          
            <input  class="tiny ui button" style={{marginTop: "26px"}} type="submit" value="Search for some food"></input>
        </div>
       </div>
    </form>

}





export default connect(null , {getRestaurants})(Search)
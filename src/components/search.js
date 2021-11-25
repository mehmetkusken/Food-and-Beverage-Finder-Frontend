import { useState } from "react"
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
    
    return <form onSubmit={onSubmit} >
        <label>Type of Food:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Taco , Mexican etc."/>
        </label>
        <label>Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Denver, 80216 etc."/>
        </label>
        <input type="submit" value="Search for some food"></input>
    </form>

}

export default connect(null , {getRestaurants})(Search)
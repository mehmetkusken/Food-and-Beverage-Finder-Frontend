import { connect } from 'react-redux'
import getFavorites from '../redux/actionCreators'

import  FavoriteCard  from './favoriteCard'

function Favorites(props){
    console.log(props.getFavorites)

    return <div className="favorites">
        
        {props.favorites.map(favorite => <FavoriteCard {...favorite} key={favorite.id}/>)}
    </div>
}
const mapStateToProps = (state) => ({ favorites: state.favorites})

export default connect(mapStateToProps,{getFavorites})(Favorites)
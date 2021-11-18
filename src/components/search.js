import React, {useState, useEffect} from 'react';
import { getRestaurants } from '../redux/actionCreators';
import { SearchCardList } from './searchCardList';
import { SearchInfoCard } from './searchInfoCard';

const Search = () => {
    const [filter, setFilter] = useState('');
    const [data, setData] = useState(null);
    const [infoData, setInfoData] = useState(null);
    const [restList, setRestList] = useState([]);

    useEffect(() => {
        console.log(getRestaurants());
    }, []);

    const setText = (event) =>{
        let value = event.target.value;
        if (event.target.value.length < 3) {
            return;
        }
        if (value && value.length > 0) {
            setFilter(event.target.value);
            getRestaurants(event.target.value, 3).then(list => {
           
                setData(list);
            })
            let dataSearch = restList.filter(item => item.title.includes(event.target.value));
            setData(dataSearch);
        } else {
            setData(null);
        }
    }

    const findInfoData = (key) => {
        let restInfo = restList.filter(item => item.id == key);
        setInfoData(restInfo);
        console.log(restInfo)
    }

    const closeInfoCard = () => {
        setInfoData(null);
    }
    
    
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                {infoData == null ? <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto text-center">
                        <label className="from-lable h4">Search</label>
                        <input type="text" className="from contol"
                        onChange={setText.bind(this)}
                        />
                    </div>
                </div> : ''}
                {infoData == null && data != null && data.map((item)=> {
                    return(
                        <SearchCardList cardData={item} infoDataClick={findInfoData} key={item.id} />
                     )
                })} 
                {infoData != null && <SearchInfoCard infoCard={infoData[0]} closeClick={closeInfoCard} />} 
            </div>
        </section>
       
    )
}

export default Search

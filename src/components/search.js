import React from 'react';
import dummyData from '../pages/Finder';

const Search = () => {
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto text-center">
                        <label className="from-lable h4">Search</label>
                        <input type="text" className="from contol"/>
                    </div>
                </div>
                {dummyData.cardData.map((item,index)=> {
                    return(
                     <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                     <div className="card p=0 overflow-hidden h-100 shadow">
                         <img src={item.image} className="card-img-top"/>
                         <div className="card-body">
                             <h5 className="card-title">{item.title}</h5>
                             <p className="card-text">{item.description}</p>
                         </div>
                     </div>
                 </div>
                 )
                })} 
            </div>
        </section>
       
    )
}

export default Search

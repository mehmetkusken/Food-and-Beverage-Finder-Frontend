function SearchCardList(props) {
    return (
        <div onClick={(event) => props.infoDataClick(props.cardData.id)} className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={props.cardData.id}>
            <div className="card p=0 overflow-hidden h-100 shadow">
                <div className="card-body">
                    <h5 className="card-title">{props.cardData.title} - {props.cardData.score}</h5>
                </div>
            </div>
        </div>
    )
}

export {SearchCardList};
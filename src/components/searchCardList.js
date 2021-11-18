function SearchCardList(props) {
    return (
        <div onClick={(event) => props.infoDataClick(props.cardData.id)} key={props.cardData.id}>
            <div>
                <div>
                    <h5 className="card-title">{props.cardData.name} - {props.cardData.score}</h5>
                </div>
            </div>
        </div>
    )
}

export {SearchCardList};
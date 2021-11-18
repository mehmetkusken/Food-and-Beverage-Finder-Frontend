function SearchInfoCard(props) {
    return (
        <div>
            <h3>{props.infoCard.title}</h3>
            <button onClick={props.closeClick}>&times;</button>
        </div>
    );
}

export { SearchInfoCard }
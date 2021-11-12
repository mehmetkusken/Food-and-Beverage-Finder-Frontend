import React from 'react';
import logo from '../assets/images/FoodAndBeverage.png'



const Home = () => {
    return(
        <div style={styles.container}>
            <img src={logo} alt="Logo" style={styles.homeBgImage} />
            <h1 style={styles.heroText}>Welcome to your favorite F&B</h1>
        </div>
    );

}

const styles = {
    container: {
        height:  "calc(100vh - 102px)",
        width: "100%",
        position: "relative"
    },
    homeBgImage: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        objectPosition: "top",
        position: "absolute",
        top: "0",
        zIndex: "10"
    },
    heroText: {
        position: "absolute",
        zIndex: "20",
        top: 0,
        width: "50%",
        fontSize: "50px",
        color: "white",
        paddingTop: "24px",
        paddingLeft: "36px"
    }
}

export default Home;
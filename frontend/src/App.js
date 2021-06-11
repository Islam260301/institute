import React from 'react';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {connect} from "react-redux";
import {fetchAllFaculties} from "./redux/actions/facultyActions";
import {fetchAllDirections} from "./redux/actions/directionActions";

function App(props) {
    return (
        <div className="App">
            <div className={`container`}>
                <button onClick={props.fetchAllFaculties}>Fetch faculties</button>
                <button onClick={props.fetchAllDirections}>Fetch directions</button>
            </div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        faculties: state.faculty.faculties,
        directions: state.faculty.directions,
    }
}


export default connect(mapStateToProps, {fetchAllFaculties, fetchAllDirections})(App);

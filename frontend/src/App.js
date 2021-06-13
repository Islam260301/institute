import React from 'react';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {connect} from "react-redux";
import {fetchAllFaculties} from "./redux/actions/facultyActions";
import {fetchAllDirections} from "./redux/actions/directionActions";
import {Route} from 'react-router-dom';
import {Admin} from "./components/admin/Admin";

const Site = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Route path={`/adminka`} component={Admin}/>
            <Route path={`/`} exact component={Site}/>
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

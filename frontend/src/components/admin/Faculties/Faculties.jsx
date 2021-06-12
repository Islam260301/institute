import React, {useEffect} from 'react';import {connect} from "react-redux";import {fetchAllFaculties} from "../../../redux/actions/facultyActions";import {Item} from "../Item";const Faculties = (props) => {    useEffect(() => {        props.fetchAllFaculties()    }, [])    return(        <div>            <ul>                {props.faculties ? props.faculties.map(f => {                    return <Item id={f._id} title={f.name}/>                }) : null}            </ul>        </div>    )}const mapStateToProps = (state) => {    return{        faculties: state.faculty.faculties    }}export default connect(mapStateToProps, {fetchAllFaculties})(Faculties)
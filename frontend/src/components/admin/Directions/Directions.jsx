import React, {useEffect} from 'react';import {connect} from "react-redux";import {fetchAllDirections} from "../../../redux/actions/directionActions";import {Item} from "../Item";const Directions = (props) => {    useEffect(() => {        props.fetchAllDirections()    }, [])    return(        <div>            <ul>                {props.directions ? props.directions.map(d => {                    return <Item id={d._id} title={d.name}/>                }) : null}            </ul>        </div>    )}const mapStateToProps = (state) => {    return{        directions: state.direction.directions    }}export default connect(mapStateToProps, {fetchAllDirections})(Directions)
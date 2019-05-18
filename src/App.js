import React from 'react';
import {connect} from "react-redux";
import './App.css';
import Table from './components/Table';
class  App extends React.Component {

  render(){

  return (
    <div className="App">
      <div className="m-3 container">
      <Table/>
      </div>
    </div>
  );
  }
}

const mapStateToProps = (state) =>{
return state;
}

const mapDispatchToProps = (dispatch) =>{

  return {


    increment : (action)=>{
      dispatch(action);
    }


  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
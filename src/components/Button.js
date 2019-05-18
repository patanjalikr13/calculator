import React from 'react';
import {connect} from "react-redux";

class Button extends React.Component{

    style={
        cursor: "pointer",

    }

    clickListener = (e)=>{
        this.props.tdClick({
            type: "inputUpdate",
            value: e.target.innerHTML
        })
    }

    render() {

        return (
            <td className="m-4 p-4 font-weight-bold" style={this.style} onClick={this.clickListener}>{this.props.disp}</td>
        );
    }

}
const mapStateToProps = (state) =>{
    return state;
}

const mapDispatchToProps = (dispatch) =>{

    return {


        tdClick : (action)=>{
            dispatch(action);
        }


    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Button);
// 1 2 3 +
// 4 5 6 -
// 7 8 9 *
// / 0 C =
import React from 'react';
import Button from './Button';
import {connect} from "react-redux";

class Table extends React.Component{

    inputStyle = {
        border: "none",
        textAlign: "-webkit-right",
        width: "100%",
        paddingRight: "20px",
        fontSize: "25px",
        backgroundColor: "white"
    }

    inputStyle1 = {
        ...this.inputStyle,
        fontSize: "22px",
        fontWeight: "bold"
    }

    render() {
        let buttonArrRow1 = [];
        let buttonArrRow2 = [];
        let buttonArrRow3 = [];
        let buttonArrRow4 = [];

        buttonArrRow1.push(
            <Button key={1} disp={"1"}></Button>,
            <Button key={2} disp={"2"}></Button>,
            <Button key={3} disp={"3"}></Button>,
            <Button key={4} disp={"+"}></Button>
        );

        buttonArrRow2.push(
            <Button key={5} disp={"4"}></Button>,
            <Button key={6} disp={"5"}></Button>,
            <Button key={7} disp={"6"}></Button>,
            <Button key={8} disp={"-"}></Button>
        );

        buttonArrRow3.push(
            <Button key={7} disp={"7"}></Button>,
            <Button key={8} disp={"8"}></Button>,
            <Button key={9} disp={"9"}></Button>,
            <Button key={10} disp={"*"}></Button>
        );

        buttonArrRow4.push(
            <Button key={11} disp={"/"}></Button>,
            <Button key={12} disp={"0"}></Button>,
            <Button key={13} disp={"C"}></Button>,
            <Button key={14} disp={"="}></Button>
        );


        return (
            <div>
            <table border="1">
                <tbody>
                <tr>
                    <td colSpan="4">
                        <input disabled={true} style={this.inputStyle} value={this.props.inputField2} readOnly/>
                        <br />
                        <input disabled={true} style={this.inputStyle1} value={this.props.inputField} readOnly/>

                    </td>
                </tr>
                <tr>
                    {buttonArrRow1}
                </tr>

                <tr>
                    {buttonArrRow2}
                </tr>

                <tr>
                    {buttonArrRow3}
                </tr>
                <tr>
                    {buttonArrRow4}
                </tr>

                </tbody>
            </table>
            </div>
        )

    }
}
const mapStateToProps = (state) =>{
    return state;
}

const mapDispatchToProps = (dispatch) =>{

    return {


        updateInput : (action)=>{
            dispatch(action);
        }


    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
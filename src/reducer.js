export default (state = {}, action) => {

        if(action.type === "inputUpdate"){

            if(action.value.length===0)
                return state;

            if( ! isNaN( action.value))
            {

                if(state.immediate == false)
                    return {
                        ...state,
                        inputField: parseInt(state.inputField+ action.value)
                    }
                if(state.immediate == true){

                    return {
                        ...state,
                        immediate: false,
                        inputField: parseInt(action.value)
                    }


                }


            } else{



                    if(action.value === "C")
                    {
                        return {
                            ...state,
                            inputField: "",
                            inputField2: "",
                            operand1: {
                                isSet: false
                            },
                            operand2: {
                                isSet: false
                            }
                        }
                    }
                if(action.value === "+" || action.value === "-" || action.value === "*" || action.value === "/")
                {
                    if(state.inputField.length==0)
                        return state;
                    if(state.operand1.isSet !== true)
                    {

                    return {
                        ...state,
                        operand1: {
                            isSet: true,
                            value: parseInt(state.inputField)
                        },
                        operand2: {
                            isSet: false,
                        },
                        operator: {
                            isSet: true,
                            value: action.value
                        },
                        inputField2: parseInt(state.inputField)+action.value,
                        immediate: true
                    }


                    }


                }

                if(action.value === "="){
                 if(state.operand1.isSet === true){
                     if(state.operator.isSet === true)
                     {
                         let str = ""+state.operand1.value+""+state.operator.value+""+state.inputField;
                    //     console.log("str",str);
                         let result = eval(str);


                     return {
                            ...state,
                         immediate: true,
                         inputField: result,
                         inputField2: "",
                         operand1 : {
                             isSet: false
                         },
                         operator: {
                             isSet: false
                         },
                         operand2: {
                             isSet: false
                         }

                     }
                 }
                 }
                }
            }

            }

        return state;

}
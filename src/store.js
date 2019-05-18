import {createStore} from 'redux';
import reducer from './reducer';

export default function (initialState = {inputField: "0",
    inputField2: "",
operand1 : {
    isSet: false
},
    operator: {
        isSet: false
    },
    operand2: {
    isSet: false
    },
    immediate: false
}) {
    return createStore(
        reducer,
        initialState

    );
}
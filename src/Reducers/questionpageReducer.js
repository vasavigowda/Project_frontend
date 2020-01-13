const initialState={
    text:'',
    answer:''
    }
    
    export default(state = initialState,action)=>{
    switch(action.type){
    
    case "REGISTER":{
    return{...state,text:action.payload.text,
        ...state,answer:action.payload.answer,
    }
    }
    default:
    return state;
    }
    
    }
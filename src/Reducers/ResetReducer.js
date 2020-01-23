const initialState={
    password:''
    }
    
    export default(state = initialState,action)=>{
    switch(action.type){
    
    case "Login":{
    return{...state,password:action.payload.password
   
    }
    }
    default:
    return state;
    }
    
    }
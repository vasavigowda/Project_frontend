const initialState={
    email:'',
    password:'',
    }
    
    export default(state = initialState,action)=>{
    switch(action.type){
    
    case "Login":{
    return{...state,email:action.payload.email,
    password:action.payload.password
   
    }
    }
    default:
    return state;
    }
    
    }
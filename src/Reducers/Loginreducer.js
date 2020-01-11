const initialState={
    Firstname:'',
    email:'',
    password:'',
    }
    
    export default(state = initialState,action)=>{
    switch(action.type){
    
    case "Login":{
    return{...state,Firstname:action.payload.Firstname,
    email:action.payload.email,
    password:action.payload.password
   
    }
    }
    default:
    return state;
    }
    
    }
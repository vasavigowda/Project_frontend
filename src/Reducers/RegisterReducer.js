const initialState={
  firstname:'',
  email:'',
  password:'',
  }
  
  export default(state = initialState,action)=>{
  switch(action.type){
  
  case "REGISTER":{
  return{...state,firstname:action.payload.Firstname,
  email:action.payload.email,
  password:action.payload.password
 
  }
  }
  default:
  return state;
  }
  
  }
import credentials from '../api';

export default (state=false,action) => {
  switch(action.type){
    case "VALIDATE_USER":
      let {email,password} = action;
      if(email === credentials.email && password === credentials.password)
      return true;
      else
      return false;

    default:
    return state;
  }
}

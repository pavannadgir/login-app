import credentials from '../api';

export default (state={},action) => {
  switch(action.type){
    case "VALIDATE_USER":
      let {email,password} = action;
      let returnObj={}
      if(email === credentials.email && password === credentials.password){
        returnObj = {
          loginFlag:true,
          errorMsg:''
        }
      }
      else{
        returnObj = {
          loginFlag:false,
          errorMsg:'Enter Valid Credentials'
        }
      }
      return returnObj;

    default:
    return state;
  }
}

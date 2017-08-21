export const validateUser =(email,password) => {
  const action = {
    type:"VALIDATE_USER",
    email,
    password
  }
  return action;
}

const checkValidateData = (email, password)=>{
    const re1 =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const verifyEmail = re1.test(email);
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const varifyPassword =  re.test(password);
    if (!verifyEmail) return "Email is not valid"
    if (!varifyPassword) return "Password is not valid"
    return null
}
export default  checkValidateData;
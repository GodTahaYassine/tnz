const valid = ({fullname , username, email, password, cf_password, gender}) =>{
    const err = {}

    if(!fullname){
        err.fullname = "Please add your full name."
    }else if(!validateName(fullname)){
        err.fullname = "Name isn't valid."
    }

    if(!username){
        err.username = "Please add your username."
    }else if(username.replace(/ /g, '').length > 25){
        err.username = "User name can't exceed 25 characters."
    }

    if(!email){
        err.email = "Please add your email."
    }else if(!validateEmail(email)){
        err.email = "Email is incorrect."
    }

    if(!password){
        err.password = "Please add your password."
    }else if(password.length < 6){
        err.password = "Password must be at least 6 characters."
    }

    if(password !== cf_password){
        err.cf_password = "Confirm password did not match."
    }

    return{
        errMsg: err,
        errLength: Object.keys(err).length
    }
}



const validateEmail = (email) => {
    return email.match(
        // eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

const validateName = (fullname) => {
    return fullname.match(
        // eslint-disable-next-line
        /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
    );
}



export default valid 
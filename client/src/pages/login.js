import React ,{useState, useEffect} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import {login} from '../redux/actions/authAction'
import {useDispatch, useSelector } from 'react-redux'
import Hidden from '../images/hidden.png'
import View from '../images/view.gif'

const Login = () => {
  const initialState = { email: "" , password: "" }
  const [userData , setUserData] = useState(initialState)
  const {email, password} = userData

  const [typePass, setTypePass] = useState(false)

  const { auth } = useSelector( state => state )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() =>{
    if(auth.token) navigate('/')
  }, [auth.token, navigate])


  const handleChangeInput = e => {
    const {name , value} = e.target
    setUserData({...userData , [name]:value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(login(userData))
  }


  return (
    <div className='auth_page'>
      <form onSubmit={handleSubmit}>
      <img src="/logo.png" alt="logo" style={{height:'200px',width:'300px'}}/>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChangeInput} value={email} name="email" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <div className='pass'>
            <input type={typePass ? "text" : "password"} className="form-control" id="exampleInputPassword1" onChange={handleChangeInput} value={password} name="password" />
            <small onClick={()=> setTypePass(!typePass)}>
              {typePass 
                ? <img src={View} alt="Hide" className='small-avatar' /> 
                : <img src={Hidden} alt="Show" className='small-avatar' /> 
              }
            </small>
          </div>
        </div>
        <button type="submit" className="btn btn-success w-100" disabled={email &&(password.length >= 6 )? false : true} >
          Login
        </button>
        <p className="my-2">
          You don't have an account ? <Link to="/register" className='link-success link-ul'>Sign Up Now </Link>
        </p>
      </form>

    </div>
  )
}

export default Login
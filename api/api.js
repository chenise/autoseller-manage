import axios from 'axios'

let base = '/api';
export  const Login = params => {
  return  axios.post('${base}/login',params)
};

export  const  Logout = params => {
  return  axios.get('${base}/Logout',params)
}

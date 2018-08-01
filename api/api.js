import axios from 'axios'

let base = process.env.API_ROOT;
export  const  Login = async params => {
  let  response = await axios.post(base+'/login',params);
  alert(response);
  return  response;
};

export  const  Logout = params => {
  return  axios.get('${base}/Logout',params)
}

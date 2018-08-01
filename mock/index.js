import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

var mock = new MockAdapter(axios);
export const mlogin = mock.onPost('/development/login').reply(config =>{

  return new  Promise((resolve,reject) =>{
    let u =JSON.parse(config.data);
    let  username = u['account'];
    let password = u['password'];
    if(username === 'admin' && password === '123456'){
      console.log(55);
      resolve([200,{
        userInfo: {
          group: 'admin',
          roles: ['addd'],
          userId: 1
        }
      }])
    }
  })
})







// import  Mock from 'mockjs'
// const  userInfo = {
//     group: 'admin',
//     roles: ['admin'],
//     userId: 1
//   };
// const flogin = function (options) {
//
//     return  new  Promise((resolve,reject) =>{
//       if(options.body.account === 'admin' && options.body.password === '123456'){
//       let a = Mock.mock({
//       group: 'admin',
//       roles: ['admin'],
//       userId: 1
//     });
//     resolve(a);
//   }
// }
//   )
// };
// var mlogin = Mock.mock(/\/development\/login/,'post',flogin)
//
// export {mlogin}

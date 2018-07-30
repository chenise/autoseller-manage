

const  user = {
  state: {
    userInfo: {
      group: '',
      roles: [],
      userId: ''
    },
    menus: [],
    asyncRouter: [],
    msg: ''

  },
  mutations: {
    SET_AYSNCROUTER: (state,asyncRouter) =>{
      state.asyncRouter = asyncRouter
    },
    SET_MENUS: (state) =>{
      const  asyncRouter = [];
      for(let i = 0;i< asyncRouterMap.lenth;i++){
        if(context.userInfo.roles.indexOf(asyncRouterMap[i].role)){
          asyncRouter.push(asyncRouterMap[i])
        }
      }
      commit('SET_AYSNCROUTER',asyncRouter);
      state.menus = state.asyncRouter.concat(constantRouterMap)
    },
    SET_USERINFO: (state,userinfo) => {
      state.userInfo = usinfo
    },
    SET_MSG: (state,message) => {
      state.msg = message
    },
    CLEAR_MENUS: (state) => {
      state.menus = undefined
    }

  },
  actions: {
    getUserInfo({commit},user) {
      return new Promise((resolve,reject) =>{
        Login(user).then(function (response) {
          const  usinfo = response.data;
          commit('SET_USERINFO',usinfo);

        }, function (error){
          reject(error)
        }
      ).then(() => {
        commit('SET_MENUS')
      })
      }
      )
    },
    logoutFromClient({commit},userId) {
      return new  Promise((resolve,reject) =>{
        Logout(userId).then(function (response) {
          let data = response.data;
          commit('SET_MSG',data.msg);
          commit('SET_AYSNCROUTER',undefined);
          commit('SET_USERINFO',undefined);
          commit('CLEAR_MENUS')
        })
      })
    }
}}
export  default  user;

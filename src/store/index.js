import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //状态区域，定义数据的地方
    User: {
      uid: '1',
      uname: '',
      ubalance: '',
      sex: '',
      age: ''
    },
    Commodity: {
      cinfo: '',
      cjude: '',
      cname: '',
      cnumber: '',
      cprice: '',
      ctime: '',
      image: '',
    }, 
    CartList: {
      caid: '',
      canumber: '',
      catime: '',
      cid: '',
      cinfo: '',
      cjude: '',
      cname: '',
      cnumber: '',
      cprice: '',
      ctime: '',
      image: '',
      uid: '',
    },
    Balance: '',
    bool: true
  },
  getters: {

  },
  mutations: {
    setUser(state, user) {
      state.User = user;
    },
    setCartList(state, cart) {
      state.CartList = cart;
    },
    setBalance(state, balance) {
      state.Balance = balance;
    },
    setCommodity(state, commodity) {
      state.Commodity = commodity;
    },
    setBool(state, b) {
      state.bool = b;
    }
  },
  actions: {
    setUserAysnc(context, user) {
      context.commit("setUser", user);
    },
    setCartListAysnc(context, cart) {
      context.commit("setCartList", cart);
    },
    setBalanceAysnc(context, balance) {
      context.commit("setBalance", balance);
    },
    setCommodityAysnc(context, commodity) {
      context.commit("setCommodity", commodity);
    }
  },
  modules: {
  }
})

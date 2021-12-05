import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companyPurchases: [],
    companyObj: {},
    page:"company"
  },
  mutations: {
    SET_COMPANY_PURCHASES(state, payload){
      state.companyPurchases = payload;
    },
    SET_COMPANY_OBJECT(state, res){
      state.companyObj = res;
    },
    SET_PAGE(state, res){
      state.page = res;
    }
  },
  actions: {
    setCompanyPurchases(state){

      state.commit("SET_COMPANY_PURCHASES", ["howdy"])
       
    }
  },
  modules: {
  },
  getters: {
    getCompanyObj(state){
      return state.companyObj;
    },
    getCompanyPurchases(state){
      return state.companyPurchases;
    },
    getPage(state){
      return state.page;
    }
  }
})

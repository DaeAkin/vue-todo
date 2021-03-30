import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'
//글로벌 설정을 해주는 코드
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules : {
    todoApp 
  }
})  
import Vue from "vue";
import Vuex from "vuex";
import { todoStore } from "./todoStore";
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = 'http://localhost:8000/api';

export default new Vuex.Store({
  modules: {
    todoStore : todoStore
  }
});

import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase';
import router from '../router/index'
import services from './services'
import axios from 'axios'
import {URLPLACEHOLDER, URLTODOS} from './constants'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userProfile: {},
    users: [],
    todos: [],
    services
  },
  mutations: {
    setUserProfile(state, payLoad) {
      state.userProfile = payLoad
    },
    setUsersPlaceHolder(state, payLoad){
      state.users = payLoad
    },
    setUserTodo(state, payLoad) {
      state.todos = payLoad
    }
  },
  actions: {
    //  sing user in
    async login({dispatch}, form) {
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // set user profile in staate
      commit('setUserProfile', userProfile.data())

      // change route to dashboard
      if (router.currentRoute.path === '/login') {
        router.push('/dashboard')
      }
    },
    async signup({dispatch}, form) {
      // sign user up
      const {user} = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)

      // create user profile object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        title: form.title
      })
        
      //  fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut()

      // set user profile in staate
      commit('setUserProfile', {})

      // redirect to login view
      router.push('/')
    },
    async getUsersPlaceHolder({ commit }) {
      const response = await axios.get(URLPLACEHOLDER)
      commit('setUsersPlaceHolder', response.data );
    },
    async getUserTodo({ commit }, user) {
      const response = await axios.get(`${URLTODOS}${user}`)
      commit('setUserTodo', response.data );
    }
  },
  modules: {
  }
})

export default store;

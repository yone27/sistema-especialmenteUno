import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'

import AlertCmp from './components/Shared/Alert'
Vue.component('app-alert', AlertCmp)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyDBCI1HgpuZas19IhJCBbJHlnU6QJIb0Q0",
      authDomain: "especialmente-uno.firebaseapp.com",
      databaseURL: "https://especialmente-uno.firebaseio.com",
      projectId: "especialmente-uno",
      storageBucket: "gs://especialmente-uno.appspot.com",
      appId: "1:770041597747:web:a340aea3007f430a23f846",
    })
    // cuando recarge verifique si el token del usuario es valido aun y logee auto
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$store.dispatch('autoSignIn', user)
        //this.$store.dispatch('fetchUserData')
      }
    })
  },
  render: h => h(App)
}).$mount('#app')

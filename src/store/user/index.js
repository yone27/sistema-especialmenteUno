import firebase from 'firebase/app';
import database from 'firebase/database';
import auth from 'firebase/auth'
import router from '../../router/index'


export default {
  state: {
    user: null
  },
  mutations: {
    registerUserForMeetup(state, payload) {
      const id = payload.id
      if (state.user.registeredMeetups.findIndex(meetup => meetup.id === id) >= 0) {
        return
      }
      state.user.registeredMeetups.push(id)
      state.user.fbKeys[id] = payload.fbKey
    },
    unregisterUserForMeetup(state, payload) {
      const registeredMeetups = state.user.registeredMeetups
      registeredMeetups.splice(registeredMeetups.findIndex(meetup => meetup.id === payload), 1)
      Reflect.deleteProperty(state.user.fbKeys, payload)
    },
    setUser(state, payload) {
      state.user = payload
    },
    updateUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    registerUserForMeetup({ commit, getters }, payload) {
      commit('setLoading', true)
      // console.log(payload)
      const user = getters.user
      firebase.database().ref('/users/' + user.id).child('/registrations/')
        .push(payload)
        .then(data => {
          commit('setLoading', false)
          commit('registerUserForMeetup', { id: payload, fbKey: data.key })
        })
        .catch(error => {
          // console.log(error)
          commit('setLoading', false)
        })
    },
    unregisterUserForMeetup({ commit, getters }, payload) {
      commit('setLoading', true)
      const user = getters.user
      if (!user.fbKeys) {
        return
      }
      const fbKey = user.fbKeys[payload]
      firebase.database().ref('/users/' + user.id + '/registrations/').child(fbKey)
        .remove()
        .then(() => {
          commit('setLoading', false)
          commit('unregisterUserForMeetup', payload)
        })
        .catch(error => {
          // console.log(error)
          commit('setLoading', false)
        })
    },
    signUserPost({ commit, getters }, payload) {
      let id = getters.user.id
      let email = getters.user.email
      firebase.database().ref('users').child(id).update(payload)
        .then(() => {
          commit('setLoading', false)
          commit('updateUser', {
            ...payload,
            id,
            email
          })
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    signUserUp({ commit }, payload) {
      var userO = {}
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            userO.email = user.user.email
            userO.id = user.user.uid
            commit('setUser', userO)
            commit('setLoading', false)
            router.push('/profile')
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            // console.log(error)
          }
        )
    },
    signUserIn({ commit }, payload) {
      var userO = {}
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            userO.email = user.user.email
            userO.id = user.user.uid
            firebase.database().ref('/users/' + userO.id).once('value')
              .then((data) => {
                commit('setLoading', false)
                commit('setUser', {
                  ...data.val(),
                  ...userO
                })

                router.push('/profile')
              })
              .catch(error => {
                console.log(error)
                commit('setLoading', false)
              })
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    // signUserPost({ commit }, payload) {
    //   commit('setLoading', true)
    //   commit('clearError')
    //   console.log(payload);

    //   firebase.auth().currentUser.updateProfile({
    //     name: payload.name,
    //     lastName: payload.lastName,
    //     phone1: payload.phone1,
    //     phone2: payload.phone2,
    //     addressWork: payload.addressWork,
    //     ci: payload.ci,
    //     address: payload.address,
    //     refer: payload.refer
    //   })
    //     .then(function (user) {
    //       console.log(firebase.auth().currentUser);

    //       let newUser = {
    //         id: user.uid,
    //         registeredMeetups: [],
    //         displayName: payload.displayName,
    //         photoURL: payload.photoURL,
    //         fbKeys: {}
    //       }
    //       //setting in vuex
    //       commit('setUser', newUser)
    //     }).catch(function (error) {
    //       // console.log(' An error happened.', error)
    //     });
    // },
    autoSignIn({ commit }, payload) {
      var userO = {}

      userO.email = payload.email
      userO.id = payload.uid
      
      firebase.database().ref('/users/' + payload.uid).once('value')
        .then((data) => {
          commit('setLoading', false)
          commit('setUser', {
            ...data.val(),
            ...userO
          })
          router.push('/profile')
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
      // console.log('autoi', payload);

      // commit('setUser', {
      //   id: payload.uid,
      //   registeredMeetups: [],
      //   fbKeys: {}
      // })
    },
    fetchUserData({ commit, getters }) {
      console.log(getters.user);
      
      commit('setLoading', true)
      firebase.database().ref('/users/' + getters.user.id + '/registrations/').once('value')
        .then(data => {
          const dataPairs = data.val()
          let registeredMeetups = []
          let swappedPairs = []
          for (let key in dataPairs) {
            registeredMeetups.push(dataPairs[key])
            swappedPairs[dataPairs[key]] = key
          }
          console.log('aja y esto?',getters.user);

          const updateUser = {
            ...getters.user,
            registeredMeetups,
            fbKeys: swappedPairs
          }
          commit('setLoading', false)
          commit('setUser', { updateUser })
        })
        .catch(error => {
          console.log(error);
          commit('setLoading', false)
        })
    },
    logout({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  }
}

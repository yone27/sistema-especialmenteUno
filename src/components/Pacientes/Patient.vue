<template>
  <v-container>
    <!-- <v-layout row wrap v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular indeterminate class="primary--text"
                             :width="7"
                             :size="70"
                             v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="primary--text">{{meetup.title}}</h4>
            <template v-if="userIsCreator">
              <v-spacer></v-spacer>
              <app-edit-meetup-details-dialog :meetup="meetup"></app-edit-meetup-details-dialog>
            </template>
          </v-card-title>
          <v-card-media
            :src="meetup.imageUrl"
            height="400px">
          </v-card-media>
          <v-card-text>
            <p class="info--text">{{meetup.date | date}} - {{meetup.location}}</p>

            <app-edit-meetup-date-dialog
              :meetup="meetup"
              v-if="userIsCreator">
            </app-edit-meetup-date-dialog>
            <app-edit-meetup-time-dialog
              :meetup="meetup"
              v-if="userIsCreator">
            </app-edit-meetup-time-dialog>

            <div>
              {{meetup.description}}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <app-meetup-register-dialog :meetupId="meetup.id"
            v-if="userIsAuthenticated && !userIsCreator">
            </app-meetup-register-dialog>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout> -->
  </v-container>
</template>

<script>
    export default {
        name: 'Meetup',
        props: ['id'],
        computed: {
            // devuelve un objeto meetup
            meetup() {
                /*return this.$store.getters.loadedMeetup(this.id)*/
            },
            // el usuario esta auth??
            userIsAuthenticated() {
                //return this.$store.getters.user !== null && this.$store.getters.user !== undefined
            },
            // si el usuario creo la reunion, le aparecera el boton para editarla
            userIsCreator() {
                /*if (!this.userIsAuthenticated) {
                    return false
                }
                return this.$store.getters.user.id === this.meetup.creatorId*/
            },
            loading() {
                /*return this.$store.getters.loading*/
            }
        }
    }
</script>

<style scoped>
</style>

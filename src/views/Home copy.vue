<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-card>
          <v-form ref="form">
            <v-card-text>
              <v-row>
                <!-- inputs -->
                <v-col cols="6">
                  <v-text-field label="Name" required></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="E-mail" required></v-text-field>
                </v-col>
                <!-- /inputs -->
                <!-- select -->
                <v-col cols="6">
                  <v-select
                    v-model="itemSelect"
                    :items="itemsSelect"
                    :rules="[v => !!v || 'Item is required']"
                    label="Select"
                    required
                  ></v-select>
                </v-col>
                <!-- /select -->
                <!-- text area -->
                <v-col cols="12">
                  <v-textarea filled label="textarea" rows="4" solo></v-textarea>
                </v-col>
                 <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                <!-- /text area -->
                <!-- radio buttons -->
                <v-col cols="6">
                  <v-radio-group v-model="itemRadio" column>
                    <v-radio
                      v-for="item in itemsRadio"
                      :key="item"
                      :label="item"
                      :value="item.toLowerCase()"
                      primary
                    ></v-radio>
                  </v-radio-group>
                </v-col>
                <!-- /radio buttons -->
                <!-- combo box -->
                <v-col cols="6">
                  <v-combobox
                    v-model="selectBok"
                    :items="itemsBox"
                    label="I use chips"
                    multiple
                    chips
                  ></v-combobox>
                </v-col>
                <!-- /combo box -->
                <!-- date picker -->
                <v-col cols="12">
                  <v-date-picker v-model="date" :show-current="false"></v-date-picker>
                </v-col>
                <!-- /date picker -->
                <!-- tabs -->
                <v-col cols="12">
                  <v-tabs
                    v-model="tab"
                    background-color="deep-purple accent-4"
                    class="elevation-2"
                    dark
                    grow
                  >
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab v-for="i in tabs" :key="i" :href="`#tab-${i}`">Tab {{ i }}</v-tab>

                    <v-tab-item v-for="i in tabs" :key="i" :value="'tab-' + i">
                      <v-card flat tile>
                        <v-card-text>{{ text }}</v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs>
                </v-col>
                <!-- /tabs -->
                <!-- steps -->
                <v-col cols="12">
                  <v-row justify="space-around">
                    <v-col cols="12">
                      <v-slider label="Steps" min="2" max="20"></v-slider>
                    </v-col>
                    <v-switch label="Vertical"></v-switch>
                    <v-switch label="altLabels"></v-switch>
                    <v-switch label="Editable"></v-switch>
                  </v-row>
                  <v-stepper v-model="e1">
                    <template>
                      <v-stepper-header>
                        <template v-for="n in steps">
                          <v-stepper-step
                            :key="`${n}-step`"
                            :complete="e1 > n"
                            :step="n"
                          >Step {{ n }}</v-stepper-step>

                          <v-divider v-if="n !== steps" :key="n"></v-divider>
                        </template>
                      </v-stepper-header>
                      <v-stepper-items>
                        <v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n">
                          <v-card
                            v-if="n == 1"
                            class="mb-12"
                            color="grey lighten-1"
                            height="200px"
                          >N es igual a 1</v-card>
                          <v-card
                            v-if="n == 2"
                            class="mb-12"
                            color="grey lighten-1"
                            height="200px"
                          >N es igual a 2</v-card>

                          <v-btn color="primary" @click="nextStep(n)">Continue</v-btn>
                          <v-btn text>Cancel</v-btn>
                        </v-stepper-content>
                      </v-stepper-items>
                    </template>
                  </v-stepper>
                </v-col>/stepstags
                <v-col cols="12">
                  <v-card max-width="400" class="mx-auto">
                    <v-system-bar></v-system-bar>
                    <v-card-title>
                      <v-btn icon class="mr-6">
                        <v-icon>mdi-chevron-right</v-icon>
                      </v-btn>

                      <span class="subheading">Filter your files</span>
                    </v-card-title>
                    <v-card-text>
                      <span class="subheading">Filter by Tags</span>
                      <v-chip-group
                        v-model="arr"
                        multiple
                        mandatory
                        column
                        active-class="primary--text"
                      >
                        <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
                      </v-chip-group>
                    </v-card-text>
                  </v-card>
                </v-col>
                <!-- /tags -->
                <v-col cols="12">
                  <v-container fluid>
                    <v-card
                      img="https://cdn.vuetifyjs.com/images/home/vuetify_layout1.svg"
                      height="200px"
                      class="mb-6"
                    >
                      <v-system-bar
                        color="black"
                        :height="height"
                        :lights-out="lightsOut"
                        :window="window"
                      >
                        <v-icon>mdi-gmail</v-icon>
                        <span>10 unread emails</span>
                        <v-spacer></v-spacer>
                        <v-icon>mdi-wifi-strength-4</v-icon>
                        <v-icon>mdi-signal-cellular-outline</v-icon>
                        <v-icon>mdi-battery</v-icon>
                        <span>12:30</span>
                      </v-system-bar>
                    </v-card>
                  </v-container>

                  <v-row>
                    <v-col cols="4">
                      <v-text-field
                        v-model="height"
                        class="mx-4"
                        label="Height - px"
                        max="40"
                        min="1"
                        step="1"
                        style="width: 125px"
                        type="number"
                        @keydown="false"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-switch v-model="lightsOut" label="Toggle lights-out" class="mx-4"></v-switch>
                    </v-col>
                    <v-col cols="4">
                      <v-switch v-model="window" label="Toggle window" class="mx-4"></v-switch>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="error" class="mr-4" @click="reset">Reset</v-btn>
              <v-btn text color="primary">Submit</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CreatePatient",
  data() {
    return {
      itemsRadio: ["Default (no property)", "Permanent", "Temporary"],
      itemRadio: null,
      itemSelect: null,
      itemsSelect: ["Item 1", "Item 2", "Item 3", "Item 4"],
      date: new Date().toISOString().substr(0, 10),
      selectBok: ["Vuetify", "Programming"],
      itemsBox: ["Programming", "Design", "Vue", "Vuetify"],

      tab: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tabs: 3,

      e1: 1,
      steps: 4,

      arr: [],
      tags: [
        "Work",
        "Home Improvement",
        "Vacation",
        "Food",
        "Drawers",
        "Shopping",
        "Art",
        "Tech",
        "Creative Writing"
      ],

      height: 30,
      lightsOut: false,
      window: false,
    };
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.description !== ""
      );
    },
    submittableDateTime() {
      const date = new Date(this.date);
      if (typeof this.time === "string") {
        let hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
      }
      return date;
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    onInput(val) {
      this.steps = parseInt(val);
    },
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    }
  },
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
    vertical() {
      this.e1 = 2;
      requestAnimationFrame(() => (this.e1 = 1)); // Workarounds
    }
  }
};
</script>

const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish The First Module!",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue";
      } else {
        return "Master Vue";
      }
    },
  },
});

app.mount("#user-goal");

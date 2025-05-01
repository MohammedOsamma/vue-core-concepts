const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish The First Module!",
      vueLink: "https://vuejs.org",
    };
  },
});

app.mount("#user-goal");

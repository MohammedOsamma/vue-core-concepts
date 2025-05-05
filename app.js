const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullname() {
      if (this.name === "") {
        return "";
      }

      return this.name + " " + "Osama";
    },
  },
  methods: {
    outputFullname() {
      if (this.name === "") {
        return "";
      }

      return this.name + " " + "Osama";
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Hello");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");

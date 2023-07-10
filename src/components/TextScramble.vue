<template>
    <div class="text"></div>
</template>


<script>
import { TextScramble } from "@/components/text-scramble.js";

export default {
  name: "TextScramble",
  props: {},
  methods: {
    startScramble: function() {
      const phrases = [
        "The future is here!",
        "The next method",
        "of exploring the web",
        "and it is called",
        "out of tune",
        "Simple",
        "Intuitive",
        "Reactive",
        "Innovative"
      ];

      const el = document.querySelector(".text");
      const fx = new TextScramble(el);

      let counter = 0;
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 800);
        });
        counter = (counter + 1) % phrases.length;
      };

      next();
    }
  },
  mounted() {
      this.startScramble()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono:100");


.text {
  font-weight: 100;
  color: #fafafa;
  text-shadow: 
    -2px 4px 7px #da6a1d, 
    2px -4px 7px #00848d;
  display: block;
}

</style>

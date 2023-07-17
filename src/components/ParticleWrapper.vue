<template>
      <div id='particle-wrapper'>
        <!-- <img id="particle-background" src="./assets/graph.png"/> -->
        <div id="animation">
          <HeaderAnimation/>    
        </div>
        <div id="text">
          <div class="content">
            <h1>Find Music – The New Way</h1>
            <button outline color="#d8ae91" to="/about">More about out-of-tune</button>
          </div>
        </div>
        <div id="particles">
          <vue-particles
            color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="false"
            clickMode="push"
          >
          </vue-particles>  
        </div>
      </div>
</template>

<script>
import HeaderAnimation from '@/components/HeaderAnimation.vue'

export default {
  name: 'ParticleWrapper',
  components: {
    HeaderAnimation,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: 'Playfair Display SC', serif;
  /* font-family: 'Cormorant Garamond', serif; */
  font-variant: small-caps;
  /* font-kerning: none; */
}
canvas {
  height: 100vh !important;
}
#particles {
  grid-column: 1 / 4;
  grid-row: 1 / 4;
  z-index: 1;
}
#particle-wrapper {
  display: grid;
  /* grid-template-columns: 1fr minmax(300px, 1fr) 1fr; */
  grid-template-columns: 1fr minmax(250px, 600px) 1fr;
  /* grid-template-rows: 1rem 2fr 1fr 1rem; */
  grid-template-rows: 1fr 2fr 2fr;

  
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  /* background-image: url('../assets/graph.png'); */
  background: rgb(30,30,30);
  /* background-size:cover; */
  width: 100vw;
  height: 90vh;
  overflow: scroll;
}
#animation {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  z-index: 2;
  padding: 30px;
  -webkit-box-shadow: 0px 0px 72px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 72px -8px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 72px -8px rgba(0,0,0,0.75);
  background: rgba(30,30,30,0.8)
}
#text {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  margin-top: 20px;
  z-index: 2;
}
#text h1 {
  font-size: 2.5rem;
  color: #da6a1d;
}
#text .content {
  padding: 10px;
  -webkit-box-shadow: 0px 0px 72px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 72px -8px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 72px -8px rgba(0,0,0,0.75);
  background: rgba(20,20,20,0.8)
}

.particles-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
}

#particles-js {
  width: 100%;
  height: 100vh;
}

@media (min-height: 750px) {
  #particle-wrapper {
    overflow: hidden;
  }
}
</style>

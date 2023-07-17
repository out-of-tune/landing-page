<template>
  <div id='particle-wrapper'>
    <!-- <img id="particle-background" src="./assets/graph.png"/> -->
    <div id="animation">
      <HeaderAnimation />
    </div>
    <div id="text">
      <div class="content">
        <!-- <h1>Find Music – The New Way</h1> -->
        <a href="https://app.out-of-tune.org">
          <button id="app-button">OOT App</button>
        </a>
        <router-link to="/about">
          <button>About out-of-tune</button>
        </router-link>
      </div>
    </div>
    <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="{
      background: {
        color: {
          value: '#1e1e1e'
        }
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 150,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#dedede'
        },
        links: {
          color: '#dedede',
          enable: true
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce'
          },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'square'
        },
        size: {
          value: { min: 4, max: 10 },
        }
      },
      detectRetina: true
    }" />

  </div>
</template>

<script>
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.


import HeaderAnimation from '@/components/HeaderAnimation.vue'

export default {
  name: 'ParticleWrapper',
  components: {
    HeaderAnimation,
  },
  methods: {

    particlesInit: async engine => {
      await loadFull(engine);
    },

    particlesLoaded: async container => {
      console.log("Particles container loaded", container);
    }
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
  background: rgb(30, 30, 30);
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
  -webkit-box-shadow: 0px 0px 72px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 72px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 72px -8px rgba(0, 0, 0, 0.75);
  background: rgba(30, 30, 30, 0.8)
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

.content {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

#app-button {
  width: 6rem;
  height: 3rem;
  background-color: #da6a1d;
  color: #ffffff;
  font-size: 1rem;
}

#app-button:hover {
  background-color: #fff;
  color: #da6a1d;
}

#text .content {
  padding: 10px;
  -webkit-box-shadow: 0px 0px 72px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 72px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 72px -8px rgba(0, 0, 0, 0.75);
  background: rgba(20, 20, 20, 0.8);
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

.particles-wrapper {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
</style>

<template>
  <v-app id="app">

    <v-navigation-drawer v-model="drawer" absolute temporary id="nav-drawer">
      <ul>
        <li>
          <v-btn class="nav-btn" to="/about" outline color="#d8ae91">About</v-btn>
        </li>
        <li>
          <v-btn class="nav-btn" to="/project" outline color="#d8ae91">Project</v-btn>
        </li>
        <li>
          <v-btn class="nav-btn" to="/news" outline color="#d8ae91">News</v-btn>
        </li>
      </ul>
    </v-navigation-drawer>
    <div id="nav">
      <router-link to="/" id="logo"><img alt="Vue logo" src="@/assets/logo.png"/></router-link>

      <svg ref="ham" class="ham hamRotate ham8" viewBox="0 0 100 100" width="50" v-on:click="toggleNav" v-bind:class="{ active: drawer }">
        <path class="line top" d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
        <path class="line middle" d="m 30,50 h 40" />
        <path class="line bottom" d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
      </svg>

      <v-btn class="top-btn" to="/about" outline color="#d8ae91">About</v-btn>
      <v-btn class="top-btn" to="/project" outline color="#d8ae91">Project</v-btn>
      <v-btn class="top-btn" to="/news" outline color="#d8ae91">News</v-btn>
    </div>

    <router-view id="router-view"/>
    
  </v-app>
</template>


<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    },
    methods: {
      toggleNav: function(){
        this.drawer = !this.drawer
      }
    }
  }
</script>

<style>
/* fonts */
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:200');
@import url('https://fonts.googleapis.com/css?family=Monoton');
@import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond:600|Lora|Playfair+Display+SC|Rozha+One');

/* fonts */

#app {
  font-family: "Lucida Console", Monaco, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  background: rgb(10,10,10);
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  height: 68px;
}

#nav .top-btn{
  width: 50px;
  margin-top: 15px;
}

#app {
  background: rgb(10,10,10);
}

img {
  height: 50px;
  bottom: 0;
}

#logo {
    top: 10px;
    position: fixed;
    z-index: 101;
}

@media only screen and (min-width: 1000px) {
  #logo {
    left: 5px;
  }
  .ham {
    visibility: hidden;
  }
}

@media only screen and (max-width: 999px) {
  #logo {
    left: 60px;
  }
  .top-btn {
    visibility: hidden;
  }
}

.ham {
  position: fixed;
  top: 9px;
  left: 5px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 101;
}
.hamRotate.active {
  transform: rotate(45deg);
}
.hamRotate180.active {
  transform: rotate(180deg);
}
.line {
  fill:none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke:#fff;
  stroke-width:5.5;
  stroke-linecap:round;
}

.ham8 .top {
  stroke-dasharray: 40 160;
}
.ham8 .middle {
  stroke-dasharray: 40 142;
  transform-origin: 50%;
  transition: transform 400ms;
}
.ham8 .bottom {
  stroke-dasharray: 40 85;
  transform-origin: 50%;
  transition: transform 400ms, stroke-dashoffset 400ms;
}
.ham8.active .top {
  stroke-dashoffset: -64px;
}
.ham8.active .middle {
  transform: rotate(90deg);
}
.ham8.active .bottom {
  stroke-dashoffset: -64px;
}


#nav-drawer {
  z-index: 100;
  padding-top: 68px;
  background: rgba(30,30,30, 0.9);
  position: fixed;
}
#nav-drawer ul {
  list-style: none;
}
body {
  overflow: hidden;
}
/* .pa-1 {
  height:100%;
  
} */
.nav-btn {
  width: 80%;
  margin: 0;
}
ul {
  margin: 0;
  padding: 0 !important;
}

#router-view {
  margin-top: 68px;
}

</style>

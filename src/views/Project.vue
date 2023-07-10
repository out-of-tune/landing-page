<template>
  <div class="project">
    <div id="headline">
      <h1>The Project</h1>
    </div>
    <div id="projectContent">
      <div id="section-1">
        <div id="item1" class="card">
          <h2>Interactivity</h2> 
          <p class="greyglass">
            Each node is clickable and triggers events.
          </p>
        </div>
        <div id="item2" class="card">
          <h2>Simplicity</h2> 
          <p class="greyglass">
            Simply point and click to explore.
          </p>
        </div>
        <div class="anim-wrapper" id="anim-wrapper1">
          <NetworkAnimation02 id="anim1"/>
        </div>
        <div id="item3" class="card">
          <h2>Beauty</h2> 
          <p class="greyglass">
            Beautiful graphs as an outcome of data exploration.
          </p>
        </div>
        <div id="item4" class="card">
          <h2>Organisation</h2> 
          <p class="greyglass">
            Organisation in a chaotic world.
          </p>
        </div>
      </div>
      <div class="sub-headline">
        <h1 class="underline-overline">Break out of your </h1>
        <h1 id="bubble">bubble</h1>
      </div>

      <div id="section-2">
      <div id="anim-wrapper2">
        <GeometryAnimation08/>
      </div>
        <div id="item5" class="card">
          <h2 class="left">THE FUTURE IS HERE (soon)</h2>
          <p class="orangeglass1">
              We think that we can revolutionize the data exploration. We want to build a tool from the ground up which makes it possible to navigate through huge datasets.
              We want it to be interactive, responsive and simple to use.
          </p>
        </div>
        <div id="item6" class="card">
          <h2>Get Started</h2> 
          <p class="blueglass1">
            If you want to use out of tune you have to be patient. The software is currently in development 
            but to get you hyped we have a few videos and screenshots that show the current state of the application.
          </p>
        </div>
        <div id="item7" class="card">
          <p class="greyglass">
            In a world full of automation, control is the most important thing.
            You should control the algorithms instead of algorithms controlling you.
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NetworkAnimation02 from '@/components/NetworkAnimation02.vue'
import GeometryAnimation08 from '@/components/GeometryAnimation08.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    NetworkAnimation02,
    GeometryAnimation08,
    Footer
  }
}
</script>

<style scoped>

  @media (min-width: 300px) {
    #section-1 {
      display: grid;
      grid-template-columns: 1rem 1fr 1rem;
      grid-template-areas: 
      ". item1 ."
      ". item2 ."
      "anim anim anim"
      ". item3 ."
      ". item4 ."
    }
    #item2 {
      text-align: right;
    }
    #item4 {
      text-align: right;
    }
    #item1 {
      text-align: left;
    }
    #item3 {
      text-align: left;
    }

    #section-2 {
      display: grid;
      grid-template-columns: 1rem 1fr 1rem;
      grid-template-areas: 
      "anim2 anim2 anim2"
      ". item5 ."
      ". item6 ."
      ". item7 ."
    }
  }

  @media (min-width: 500px){
    #headline {
      font-size: 2rem;
    }
  }

  @media (min-width: 600px) {
    #section-1 {
      display: grid;
      grid-template-columns: 1rem 1fr 1rem 1fr 1rem;
      grid-template-areas: 
      ". item1 . item2 ."
      "anim anim anim anim anim"
      ". item3 . item4 ."
    }
    #anim-wrapper1 {
      margin-left: 150px;
      margin-right: 150px;
    }

    #section-2 {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 1rem 1fr minmax(200px, 300px) minmax(200px, 300px) 1fr 1rem;
      grid-template-areas: 
      ". . anim2 anim2 . ."
      ". item5 item5 item6 item6 ."
      ". . item7 item7 . ."
    }
  }

  @media (min-width: 800px) {
    #section-1 {
      display: grid;
      grid-template-columns: 1rem 1fr 1fr 1fr 1rem;
      grid-template-areas: 
      ". item1 anim item2 ."
      ". item3 anim item4 ."
    }
    #anim-wrapper1 {
      margin-left: 0;
      margin-right: 0;
    }
    #item2 {
      text-align: left;
    }
    #item4 {
      text-align: left;
    }
    #item1 {
      text-align: right;
    }
    #item3 {
      text-align: right;
    }
  }

  @media (min-width: 1400px) {
    #section-1 {
      display: grid;
      grid-template-columns: 1fr 500px minmax(400px, 600px) 500px 1fr;
      grid-template-areas: 
      ". item1 anim item2 ."
      ". item3 item3 anim item4 item4."
    }

  }

  #item1 {
    grid-area: item1;
  }
  #item2 {
    grid-area: item2;
  }
  #item3 {
    grid-area: item3;
  }
  #item4 {
    grid-area: item4;
  }
  #item5 {
    grid-area: item5;
  }
  #item6 {
    grid-area: item6;
  }
  #item7 {
    grid-area: item7;
  }
  #anim-wrapper1 {
    grid-area: anim
  }
  #anim-wrapper2 {
    grid-area: anim2
  }

  #anim {
    /* width: 40vw; */
    height: 40vh;
  }
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
  #section-1 {
    margin-bottom: 2rem;
  }
  #section-2 {
    text-align: justify;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .card p {
    text-align: justify;
    padding: 1rem;
    -webkit-box-shadow: 0px 0px 20px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 20px -4px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 20px -4px rgba(0,0,0,0.75);
    margin: 0;
    display: inline-block;
  }
  .sub-headline {
    /* text-align: center; */
    display: block;
    padding: 0.5rem;
    padding-top: 2rem;
    background-color: #00848d;
    font-variant: small-caps;
  }
  .underline-overline {
    font-family: 'Playfair Display SC', serif;
    font-size: 3rem;

    text-decoration: underline overline;
    text-shadow: 1px 1px 2px #000000;
  }
  #bubble {
    padding: 0;
    position: relative;
    top: -1rem;
    text-decoration: none;
    display: inline-block;
    text-shadow: 2px 2px 4px #000000;
    font-size: 4rem;
    font-family: 'Monoton', cursive;
  }
  .greyglass {
    background: rgba(50,50,50,0.8);
  }
  .blueglass1 {
    background-color: rgba(29, 205, 218, 0.4);
  }
  .blueglass2 {
    background-color: rgba(0, 132, 141, 0.4);
  }
  .orangeglass1 {
    background-color: rgba(218, 106, 29, 0.4);
  }
  .orangeglass2 {
    background-color: rgba(241, 78, 20, 0.4);
  }
  .project {
    background-color: rgb(30,30,30);
    color: antiquewhite;
  }
  #headline {
    color: antiquewhite;
    background-color: rgba(50,50,50,0.8);
    font-family: 'Monoton', cursive !important;
    text-shadow: 0 2px 0 #00848d;
    display: inline-block;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 2rem;
  }
</style>

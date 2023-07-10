<template>
<div>
  <div class="about">
    <div class="grid-container">
      <div id="headline">
        <h1 id="oot">out of tune</h1><br>
        <h2 class="sub-headline">Find Music - The New Way</h2>
      </div>
      <TextScramble id="text-scramble"/>
      <div id="anim-wrapper1" v-on:mouseover="$refs.ga1.startAnim()">
        <GeometryAnimation ref="ga1" id="anim1" class="anim"/>
      </div>
      <div id="text1" class="glass">
        <h2>out-of-tune</h2> 
        <p class="blueglass1">
          is a web application, where you can discover all kind of music, 
          even some you have never heard of before. 
          You can start off by searching for your favourite artists, 
          and then start exploring from that point. 
          You can broaden your taste in music or find 
          new artists similar to the music you already like.
        </p>
      </div> 
      <div id="text2" class="glass">
        <h2>Inspiration</h2>
        <p class="orangeglass1">
          We think that the music we hear shouldn’t be determined 
          by algorithms or marketing campaigns. It should be decided 
          by ourselves and our own experiences. We know that there is 
          a overwhelming amount of music available. We also know that 
          nobody can listen to every single piece of music out there. 
          With out-of-tune we think we have found a solution 
          to solve that problem.
        </p>
      </div>
      <div id="text3" class="glass">
        <h2>Journey</h2>
        <p class="greyglass">
          out-of-tune enables you to go on a journey through 
          the vast amount of music available. 
          Assisted by various functions in our app, 
          you will never lose track of where you are, and how you got there.
        </p>
      </div>
      <div id="anim-wrapper2">
        <GeometryAnimation03 id="anim2" class="anim"/>
      </div>
      <div id="text-group1">
        <div id="text4" class="glass">
          <h2>Why out-of-tune?</h2>
          <p class="orangeglass2">
            The internet enabled us to listen to vast amounts of music. This is, in its roots, a great development, because you may listen to music you have never heard of before.
          </p>
        </div>
        <div id="text5" class="glass">
          <p class="orangeglass1">
            However this endless amount of music causes some major problems: 
            How are you going to navigate through it? 
            How do you find songs you might like? 
            How do you get everything and don’t miss out on some awesome artists?
          </p>
        </div>
      </div>
    
      <div id="text-group2">
        <div id="text6" class="glass">
          <h2>Status Quo</h2>
          <p class="greyglass">
            In recent years a solution arrived: algorithms. Big companies collect huge amounts of data about you. 
            For example how you are using your streaming service of choice or which links you click or which videos you like to watch.
            With this data they can build a profile. 
          </p>
        </div>
        
        <div id="text7" class="glass">
          <p class="blueglass1">
            On one hand they use this profile to predict which artists you might like, on the other hand they might sell this data to advertising companies, who might use the information about you for nefarious purposes.
            These predictions might work well at first but soon you are trapped in your own taste of music or to be exact in the assumptions the algorithms makes about you.
            With out-of-tune we want to enable you to opt-out. 
          </p>
        </div>
      </div>

      <div id="text8" class="glass">
        <h2>Our Philosophy</h2>
        <p class="greyglass">
          We thought of a concept how almost anybody can handle large amounts of data, without loosing control. 
          You can navigate on your own. You have the choices about all the parameters, because we just want to help you to find the music you like.
        </p>
        <p class="blueglass1">
          out-of-tune is the result of this thought process.
        </p>
      </div>
      
      <div id="anim-wrapper3">
        <GeometryAnimation05 id="anim3" class="anim"/>
      </div>
      <div id="text-group3">
        <div id="text9" class="glass">
          <h2>How does it work?</h2>
          <p class="orangeglass2">
            The data is visualised in a networking-graph. Each dot (also called a node) in this network represents something in the world of music for example an artist. 
          </p>
        </div>
        <div id="text10" class="glass">
          <p class="blueglass1">
            These nodes are connect to other nodes, represented by lines, e.g. an artist has music in different genres and therefore is connected to different genre-nodes. 
            You can click on nodes to interact with them. This allows you to handle all of our collected data in an interesting way. You can listen to a sample of an artists work, see how many songs he made, or learn other interesting facts. 
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HeaderAnimation.vue'
import GeometryAnimation from '@/components/GeometryAnimation.vue'
import GeometryAnimation03 from '@/components/NetworkAnimation01.vue'
import GeometryAnimation05 from '@/components/GeometryAnimation05.vue'
import TextScramble from '@/components/TextScramble.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    GeometryAnimation,
    GeometryAnimation03,
    GeometryAnimation05,
    TextScramble,
    Footer
  }
}
</script>

<style>

.sub-headline {
  font-family: 'Playfair Display SC', serif;
  display: inline-block;
  background-color: #00848d;
  font-variant: small-caps;
}
#oot {
  color: antiquewhite;
  background-color: rgba(50,50,50,0.8);
  font-family: 'Monoton', cursive;
  text-shadow: 0 2px 0 #00848d;
  display: inline-block;
  padding-left: 1rem;
  padding-right: 1rem;
}
#headline {
  text-align: center;
  display: inline-block;
}
.about {
  background-color: rgb(30,30,30);
  color: antiquewhite;
}
.anim {
  width: 100%;
}
.glass p {
  padding: 1rem;
  -webkit-box-shadow: 0px 0px 72px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 72px -8px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 72px -8px rgba(0,0,0,0.75);
  margin: 0;
  display: inline-block;
}
.glass {
  text-align: justify;
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

/*small phone*/
@media (min-width: 300px) {
  #text-scramble {
    height: 6rem;
    font-size: 2rem;
    margin: 0;
    padding: 10px;
  }
  .sub-headline{
    padding-left: 5px;
    padding-right: 5px;
  }
  .glass {
    margin: 1rem;
  }
}

@media (min-width: 500px) {
  .grid-container {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    text-align: justify;
  }
  #oot {
    font-size: 4rem;
  }
  #headline {
    grid-area: 1 / 1 / 2 / 3;
  }
  .sub-headline{
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 2rem;
  }
  #text-scramble {
    height: 6rem;
    font-size: 2rem;
    margin: 0;
    padding: 10px;
    grid-area: 2 / 1 / 3 / 3;
    text-align: center;
  }
  #anim1 {
    grid-area: 3 / 1 / 4 / 2;
  }
  #text1 {
    grid-area: 3 / 2 / 4 / 3;
  }
  #text2 {
    grid-area: 4 / 1 / 5 / 2;
  }
  #anim2 {
    grid-area: 5 / 2 / 7 / 3;
  }


  #text3 {
    grid-area: 5 / 1 / 9 / 2;
  }
  /* #text4 {
    grid-area: 5 / 2 / 8 / 3;
  }
  #text5 {
    grid-area: 8 / 2 / 11 / 3;
  } */
  #text-group1 {
    grid-area: 5 / 2 / 11 / 3;
  }
  /* #text6 {
    grid-area: 9 / 1 / 13 / 2;
  }
  #text7 {
    grid-area: 13 / 1 / 17 / 2;
  } */
  #text-group2 {
    grid-area: 9 / 1 / 17 / 2;
    z-index: 1;
  }
  #anim-wrapper3 {
    grid-area: 11 / 2 / 18 / 3;
    z-index: 0;
  }
  #text8 {
    grid-area: 18 / 2 / 25 / 3;

  }
  /* #text9 {
    grid-area: 17 / 1 / 21 / 2;
  }
  #text10 {
    grid-area: 21 / 1 / 25 / 2;
  } */
  #text-group3 {
    grid-area: 17 / 1 / 25 / 2;
  }
}
@media (min-width: 1000px) {
  .grid-container {
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
    text-align: justify;
  }
  #oot {
    font-size: 5rem;
  }
  #headline {
    grid-area: 1 / 1 / 2 / 4;
  }
  .sub-headline{
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 2rem;
  }
  #text-scramble {
    height: 6rem;
    font-size: 2rem;
    margin: 0;
    padding: 10px;
    grid-area: 2 / 1 / 3 / 4;
    text-align: center;
  }
  #anim-wrapper1 {
    grid-area: 3 / 1 / 6 / 3;
  }
  #text1 {
    grid-area: 3 / 2 / 4 / 4;
    margin-left: 45%;
    margin-right: 10%;
    z-index: 2;
  }
  #text2 {
    grid-area: 4 / 2 / 5 / 4;
    margin-left: 35%;
    margin-right: 10%;
    z-index: 2;
  }
  #text3 {
    grid-area: 5 / 2 / 6 / 4;
    margin-left: 45%;
    margin-right: 10%;
    z-index: 2;
  }
  #anim-wrapper2 {
    grid-area: 6 / 2 / 8 / 3;
  }
  #text-group1 {
    grid-area: 6 / 1 / 7 / 2;
    margin-left: 20%;
  }
  #text-group2 {
    grid-area: 8 / 1 / 10 / 2;
    z-index: 1;
  }
  #anim-wrapper3 {
    grid-area: 8 / 3 / 10 / 4;
    z-index: 0;
  }
  #text8 {
    grid-area: 8 / 2 / 9 / 3;

  }
  #text-group3 {
    grid-area: 6 / 3 / 8 / 4;
    margin-right: 20%;
  }
}

</style>

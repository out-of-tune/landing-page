<template>
<footer id="footer">
      <div id="impressum">
        <div>
            Name: 
        </div>
        <div>
            Samuel Daurer
        </div>
        <div>
            Location: 
        </div>
        <div>
            Vienna
        </div>
        <div>
            Contact
        </div>
        <div>
            office@out-of-tune.org
        </div>
      </div>
      <div id="social-media">
        <a href="https://twitter.com/OOT_out_of_tune" id="twitter"><img src="../assets/Twitter_Social_Icon_Square_White.svg"></a>
        <a href="https://www.youtube.com/channel/UCrGgMZrjP26dyZ4c4cTorDw" id="youtube"><img src="../assets/youtube.png"></a>
        <a href="https://www.netidee.at/out-tune/" id="netidee"><img src="../assets/netideeLogoIcon.jpg"></a>
      </div>
      <div id="site-map">
        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/project">PROJECT</a>
        <a href="/news">NEWS</a>
      </div>
      <div id="sponsor">
        <p>
          Thanks to our sponsor!
          This project is made possible by NETIDEE. 
        </p>
    </div>
</footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  }
}
</script>


<style scoped>
img {
    height: 46px;
}
#footer {
  display: grid;
  background-color: rgb(10,10,10);
  padding-top: 1rem;
  color: whitesmoke;
  grid-gap: 1rem;
  /* border-top: 1px solid rgb(218, 106, 29); */
  border-top: 2px solid rgb(216, 174, 145);
}
#footer a {
  color: rgb(216, 174, 145);
}

@media (min-width: 300px) {
  #footer {
    grid-template-columns: 1fr;
    grid-template-areas: 
    "site-map"
    "social-media"
    "impressum"
    "sponsor";
  }
  #site-map {
    grid-area: site-map;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: rgb(20, 20, 20);
    padding: 1rem;
  }
  #social-media {
    grid-area: social-media;
    display: grid;
    padding-left: 1rem;
    padding-right: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
  #impressum {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 800px) {
  #footer {
    grid-template-columns: 350px 1fr;
    grid-template-areas: 
    "impressum site-map"
    "impressum social-media"
    "sponsor sponsor";
  }
  #impressum {
    grid-template-columns: 1fr 2fr;
  }
}

/* #impressum {
    visibility: hidden;
} */
#impressum {
  text-align: center;
  grid-area: impressum;
  display: grid;
  grid-gap: 5px;
  background-color: rgb(20, 20, 20);
  padding: 1rem;
}

#sponsor {
  grid-area: sponsor;
  background-color: rgba(132, 193, 126, 0.6);
  padding: 1rem;
  border-top: 2px solid rgb(216, 174, 145);
}

/* #social-media {
  grid-area: social-media;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
} */
/* #site-map {
  grid-area: site-map;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
} */
</style>

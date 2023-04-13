<template>
<div id="navContainer">
<img class="navButton" id="navOpen" src="./assets/menuIcon.svg" v-if="!navState" v-on:click="navButton()">
<div class="navBar" v-if="navState">
<img class="navButton" id="navClose" src="./assets/closeIcon.svg" v-if="navState" v-on:click="navButton()">

</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      navState: false,
    }
  },
  methods: {
    navButton() {
      if(this.navState == true){
        this.navState = false;
      } else {
        this.navState = true;
      }
    },
  }
}
</script>

<style>
#navContainer {

}

.navBar {
  background-color: rgba(196, 196, 196, 0.9);
  width: 300px;
  height: 800px;
  border-width: 2px;
  border-color: rgba(165, 165, 165, 0.8);
  border-radius: 0px 0px 10px 0px;
  position: fixed;
}

.navButton {
  cursor: pointer;
  width: 45px;
  height: 45px;
  margin: 10px;
  transition: 0.2s;
  position: fixed;
}

.navButton:hover {
  border-width: 3px;
  border-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}

#navClose {

}

#navOpen{ 

}
</style>

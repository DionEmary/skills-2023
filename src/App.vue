
<template>
<div class="app">
  <Navigation_Bar/>
  <RouterView/>
  <div class="footer">

  </div>
</div>
</template>

<script>
import Navigation_Bar from "./components/Navigation-bar.vue"

export default {
  name: "app",
  components: {
    Navigation_Bar
  }
  }
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}

.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>

<style scoped>
.footer {
  width: 100%;
  height: 300px;
  background-color: gray;
}
.navItem {
  width: 170px;
  padding: 20px;
  background-color: rgba(216, 216, 216, 0.5);
  text-align: center;
  margin: 10px;
  border-width: 2px;
  border-color: rgba(165, 165, 165, 0.4);
  border-radius: 15px;
  cursor: pointer;
  font-size: x-large;
}

.navItem:hover {
  border-color: rgba(216, 216, 216, 0.9);
  background-color: rgba(165, 165, 165, 0.8);
}

#navContainer {

}

.navBar {
  background-color: rgba(196, 196, 196, 0.7);
  width: 100%;
  height: 100px;
  border-bottom-width: 2px;
  border-color: rgba(165, 165, 165, 0.4);
  position: absolute;
  display: flex;
  flex-wrap: wrap;
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

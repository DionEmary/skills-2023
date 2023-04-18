<template>
  <div class="header">
      <img class="header" src="https://placeholder.pics/svg/2000x1500/BFBBFF/%20"> 
  </div>
  <div class="desktop" v-if="!mobile">
    <div class="body">
      <div class="item">
        <img src="https://placeholder.pics/svg/2000x1500/BFBBFF/%20">
        <div class="itemText">
          <h2>This is a Placeholder</h2>
          <p>
            This will be filled with text describing a aspect of the company/service <br>
            This could also be a slight snippet of the "About Us" for the Company <br>
          </p>
          <RouterLink to="/about">Placeholder Text</RouterLink>
        </div>
      </div>
      <div class="item">
        <div class="itemText">
          <h2>This is a Placeholder</h2>
          <p>
            This will be filled with text describing a aspect of the company/service <br>
            This could also be a slight snippet of the "About Us" for the Company <br>
          </p>
          <RouterLink to="/about">Placeholder Text</RouterLink>
        </div>
        <img src="https://placeholder.pics/svg/2000x1500/BFBBFF/%20">
      </div>
    </div>
  </div>
  <div class="mobile" v-if="mobile">
    <div class="body">

    </div>
  </div>
  </template>

  <script>
  export default {
    data() {
    return {
      mobile: false,
    }
  },
  }
  </script>
  
  <style lang="scss" scoped>
  .item {
    width: 100%;
    height: 600px;
    display: flex;

    img {
      padding: 40px;
      padding-left: 80px;
    }

    .itemText {
      padding: 80px;

      h2 {
        font-size: 62px;
        font-weight: 500;
        border-bottom: 2px solid;
        margin-bottom: 20px;
      }

      p {
        font-size: 22px;
        margin-bottom: 20px;
        padding-right: 80px;
      }
    }
  }
  
  .header {
    width: 100%;
    height: 750px;
  }
  
  .body {
      width: 100%;
      height: auto;
  }
  </style>
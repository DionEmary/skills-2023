<template>
  <div class="header">
      <!-- <img class="header" src="https://placeholder.pics/svg/2000x1500/BFBBFF/%20">  -->
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
          <RouterLink to="/about">Placeholder Router Text</RouterLink>
        </div>
      </div>
      <div class="item">
        <div class="itemText">
          <h2>This is a Placeholder</h2>
          <p>
            This will be filled with text describing a aspect of the company/service <br>
            This could also be a slight snippet of the "About Us" for the Company <br>
          </p>
          <RouterLink to="/about">Placeholder Router Text</RouterLink>
        </div>
        <img src="https://placeholder.pics/svg/2000x1500/BFBBFF/%20">
      </div>
    </div>
  </div>
  <div class="mobile" v-if="mobile">
    <div class="body">
      <div class="mobile-item">

      </div>
      <div class="mobile-item">
        <div id="textWrapTwo">
          <h2>Placeholder</h2>
          <p>
            This will be filled with text describing a aspect of the company/service <br>
            This could also be a slight snippet of the "About Us" for the Company <br>
          </p>
        </div>
      </div>
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
  created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();

    },
  methods: {
    checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 1300) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            return;
        }
  }
  }
  </script>
  
  <style lang="scss">
    .mobile {
      .body {
        display: flex;
        flex-wrap: wrap;

        .mobile-item {
          width: 100%;
          height: 400px;

          #textWrapTwo {
            background-color: rgba(0, 0, 0, 0.75);
            margin: 10px;
            height: 90%;

            h2 {
              font-size: 42px;
              font-weight: 500;
              border-bottom: 2px solid;
              border-color: #fff;
              margin: 0 3% 20px 1%;
              color: #fff;
              padding-right: 10px;
            }

            p {
              font-size: 22px;
              margin: 0 2% 20px 2%;
              color: #fff;
            }
          }
        }
      }
    }
  </style>

  <style lang="scss" scoped>
  .item {
    width: 100%;
    height: 600px;
    display: flex;

    img {
      padding: 40px;
    }

    .itemText {
      padding: 60px;

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
    background-image: url('https://placeholder.pics/svg/2000x1500/BFBBFF/%20');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  
  .body {
      width: 100%;
      height: auto;
  }
  </style>
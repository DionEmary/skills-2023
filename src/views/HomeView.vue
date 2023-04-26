<template>
  <div class="header"></div>
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
        <div class="textWrap">
          <h2>Placeholder</h2>
          <p>
            This will be filled with text describing a aspect of the company/service <br>
            This could also be a slight snippet of the "About Us" for the Company <br>
          </p>
        </div>
      </div>
      <div class="mobile-item">
        <div class="textWrap">
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
  
  <style lang="scss" scoped>
    .mobile {
      .body {
        display: flex;
        flex-wrap: wrap;

        .mobile-item {
          width: 100%;
          height: 400px;
          background-image: url('../assets/hero-bg.png');

          .textWrap {
            background-color: rgba(255, 255, 255, 0.15);
            margin: 30px;
            height: 90%;
            border-radius: 10px;

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
      padding: 30px;
      width: 50%;
      border-radius: 40px;
    }

    .itemText {
      padding: 60px;
      width: 50%;
      margin: 30px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.3);

        h2 {
          font-size: 58px;
          font-weight: 500;
          border-bottom: 2px solid;
          border-color: #fff;
          margin: 0 3% 20px 1%;
          color: #fff;
          padding-right: 10px;
        }

        p {
          font-size: 26px;
          margin: 0 2% 20px 2%;
          color: #fff;
        }

        a {
          font-size: 26px;
          padding: 13px 15% 13px 15%;
          border-width: 2px;
          border-color: #fff;
          color: #fff;
          border-radius: 15px;
          transition: 0.5s;

          &:hover {
            background-color: #fff;
            color: #000;
            border-color: #fff;
          }
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
      background-image: url('../assets/hero-bg.png');
  }
  </style>
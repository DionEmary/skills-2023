
<template>
<div class="app">
  <Navigation_Bar/>
  <RouterView/>
  <div class="desktop" v-if="!mobile">
    <div class="footer">
      <div class="footerNav">
        <RouterLink to="/">Home</RouterLink><br/><br/>
        <RouterLink to="/about">About Us</RouterLink><br/><br/>
        <RouterLink to="/products">Products</RouterLink><br/><br/>
        <RouterLink to="/support">Contact Us</RouterLink><br/><br/>
        <RouterLink to="/review">Review</RouterLink><br/><br/>
      </div>
      <div class="contactInfo">
        <h3>Main Contact Info</h3>
        <a href="tel:403.555.0635">+1 403-555-0635</a><br/>
        <a href="mailto: info@SpookyPopUps.com">info@SpookyPopUps.com</a> 
        <h3>Accounting Contact Info</h3>
        <a href="tel:403.556.0635">+1 403-556-0635</a><br/>
        <a href="mailto: accounting@SpookyPopUps.com">accounting@SpookyPopUps.com</a>
        <div class="socials">
          <i class="fa-brands fa-square-facebook fa-2xl"></i>
          <i class="fa-brands fa-square-twitter fa-2xl"></i>
          <i class="fa-brands fa-square-instagram fa-2xl"></i>           
        </div> 
        
      </div>
    </div>
  </div>

  <div class="mobile" v-if="mobile">
    <div class="footer">
      <div class="contactInfo">
        <h3>Main Contact Info</h3>
        <a href="tel:403.555.0635">+1 403-555-0635</a><br/>
        <a href="mailto: info@SpookyPopUps.com">info@SpookyPopUps.com</a> 
        <h3>Accounting Contact Info</h3>
        <a href="tel:403.556.0635">+1 403-556-0635</a><br/>
        <a href="mailto: accounting@SpookyPopUps.com">accounting@SpookyPopUps.com</a>
        <div class="socials">
          <i class="fa-brands fa-square-facebook fa-2xl"></i>
          <i class="fa-brands fa-square-twitter fa-2xl"></i>
          <i class="fa-brands fa-square-instagram fa-2xl"></i>           
        </div> 
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navigation_Bar from "./components/Navigation-bar.vue"

export default {
  name: "app",
  components: {
    Navigation_Bar
  },    
  data() {
    return {
      mobile: null,
      }
    },
    created() {
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();
    },
    methods: {
      checkScreen() {
        this.windowWidth = window.innerWidth;
        if(this.windowWidth <= 900){
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
@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Cabin', sans-serif;
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

<style scoped lang="scss">

.desktop {
  .footer {
    color: #fff;
    width: 100%;
    height: 400px;
    background-color: #080808;
    display: flex;

    .footerNav {
      width: 20%;
      height: auto;
      text-align: center;
      margin-top: auto;
      margin-bottom: auto;
      padding: 20px;
      font-size: 18px;
      color: #747474;

      a {
        transition: 0.2s ease-in;
        border-bottom: 2px solid transparent;
      }


      a:hover {
        color: #fff;
        border-color: #fff;
      }
    }

    .contactInfo {
      width: 80%;
      height: auto;
      text-align: center;
      margin-top: auto;
      margin-bottom: auto;
      padding: 20px;
      font-size: 22px;
      color: #747474;

      a {
        transition: 0.2s ease-in;
        border-bottom: 2px solid transparent;
      }

      h3 {
        font-size: 26px;
        border-bottom: 2px solid;
        border-color: #9c5600;
        margin: 20px 35% 20px 35%;
      }

      i {
        padding: 40px;
      }


      a:hover {
        color: #9c5600;
        border-color: #9c5600;
      }
    }
  }
}

.mobile {
  .footer {
    color: #fff;
    width: 100%;
    height: auto;
    background-color: #080808;
    display: flex;

    .contactInfo {
      width: 100%;
      height: auto;
      text-align: center;
      margin: auto 15px auto 10px;
      font-size: 16px;
      color: #747474;
      padding: 20px;

      a {
        transition: 0.2s ease-in;
        border-bottom: 2px solid transparent;
      }

      h3 {
        font-size: 18px;
        border-bottom: 2px solid;
        border-color: #9c5600;
        margin: 20px 25% 20px 25%;
      }

      i {
        padding: 40px;
      }


      a:hover {
        color: #9c5600;
        border-color: #9c5600;
      }
    }
  }
}
</style>

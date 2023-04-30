
<template>
<div class="app">
  <Navigation_Bar/>
  <RouterView/>
  <div class="desktop" v-if="!mobile">
    <div class="footer">
      <div class="footerNav">
        <RouterLink to="/">Home</RouterLink><br/><br/>
        <RouterLink to="/about">About Us</RouterLink><br/><br/>
        <RouterLink to="/services">Services</RouterLink><br/><br/>
        <RouterLink to="/support">Contact Us</RouterLink><br/><br/>
        <RouterLink to="/review">Review</RouterLink>
      </div>
      <div class="contactInfo">
        123 Sesame Street SE <br/>
        Calgary, AB, Canada, T6K 1L7 <br/><br/>
        <a href="tel:452-235-8567">452-235-8567</a><br/>
        <a href = "mailto: dione1@educbe.ca">randomEmail@random.com</a>

      </div>
      <div class="mapWrap">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.478974459961!2d-114.06511712300853!3d51.04424314443221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170020601a341%3A0xb30c652b03bd63b6!2sCalgary%20Tower%2C%20Calgary%2C%20AB!5e0!3m2!1sen!2sca!4v1682826402147!5m2!1sen!2sca" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>

  <div class="mobile" v-if="mobile">
    <div class="footer">
      <div class="contactInfo">
        123 Sesame Street SE<br/>
        Calgary, AB, Canada, T6K 1L7 <br/>
        <a href="tel:452-235-8567">452-235-8567</a><br/>
        <a href = "mailto: dione1@educbe.ca">randomEmail@random.com</a>

      </div>
      <div class="mapWrap">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.478974459961!2d-114.06511712300853!3d51.04424314443221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170020601a341%3A0xb30c652b03bd63b6!2sCalgary%20Tower%2C%20Calgary%2C%20AB!5e0!3m2!1sen!2sca!4v1682826402147!5m2!1sen!2sca" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
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
@import url("https://fonts.googleapis.com/css2?family=Arimo&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
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
    height: auto;
    background-color: #363636;
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
      width: 50%;
      height: auto;
      text-align: center;
      margin-top: auto;
      margin-bottom: auto;
      padding: 20px;
      font-size: 26px;
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
    
    .mapWrap {
      margin: 20px 20px 20px 50px;
      height: auto;
      width: 30%;

      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.mobile {
  .footer {
    color: #fff;
    width: 100%;
    height: auto;
    background-color: #363636;
    display: flex;

    .contactInfo {
      width: 50%;
      height: auto;
      text-align: center;
      margin: auto 15px auto 10px;
      font-size: 13px;
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
    
    .mapWrap {
      margin: 2px 2px 2px 15px;
      height: auto;
      width: 50%;

      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

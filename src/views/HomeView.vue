<template>
  <div class="desktop" v-if="!mobile">
    <div class="header">
      <div class="headerWrap">    
        <h1>Spooky Popups</h1>
        <h3>Popping up to provide you with top quality halloween gear!</h3>
      </div>
    </div>
    <div class="body">
      <div class="item">
        <img src="@/assets/aboutHomePage.webp">
        <div class="itemText">
          <h2>About Our Company</h2>
          <p>
            We aim to bring our customers top quality Halloween gear at a low price, we can't be bothered with a store all year long when all you need us for is 1 month.
            We keep our costs low and pass those onto the customers!  When you shop with us you can be sure that the spooky deals you see are the best around!
          </p>
          <RouterLink to="/about">Learn More About Us</RouterLink>
        </div>
      </div>
      <div class="item">
        <div class="itemText">
          <h2>Our Product Lines</h2>
          <p>
            Click here to browse our long list of products from our Costumes and Accessories to our Party and Lawn Decorations all at a very low price! 
            We even have something for those who take Halloween to the next level, our high quality animatronics that fit any use from a party to a elaborate lawn decoration.
          </p>
          <RouterLink to="/products">Browse Our Product Lines</RouterLink>
        </div>
        <img src="@/assets/productImg.jpg">
      </div>
      <div class="item">
          <img src="@/assets/contactImg.jpg">          
        <div class="itemText">
          <h2>Find/Contact Us</h2>
          <p>
            Need help with any of our products? have any questions about our products? Interested in owning your store for a season? Maybe you need help finding a store.
            All of this can be done by simply pushing the button below.
          </p>
          <RouterLink to="/support">Explore our Support Page</RouterLink>
        </div>
      </div>
      <div class="item">
        <div class="itemText">
          <h2>Leave a Review</h2>
          <p>
            Did you just love our products? Maybe the customer service was amazing or the prices are just amazing. no matter the reason we would love to hear
            your feedback through a review, click below to be redirected to our review page
          </p>
          <RouterLink to="/products">Leave us a Review</RouterLink>
        </div>
        <img src="@/assets/ReviewImg.jpg">
      </div>
    </div>
  </div>
  <div class="mobile" v-if="mobile">
    <div class="header">
    <div class="headerWrap">    
      <h1>Spooky Popups</h1>
      <h3>Popping up to provide you with top quality halloween gear!</h3>
    </div>
  </div>
    <div class="body">
      <div class="mobile-item">
        <div class="textWrap">
          <h2>About our Company</h2>
          <p>
            We aim to bring our customers top quality Halloween gear at a low price, we can't be bothered with a store all year long when all you need us for is 1 month.
            We keep our costs low and pass those onto the customers!  When you shop with us you can be sure that the spooky deals you see are the best around!
            <br/>
            <br/>
            <RouterLink to="/about">Learn More About Us</RouterLink>
          </p>
        </div>
      </div>
      <div class="mobile-item">
        <div class="textWrap">
          <h2>Our Product Lines</h2>
          <p>
            Click here to browse our long list of products from our Costumes and Accessories to our Party and Lawn Decorations all at a very low price! 
            We even have something for those who take Halloween to the next level, our high quality animatronics that fit any use from a party to a elaborate lawn decoration.
            <br/>
            <br/>
            <RouterLink to="/products">Browse Our Products</RouterLink>
          </p>
        </div>
      </div>
      <div class="mobile-item">
        <div class="textWrap">
          <h2>Find/Contact Us</h2>
          <p>
            Need help with any of our products? have any questions about our products? Interested in owning your store for a season? Maybe you need help finding a store.
            All of this can be done by simply pushing the button below.
            <br/>
            <br/>
            <RouterLink to="/products">Explore our Support Page</RouterLink>
          </p>
        </div>
      </div>
      <div class="mobile-item">
        <div class="textWrap">
          <h2>Leave a Review</h2>
          <p>
            Did you just love our products? Maybe the customer service was amazing or the prices are just amazing. no matter the reason we would love to hear
            your feedback through a review, click below to be redirected to our review page
            <br/>
            <br/>
            <RouterLink to="/products">Leave us a Review</RouterLink>
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
          background-color: rgba(0,0,0,0.4);
          width: 100%;
          height: auto;

          .textWrap {
            background-color: rgba(0, 0, 0, 0.6);
            margin: 10px;
            padding: 20px;
            height: 90%;
            border-radius: 10px;

            h2 {
              font-size: 32px;
              font-weight: 500;
              border-bottom: 2px solid;
              border-color: #9c5600;
              margin: 0 3% 20px 1%;
              color: #c5c5c5;
              padding-right: 10px;
            }

            p {
              font-size: 18px;
              margin: 0 2% 50px 2%;
              color: #c5c5c5;

              a {
                font-size: 18px;
                padding: 5px;
                border-width: 2px;
                border-color: #9c5600;
                color: #c5c5c5;
                border-radius: 15px;
                transition: 0.5s;
                margin: 0 10px 0 10px; 
              }
            }
          }
        }
      }

      .header {
            width: 100%;
            height: 500px;
            background-image: url('@/assets/HeaderImg.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
    
            .headerWrap {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 225px 0 225px 0;

                h1 {
                    font-size: 38px;
                    font-weight: 600;
                    width: 100%;
                    text-align: center;
                    color: #fff;
                }

                h3 {  
                    font-size: 18px;
                    font-weight: 500;
                    width: 100%;
                    text-align: center;
                    color: #fff;
                }      
            }
        }
    }
  </style>

  <style lang="scss" scoped>
  .item {
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    height: 600px;
    display: flex;

    img {
      padding: 30px;
      width: 50%;
      border-radius: 40px;
      opacity: 80%;
    }

    .itemText {
      padding: 60px;
      width: 50%;
      margin: 30px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.6);

        h2 {
          font-size: 58px;
          font-weight: 500;
          border-bottom: 2px solid;
          border-color: #9c5600;
          margin: 0 3% 20px 1%;
          color: #c5c5c5;
          padding-right: 10px;
        }

        p {
          font-size: 26px;
          margin: 0 2% 40px 2%;
          color: #c5c5c5;
        }

        a {
          font-size: 26px;
          padding: 13px 15% 13px 15%;
          border-width: 2px;
          border-color: #9c5600;
          color: #c5c5c5;
          border-radius: 15px;
          transition: 0.5s;
          margin: 2%; 

          &:hover {
            background-color: #c26b00;
            color: #000;
            border-color: #c26b00;
          }
        }
    }
  }
  
  .header {
    width: 100%;
    height: 750px;
    background-image: url('@/assets/HeaderImg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    
    .headerWrap {
      background-color: rgba(0, 0, 0, 0.7);
      padding: 345px;

      h1 {
        font-size: 48px;
        font-weight: 600;
        width: 100%;
        text-align: center;
        color: #fff;
      }

      h3 {  
        font-size: 22px;
        font-weight: 500;
        width: 100%;
        text-align: center;
        color: #fff;
      }      
    }

  }
  
  .body {
      width: 100%;
      height: auto;
      background-image: url('../assets/hero-bg.png');
  }
  </style>
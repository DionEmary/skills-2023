<template>
    <div class="desktop" v-if="!mobile">
        <div class="header">
            <div class="headerWrap">    
            <h1>About Us</h1>
            </div>
        </div>
        <div class="body">
            <div class="item">
                <div class="textWrap">
                    <h2>About Spooky Popups</h2>
                    <p>
                        We aim to bring our customers top quality Halloween gear at a low price, we can't be bothered with a store all year long when all you need us for is 1 month.  
                        To help keep costs low we'll take over any abandoned or vacant space starting on October 1st for just over a month to bring our customers the Halloween gear they need, when they need it, for amazing prices. 
                        <br/>
                        After November 2nd, we are gone but we'll be back again on October 1st the following year to spook people all over again!
                    </p>
                </div>
            </div>
            <div class="item">
                <div class="textWrap">
                    <h2>Why are we Better</h2>
                    <p>
                        We keep our costs low and pass those onto the customers!  When you shop with us you can be sure that the spooky deals you see are the best around!  No need to shop 
                        around, we've done that for you and rest assured you won't find our goods at a better price anywhere!
                        <br/>
                        <br/>
                        We are family friendly!  Halloween is for everyone!  From young children to older adults, our store stocks great spooky products to meet all ages!
                    </p>
                </div>
            </div>
            <div class="item2">
                <div class="textWrap">
                    <h2>What about refunds?</h2>
                    <p>
                        Because we know our Halloween offerings are the best around in both quality and price, every sale is final.  
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="mobile" v-if="mobile">
        <div class="header">
            <div class="headerWrap">    
            <h1>About Us</h1>
            </div>
        </div>
        <div class="body">
            <div class="item">
                <div class="textWrap">
                    <h2>About Spooky Popups</h2>
                    <p>
                        We aim to bring our customers top quality Halloween gear at a low price, we can't be bothered with a store all year long when all you need us for is 1 month.  
                        To help keep costs low we'll take over any abandoned or vacant space starting on October 1st for just over a month to bring our customers the Halloween gear they need, when they need it, for amazing prices. 
                        <br/>
                        After November 2nd, we are gone but we'll be back again on October 1st the following year to spook people all over again!
                    </p>
                </div>
            </div>
            <div class="item">
                <div class="textWrap">
                    <h2>Why are we Better</h2>
                    <p>
                        We keep our costs low and pass those onto the customers!  When you shop with us you can be sure that the spooky deals you see are the best around!  No need to shop 
                        around, we've done that for you and rest assured you won't find our goods at a better price anywhere!
                        <br/>
                        <br/>
                        We are family friendly!  Halloween is for everyone!  From young children to older adults, our store stocks great spooky products to meet all ages!
                    </p>
                </div>
            </div>
            <div class="item">
                <div class="textWrap">
                    <h2>What about refunds?</h2>
                    <p>
                        Because we know our Halloween offerings are the best around in both quality and price, every sale is final.  
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
                if(this.windowWidth <= 750){
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

    .desktop {
        .header {
            width: 100%;
            height: 750px;
            background-image: url('@/assets/AboutHeader.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
    
            .headerWrap {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 345px 0 345px 0;

                h1 {
                    font-size: 48px;
                    font-weight: 600;
                    width: 100%;
                    text-align: center;
                    color: #fff;
                }

                h3 {  
                    font-size: 22px;
                    font-weight: 600;
                    width: 100%;
                    text-align: center;
                    color: #fff;
                }      
            }
        }
        .body {
            display: flex;
            flex-wrap: wrap;
            background-image: url('../assets/hero-bg.png');

            .item {
                width: 50%;
                height: auto;
                background-color: rgba(0,0,0,0.4);
                .textWrap {
                    margin: 20px 20px 20px 20px;
                    height: 90%;
                    background-color: rgba(0, 0, 0, 0.6);
                    padding: 30px 30px 45px 30px;
                    border-radius: 10px;

                    h2 {
                        font-size: 32px;
                        font-weight: 500;
                        border-bottom: 2px solid;
                        border-color: #9c5600;
                        margin: 0 3% 20px 3%;
                        color: #c5c5c5;
                        text-align: center;
                    }

                    p {
                        font-size: 28px;
                        margin: 20px 2% 20px 2%;
                        color: #c5c5c5;
                    }
                }
            }
            .item2 {
                width: 100%;
                height: auto;
                padding-bottom: 20px;
                background-color: rgba(0,0,0,0.4);
                .textWrap {
                    margin: 20px 200px 20px 200px;
                    height: 90%;
                    background-color: rgba(0, 0, 0, 0.6);
                    padding: 30px;
                    border-radius: 10px;

                    h2 {
                        font-size: 32px;
                        font-weight: 500;
                        border-bottom: 2px solid;
                        border-color: #9c5600;
                        margin: 0 3% 20px 3%;
                        color: #c5c5c5;
                        text-align: center;
                    }

                    p {
                        font-size: 30px;
                        margin: 20px 2% 20px 2%;
                        color: #c5c5c5;
                        text-align: center;
                    }
                }
            }
        }
    }

    .mobile {
        .header {
            width: 100%;
            height: 500px;
            background-image: url('@/assets/AboutHeader.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
    
            .headerWrap {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 250px 0 250px 0;

                h1 {
                    font-size: 38px;
                    font-weight: 600;
                    width: 100%;
                    text-align: center;
                    color: #fff;
                }

                h3 {  
                    font-size: 22px;
                    font-weight: 600;
                    width: 100%;
                    text-align: center;
                    color: #fff;
                }      
            }
        }
        .body {
            display: flex;
            flex-wrap: wrap;

            .item {
                width: 100%;
                height: auto;
                background-color: rgba(0,0,0,0.4);
                .textWrap {
                    margin: 5px;
                    height: 90%;
                    background-color: rgba(0, 0, 0, 0.6);
                    padding: 35px 10px 55px 10px;
                    border-radius: 10px;

                    h2 {
                        font-size: 26px;
                        font-weight: 500;
                        border-bottom: 2px solid;
                        border-color: #9c5600;
                        margin: 0 3% 10px 3%;
                        color: #c5c5c5;
                        padding-right: 10px;
                        text-align: center;
                    }

                    p {
                        text-align: center;
                        font-size: 18px;
                        margin: 0 2% 10px 2%;
                        color: #c5c5c5;
                    }
                }
            }
        }
    }
    .body {
        width: 100%;
        height: auto;
        background-image: url('../assets/hero-bg.png');
    }
    </style>
    
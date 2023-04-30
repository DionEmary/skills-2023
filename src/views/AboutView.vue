<template>
    <div class="header"></div>
    <div class="desktop" v-if="!mobile">
        <div class="body">
            <div class="item">
                <div class="textWrap">
                    <h2>About our Company</h2>
                    <p>
                        Our Company has a goal to provide people (service) in a fast time and a friendly enviorment. Our Company has been doing this for XXXX Years and has always strived to be better as time goes on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, similique. 
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="mobile" v-if="mobile">
        <div class="body">
            <div class="item">
                <div class="textWrap">
                    <h2>About our Company</h2>
                    <p>
                        Our Company has a goal to provide people (service) in a fast time and a friendly enviorment. Our Company has been doing this for XXXX Years and has always strived to be better as time goes on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, similique. 
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
                if(this.windowWidth <= 700){
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
        .body {
            display: flex;
            flex-wrap: wrap;

            .item {
                width: 100%;
                height: auto;
                background-image: url('../assets/hero-bg.png');
                .textWrap {
                    margin: 20px 200px 20px 200px;
                    height: 90%;
                    background-color: rgba(0, 0, 0, 0.3);
                    padding: 30px;
                    border-radius: 10px;

                    h2 {
                        font-size: 52px;
                        font-weight: 500;
                        border-bottom: 2px solid;
                        border-color: #fff;
                        margin: 0 3% 20px 1%;
                        color: #fff;
                        padding-right: 10px;
                    }

                    p {
                        font-size: 34px;
                        margin: 20px 2% 20px 2%;
                        color: #fff;
                    }
                }
            }
        }
    }

    .mobile {
        .body {
            display: flex;
            flex-wrap: wrap;

            .item {
                width: 100%;
                height: auto;
                background-image: url('../assets/hero-bg.png');
                .textWrap {
                    margin: 25px 0 25px 0;
                    height: 90%;
                    background-color: rgba(0, 0, 0, 0.3);
                    padding: 20px;
                    border-radius: 10px;

                    h2 {
                        font-size: 32px;
                        font-weight: 500;
                        border-bottom: 2px solid;
                        border-color: #fff;
                        margin: 0 3% 10px 1%;
                        color: #fff;
                        padding-right: 10px;
                    }

                    p {
                        font-size: 22px;
                        margin: 0 2% 5px 2%;
                        color: #fff;
                    }
                }
            }
        }
    }
    .body {
        width: 100%;
        height: auto;
    }
    .header {
        width: 100%;
        height: 750px;
        background-image: url('https://placeholder.pics/svg/2000x1500/BFBBFF/%20');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    </style>
    
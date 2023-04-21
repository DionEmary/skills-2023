<template>
    <div class="header"></div>
    <div class="body">

        <div class="desktop" v-if="!mobile">
            <div class="textWrap">
                <h2></h2>
                <p>
                    Desktop
                </p>
            </div>
        </div>

        <div class="mobile" v-if="mobile">
            <div class="textWrap">
                <h2></h2>
                <p>
                    Mobile
                </p>
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

    .desktop {
        width: 100%;
        .textWrap {
            height: 600px;
        }
    }

    .mobile {
        width: 100%;
        .textWrap {
            height: 400px;
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
    
<template>
    <div class="header"></div>
    <div class="body">
        <div class="item">
            <div class="textWrap">
                <h2>About our Company</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam quidem necessitatibus modi nostrum debitis dolor magnam quae, vero omnis id assumenda quod delectus nemo, error veniam dolore provident quibusdam, hic odio numquam consectetur. Hic rem ratione libero enim corrupti sint quod blanditiis quia nihil aut temporibus, cumque maiores mollitia ad provident voluptate itaque facere omnis quis natus neque saepe. Optio laudantium iure eos ex fuga, at porro consequuntur illum obcaecati dolores accusamus dignissimos perferendis doloribus laboriosam, architecto minima rerum veniam magnam. Iure, natus. Sint quia error facere neque quis.
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

    .body {
        display: flex;
        flex-wrap: wrap;

        .item {
            width: 100%;
            height: 600px;
            background-image: url('../assets/hero-bg.png');
            .textWrap {
                margin: 45px;
                height: 85%;
                background-color: rgba(255, 255, 255, 0.15);
                padding: 30px;
                border-radius: 10px;

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
    
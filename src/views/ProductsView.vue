<template>
        <div class="desktop" v-if="!mobile">
            <div class="header">
                <div class="headerWrap">    
                    <h1>Products</h1>
                </div>
            </div>
            <div class="body">
                <div class="wrap">
                    <div class="productsInfo">
                        <h2>About our Product Lines</h2>
                        <p>
                            These are all our one of a kind product lines that will help you stand out this halloween, from costumes to animatronics we got it all to help add that push to perfection this halloween
                            <br/><br/>
                            <b>All our products must be purchased in store and not online</b>
                        </p>
                    </div>
                    <div class="products" v-bind:key="i" v-for="slot,i in productsArr" v-if="databaseActive">
                        <h2>{{ slot.title }}</h2>
                        <p>{{ slot.desc }}</p>
                    </div>

                </div>
            </div>
        </div>

        <div class="mobile" v-if="mobile">
            <div class="header">
                <div class="headerWrap">    
                    <h1>Our Product Lines</h1>
                </div>
            </div>
            <div class="body">
                <div class="wrap">
                    <div class="productsInfo">
                        <h2>About our Product Lines</h2>
                        <p>
                            These are all our one of a kind product lines that will help you stand out this halloween, from costumes to animatronics we got it all to help add that push to perfection this halloween
                            <br/><br/>
                            <b>All our products must be purchased in store and not online</b>
                        </p>
                    </div>
                    <div class="products" v-bind:key="i" v-for="slot,i in productsArr">
                        <h2>{{ slot.title }}</h2>
                        <p>{{ slot.desc }}</p>
                    </div>
                </div>
            </div>            
        </div>
    </template>

    <script>
        import { collection, getDocs, addDoc } from "firebase/firestore"
        import { db } from '@/firebase'
        import { v4 as uuidv4 } from 'uuid'
        import { getDownloadURL, getStorage, ref } from "firebase/storage";

        export default {
            data() {
                return {
                    mobile: null,
                    productsArr: [],
                    databaseActive: true,
                }
            },
            async mounted() {
            try {
                const querySnapshot = await getDocs(collection(db, 'products'));
                let arrProducts = []
                    querySnapshot.forEach((doc) => {
                    arrProducts.push(doc.data())
                });
                this.productsArr = arrProducts;
                this.databaseActive = true;
                console.log(this.productsArr);
            }
            catch(err) {
                this.databaseActive = false;
            }
            },
            created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();

        },
        methods: {
            checkScreen() {
                this.windowWidth = window.innerWidth;
                if (this.windowWidth <= 1000) {
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
            background-image: url('@/assets/productImg.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            
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
                font-weight: 600;
                width: 100%;
                text-align: center;
                color: #fff;
            }      
        }
    }
        .body {
            .wrap {
                background-color: rgba(0,0,0,0.4);
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;

                .productsInfo {
                    width: 95%;
                    margin: 2.5% 2.5% 2.5% 2.5%;
                    background-color: rgba(0, 0, 0, 0.4);
                    padding: 10px 20px 10px 20px;
                    display: flex;
                    flex-wrap: wrap;
                    border-radius: 15px;

                    h2 {
                        font-size: 48px;
                        font-weight: 600;
                        width: 100%;
                        text-align: center;
                        color: #c5c5c5;
                        border-bottom: 2px solid;
                        border-color: #9c5600;
                        margin: 0 15% 0 15%;
                    }

                    p {
                        font-size: 26px;
                        margin: 20px 2% 10px 2%;
                        color: #c5c5c5;
                        text-align: center;
                    }
                }
                .products {
                    width: 45%;
                    margin: 2.5% 2.5% 2.5% 2.5%;
                    background-color: rgba(0, 0, 0, 0.4);
                    padding: 10px 20px 10px 20px;
                    display: flex;
                    flex-wrap: wrap;
                    border-radius: 15px;

                    h2 {
                        font-size: 48px;
                        font-weight: 600;
                        width: 100%;
                        text-align: center;
                        color: #c5c5c5;
                        border-bottom: 2px solid;
                        border-color: #9c5600;
                        margin: 0 15% 0 15%;
                    }

                    p {
                        font-size: 26px;
                        margin: 20px 2% 10px 2%;
                        color: #c5c5c5;
                    }
                }
            }
        }
    }

    .mobile {

        .header {
            width: 100%;
            height: 500px;
            background-image: url('@/assets/productImg.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
    
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
                    font-weight: 600;
                    width: 100%;
                    text-align: center;
                    color: #fff;
                }      
            }
        }
        .body {
            .wrap {
                background-color: rgba(0,0,0,0.4);
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;

                .productsInfo {
                    width: 95%;
                    margin: 2.5% 2.5% 2.5% 2.5%;
                    background-color: rgba(0, 0, 0, 0.4);
                    padding: 10px 20px 10px 20px;
                    display: flex;
                    flex-wrap: wrap;
                    border-radius: 15px;

                    h2 {
                        font-size: 32px;
                        font-weight: 600;
                        width: 100%;
                        text-align: center;
                        color: #c5c5c5;
                        border-bottom: 2px solid;
                        border-color: #9c5600;
                        margin: 0 15% 0 15%;
                    }

                    p {
                        font-size: 18px;
                        margin: 20px 2% 10px 2%;
                        color: #c5c5c5;
                        text-align: center;
                    }
                }
                .products {
                    width: 95%;
                    margin: 2.5% 2.5% 2.5% 2.5%;
                    background-color: rgba(0, 0, 0, 0.4);
                    padding: 10px 20px 10px 20px;
                    display: flex;
                    flex-wrap: wrap;
                    border-radius: 15px;

                    h2 {
                        font-size: 32px;
                        font-weight: 600;
                        width: 100%;
                        text-align: center;
                        color: #c5c5c5;
                        border-bottom: 2px solid;
                        border-color: #9c5600;
                        margin: 0 15% 0 15%;
                    }

                    p {
                        font-size: 18px;
                        margin: 20px 2% 10px 2%;
                        color: #c5c5c5;
                    }
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
    
<template>
    <div class="header"></div>

        <div class="desktop" v-if="!mobile">
            <div class="body">
                    <div class="review" v-bind:key="i" v-for="review,i in reviewsArr">
                        <h2 class="name">{{ review.name }}</h2>
                        <div class="content">
                            {{ review.content }}
                        </div>
                        <div class="rating"><i class="fa-regular fa-star" style="color: #e8d930;"></i> {{ review.rating }} </div>
                    </div>
            </div>
        </div>

        <div class="mobile" v-if="mobile">
            <div class="body">
                
            </div>
        </div>

    </template>

    <script>
        import { collection, getDocs } from "firebase/firestore"
        import { db } from '@/firebase'

        export default {
            data() {
                return {
                    mobile: null,
                    reviewsArr: [],
                }
            },
            async mounted() {
                const querySnapshot = await getDocs(collection(db, 'reviews'));
                let arrReviews = []
                    querySnapshot.forEach((doc) => {
                    arrReviews.push(doc.data())
                });
                this.reviewsArr = arrReviews;
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
                },
                test() {
                    console.log(this.reviewsArr)
                }
            }
        }
    </script>
    
    <style lang="scss" scoped>

    .desktop {  
        .body {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            .review {
                background-color: rgba(255, 255, 255, 0.9);
                width: 25%;
                margin: 2.5%;
                padding: 20px;
                color: rgb(48, 48, 48);
                border-radius: 15px;
                height: auto;

                h2 {
                    font-size: 38px;
                    border-bottom: 2px solid;
                    border-color: rgb(48, 48, 48);
                    margin: 10px;
                    font-weight: 600;
                }

                .content {
                    margin: 10px;
                    font-size: 20px;
                    font-weight: 100;
                }

                .rating {
                    margin: 10px;
                    font-size: 26px;
                }
            }
        }
    }

    .mobile {

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
    
<template>
    <div class="header"></div>

        <div class="desktop" v-if="!mobile">
            <div class="body">
                <!-- <div class="reviewItem" v-for="reviews in reviewsArr"> -->
                    <div>Hello</div>
                    <button @click="test()">Test</button>
                <!-- </div> -->
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
                    console.log(doc.id, " => ", doc.data());
                    const reviews = {
                        id: doc.id,
                        content: doc.data().content,
                        name: doc.data().name,
                        rating: doc.data().rating,
                    }
                    arrReviews.push(reviews)
                });
                this.reviewsArr.values = arrReviews;
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
        .reviewItem {

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
    }
    </style>
    
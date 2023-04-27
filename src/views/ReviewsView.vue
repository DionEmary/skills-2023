<template>
    <div class="header"></div>

        <div class="desktop" v-if="!mobile">
            <div class="body">
                <div class="addReview">
                    <form @submit.prevent="sendReview">

                        <div class="nameInput">
                            <input 
                            type="text" 
                            placeholder="Full Name" 
                            v-model="reviewName"
                            >
                        </div>

                        <div class="reviewInput">
                            <input placeholder="e.g. Hello world" v-model="reviewContent">
                        </div>
                            
                        <div class="ratingInput">
                            <input 
                            type="number" 
                            placeholder="Rating" 
                            v-model="reviewRating"
                            >
                        </div>

                        <button :disabled="!reviewName || !reviewContent || reviewRating > 5 || reviewRating < 0 || !reviewRating" class="reviewSubmit">Submit Review</button>
                    </form>
                </div>
                <div class="reviewBody">
                    <div class="review" v-bind:key="i" v-for="review,i in reviewsArr">
                        <h2 class="name">{{ review.name }}</h2>
                        <div class="content">
                            {{ review.content }}
                        </div>
                        <div class="rating"><i class="fa-solid fa-star" style="color: #e8d930;"></i> {{ review.rating }} </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mobile" v-if="mobile">
            <div class="body">
                
            </div>
        </div>

    </template>
    <script setup>
        import { collection, getDocs, addDoc } from "firebase/firestore"
        import { db } from '@/firebase'
        import { v4 as uuidv4 } from 'uuid'
        import { ref } from "vue"

                        const reviewName = ref('')
                        const reviewContent = ref('')
                        const reviewRating = ref('')

                        const sendReview = () => {
                            addDoc(collection(db, "reviews"), {
                                name: reviewName.value,
                                content: reviewContent.value,
                                rating: reviewRating.value,
                            });
                            reviewName.value = ''
                            reviewContent.value = ''
                            reviewRating.value = ''
                        }
    </script>
    <script>
        /* import { collection, getDocs, addDoc } from "firebase/firestore"
        import { db } from '@/firebase'
        import { v4 as uuidv4 } from 'uuid'
        import { ref } from "vue" */

        export default {
            data() {
                return {
                    mobile: null,
                    reviewsArr: [],
                    name: document.getElementsByClassName('nameInput').value,
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
                }
            }
    </script>
    
    <style lang="scss" scoped>

    .desktop {  
        .body {
            .addReview {
                width: 100%;
                height: 400px;
                display: flex;
                flex-wrap: wrap;

                form {
                    width: 95%;
                    margin: 2.5%;
                    background-color: #fff;

                .nameInput {
                }

                .reviewInput {

                }

                .reviewRating {

                }

                .reviewSubmit {
                    color: #fff;
                }

                input {
                    border-radius: 10px;
                    border-width: 2px;
                    border-color: #181818;
                }
            }

        }
            .reviewBody {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                .review {
                    background-color: rgba(0, 0, 0, 0.7);
                    width: 45%;
                    margin: 2.5%;
                    padding: 20px;
                    color: rgb(48, 48, 48);
                    border-radius: 15px;
                    height: auto;
                    color: white;

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
    
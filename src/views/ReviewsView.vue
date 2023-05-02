<template>
    <div class="header"></div>

        <div class="desktop" v-if="!mobile">
            <div class="body">
                <div class="failedWrap" v-if="!databaseActive">
                    <div class="failed">
                        <h2>Failed</h2>
                    </div>
                </div>
                <div class="addReview" v-if="databaseActive">
                    <form @submit.prevent="sendReview">
                    <h2>Leave us a Review!</h2>
                    <div class="nameInput">
                        <div class="firstNameInput">
                            <input 
                            type="text" 
                            placeholder="First Name" 
                            v-model="reviewFirstName"
                            size="39"
                            required
                            >
                        </div>

                        <div class="lastNameInput">
                            <input 
                            type="text" 
                            placeholder="Last Name" 
                            v-model="reviewLastName"
                            size="39"
                            required
                            >
                        </div>
                    </div>
                    <div class="reviewWrap">
                        <div class="reviewInput">
                            <textarea
                            placeholder="Write your review here" 
                            v-model="reviewContent"
                            rows="4"
                            cols="41"
                            required
                            ></textarea>
                        </div>
                            
                        <div class="ratingInput">

                            <label for="rating">Choose a Rating:</label>
                            <select   
                            name="rating"
                            v-model="reviewRating"
                            label="Rating"
                            required
                            >
                                <optgroup label="Star Rating">
                                    <option value="5">5 ★</option>                                    
                                    <option value="4.5">4.5 ★</option>
                                    <option value="4">4 ★</option>
                                    <option value="3.5">3.5 ★</option>
                                    <option value="3">3 ★</option>
                                    <option value="2.5">2.5 ★</option>
                                    <option value="2">2 ★</option>
                                    <option value="1.5">1.5 ★</option>                                   
                                    <option value="1">1 ★</option>
                                </optgroup>
                            </select>    
                        </div>                        
                        <button class="reviewSubmit">Submit Review</button>
                    </div>

                    </form>
                </div>
                <div class="reviewBody" v-if="databaseActive">
                    <div class="review" v-bind:key="i" v-for="review,i in reviewsArr">
                        <h2 class="name">{{ review.firstName }} {{ review.lastName }}</h2>
                        <div class="content">
                            {{ review.content }}
                        </div>
                        <div class="rating"><i class="fa-solid fa-star" style="color: #e8d930;"></i> {{ review.rating }} </div>
                    </div>
                </div>
                <div class="reviewBody" v-if="!databaseActive">
                    <div class="review">
                        <h2 class="name">Jerry Berry</h2>
                        <div class="content">
                            This is a good product
                        </div>
                        <div class="rating"><i class="fa-solid fa-star" style="color: #e8d930;"></i>5</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mobile" v-if="mobile">
            <div class="body">
                <div class="failed" v-if="!databaseActive">
                    Failed
                </div>
                <div class="addReview" v-if="databaseActive">
                    <form @submit.prevent="sendReview">
                    <h2>Leave us a Review!</h2>
                    <div class="nameInput">
                        <div class="firstNameInput">
                            <input 
                            type="text" 
                            placeholder="First Name" 
                            v-model="reviewFirstName"
                            size="19"
                            maxlength="1"
                            required
                            >
                        </div>

                        <div class="lastNameInput">
                            <input 
                            type="text" 
                            placeholder="Last Name" 
                            v-model="reviewLastName"
                            size="19"
                            required
                            >
                        </div>
                    </div>
                    <div class="reviewWrap">
                        <div class="reviewInput">
                            <textarea
                            placeholder="Write your review here" 
                            v-model="reviewContent"
                            rows="4"
                            cols="26"
                            required
                            ></textarea>
                        </div>
        
                        <div class="ratingInput">
                                <label for="rating">Choose a Rating:</label>
                                <select   
                                name="rating"
                                v-model="reviewRating"
                                label="Rating"
                                required
                                >
                                <optgroup label="Star Rating">
                                    <option value="5">5 ★</option>                                    
                                    <option value="4.5">4.5 ★</option>
                                    <option value="4">4 ★</option>
                                    <option value="3.5">3.5 ★</option>
                                    <option value="3">3 ★</option>
                                    <option value="2.5">2.5 ★</option>
                                    <option value="2">2 ★</option>
                                    <option value="1.5">1.5 ★</option>                                   
                                    <option value="1">1 ★</option>
                                </optgroup>
                                </select>    
                            </div>                        
                            <button class="reviewSubmit">Submit Review</button>
                        </div>

                    </form>
                </div>
                <div class="reviewBody" v-if="databaseActive">
                    <div class="review" v-bind:key="i" v-for="review,i in reviewsArr">
                        <h2 class="name">{{ review.firstName }} {{ review.lastName }}</h2>
                        <div class="content">
                            {{ review.content }}
                        </div>
                        <div class="rating"><i class="fa-solid fa-star" style="color: #e8d930;"></i> {{ review.rating }} </div>
                    </div>
                </div>
                <div class="reviewBody" v-if="!databaseActive">
                    <div class="review">
                        <h2 class="name">Jerry Berry</h2>
                        <div class="content">
                            This is a good product
                        </div>
                        <div class="rating"><i class="fa-solid fa-star" style="color: #e8d930;"></i>5</div>
                    </div>
                </div>
            </div>    
        </div>

    </template>
    <script setup>
        import { collection, getDocs, addDoc } from "firebase/firestore"
        import { db } from '@/firebase'
        import { v4 as uuidv4 } from 'uuid'
        import { ref } from "vue"

                        const reviewFirstName = ref('')
                        const reviewLastName = ref('')
                        const reviewContent = ref('')
                        const reviewRating = ref('')

                        const sendReview = () => {
                            addDoc(collection(db, "reviews"), {
                                firstName: reviewFirstName.value,
                                lastName: reviewLastName.value,
                                content: reviewContent.value,
                                rating: reviewRating.value,
                            });
                            reviewFirstName.value = ''
                            reviewLastName.value = ''
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
                    reviewsArr: [ ],
                    databaseActive: true,
                }
            },
            async mounted() {
            try {
                const querySnapshot = await getDocs(collection(db, 'reviews'));
                let arrReviews = []
                    querySnapshot.forEach((doc) => {
                    arrReviews.push(doc.data())
                });
                this.reviewsArr = arrReviews;
                this.databaseActive = true;
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
                    },
                }
            }
    </script>
    
    <style lang="scss" scoped>

    .desktop {  
        .body {
            .failedWrap {
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;

                .failed {
                    width: 55%;
                    margin: 2.5% 22.5% 2.5% 22.5%;
                    background-color: rgba(255, 255, 255, 0.4);
                    padding: 10px 20px 10px 20px;
                    display: flex;
                    flex-wrap: wrap;
                    border-radius: 15px;

                    h2 {
                        font-size: 48px;
                        font-weight: 600;
                        width: 100%;
                        text-align: center;
                    }
                }                
            }


            .addReview {
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;

                form {
                    width: 55%;
                    margin: 2.5% 22.5% 2.5% 22.5%;
                    background-color: rgba(255, 255, 255, 0.4);
                    padding: 10px 20px 10px 20px;
                    display: flex;
                    flex-wrap: wrap;
                    border-radius: 15px;

                .reviewWrap {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    text-align: center;
                .reviewInput {   
                    width: 100%;              
                }

                .reviewRating {
                    width: 100%;
                }
                .reviewSubmit {
                    margin: 15px 36% 0 36.5%;
                    color: #000;
                    background-color: white;
                    padding: 5px;
                    border-radius: 10px;
                    transition: 0.1s ease-in;
                    
                    &:hover {
                        background-color: #2b2b2b;
                        color: #fff
                    }
                }
                }

                h2 {
                    font-size: 48px;
                    font-weight: 600;
                    width: 100%;
                    text-align: center;
                }
                .nameInput {
                    display: block;
                    margin: 0 auto 0 auto;
                    padding: 0 0 0 1%;
                                
                    .firstNameInput {   
                        margin-bottom: 15px;
                    }
                    .lastNameInput {
                        margin-bottom: 30px;
                    }
                }

                input {
                    border-width: 2px;
                    border-color: #fff;
                    border-radius: 5px;
                }

                textarea {
                    border-width: 2px;
                    border-color: #fff;
                    border-radius: 5px;
                    margin-left: 5px;
                }
                
                select {
                    border-width: 2px;
                    border-color: #fff;
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
        .body {
            .failedWrap {
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;

                .failed {
                    width: 95%;
                    margin: 2.5% 2.5% 2.5% 2.5%;
                    background-color: rgba(255, 255, 255, 0.4);
                    padding: 10px 20px 10px 20px;
                    display: flex;
                    flex-wrap: wrap;
                    border-radius: 15px;

                    h2 {
                            font-size: 32px;
                            font-weight: 600;
                            width: 100%;
                            text-align: center;
                    }
                }                
            }
            .addReview {
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;

                    form {
                        width: 95%;
                        margin: 2.5% 2.5% 2.5% 2.5%;
                        background-color: rgba(255, 255, 255, 0.4);
                        padding: 10px 20px 10px 20px;
                        display: flex;
                        flex-wrap: wrap;
                        border-radius: 15px;

                            .reviewWrap {
                                width: 100%;
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: center;
                                text-align: center;
                                .reviewInput {   
                                    width: 100%;              
                                }

                                .reviewRating {
                                    width: 100%;
                                }
                                .reviewSubmit {
                                    margin: 15px 36% 0 36.5%;
                                    color: #000;
                                    background-color: white;
                                    padding: 5px;
                                    border-radius: 10px;
                                    transition: 0.1s ease-in;
                                    
                                    &:hover {
                                        background-color: #2b2b2b;
                                        color: #fff
                                    }
                                }
                            }

                            h2 {
                                font-size: 32px;
                                font-weight: 600;
                                width: 100%;
                                text-align: center;
                            }
                            .nameInput {
                                display: block;
                                margin: 0 auto 0 auto;
                                padding: 0 0 0 1%;
                                            
                                    .firstNameInput {   
                                        margin-bottom: 15px;
                                    }
                                    .lastNameInput {
                                        margin-bottom: 30px;
                                    }
                            }



                            input {
                                border-width: 2px;
                                border-color: #fff;
                                border-radius: 5px;
                            }

                            textarea {
                                border-width: 2px;
                                border-color: #fff;
                                border-radius: 5px;
                                margin-left: 5px;
                            }
                            
                            select {
                                border-width: 2px;
                                border-color: #fff;
                            }
                        }
                    }
            .reviewBody {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                .review {
                    background-color: rgba(0, 0, 0, 0.7);
                    width: 95%;
                    margin: 2.5%;
                    padding: 20px;
                    color: rgb(48, 48, 48);
                    border-radius: 15px;
                    height: auto;
                    color: white;

                    h2 {
                        font-size: 32px;
                        border-bottom: 2px solid;
                        border-color: rgb(48, 48, 48);
                        margin: 10px;
                        font-weight: 600;
                    }

                    .content {
                        margin: 10px;
                        font-size: 22px;
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
    
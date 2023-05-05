    <template>
        <div class="desktop" v-if="!mobile">
            <div class="header">
                <div class="headerWrap">    
                    <h1>Reviews</h1>
                </div>
            </div>
            <div class="body">
                <div class="failedWrap" v-if="!databaseActive">
                    <div class="failed">
                        <h2>Error. Failed to load</h2>
                    </div>
                </div>
                <div class="addReview" v-if="databaseActive">
                    <form @submit.prevent="sendReview" v-if="!reviewSent">
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
                            placeholder="What did you like best about our stores?" 
                            v-model="reviewContent"
                            rows="4"
                            cols="41"
                            required
                            ></textarea>
                        </div>
                            
                        <div class="ratingInput">

                            <label for="rating" class="ratingLabel">Choose a Rating: </label>
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
                    <div class="confirmed" v-if="reviewSent">
                        <h2>Review Sent!</h2>
                    </div>
                </div>
                <div class="reviewBody" v-if="databaseActive">
                    <div class="review" v-bind:key="i" v-for="review,i in reviewsArr">
                        <h2 class="name">{{ review.firstName }} {{ review.lastName }}</h2>
                        <div class="content">
                            "{{ review.content }}"
                        </div>
                        <div class="rating"><i class="fa-solid fa-star" style="color: #e8d930;"></i> {{ review.rating }} / 5 </div>
                    </div>
                </div>
                <div class="reviewBody" v-if="!databaseActive">
                    <div class="review">
                        <h2 class="name">Sarah T.</h2>
                        <div class="content">
                            "I had the best Halloween ever thanks to this store! Their selection of costumes and decorations is unmatched, and the staff was incredibly helpful in helping me find the perfect outfit. I got so many compliments on my costume and can't wait to come back next year!"
                        </div>
                        <div class="rating"><i class="fa-solid fa-star" style="color: #e8d930;"></i>5</div>
                    </div>
                    <div class="review">
                        <h2 class="name">Mark L.</h2>
                        <div class="content">
                            "I'm not usually one for Halloween, but this store made it so easy to get into the spirit of things. The displays were amazing and really set the mood, and I found some great accessories to spice up my usual outfit. I might have to start celebrating Halloween more often!"
                        </div>
                        <div class="rating"><i class="fa-solid fa-star" style="color: #e8d930;"></i>4</div>
                    </div>

                    <div class="review">
                        <h2 class="name">Karen W.</h2>
                        <div class="content">
                            "This store is a lifesaver! My kid decided at the last minute that they wanted to be a specific character, and we couldn't find the costume anywhere else. But this store had it in stock and even helped us find some matching accessories. I'm so grateful!"
                        </div>
                        <div class="rating"><i class="fa-solid fa-star" style="color: #e8d930;"></i>4</div>
                    </div>

                    <div class="review">
                        <h2 class="name">Tyler K.</h2>
                        <div class="content">
                            "I'm a bit of a Halloween fanatic, and this store exceeded all my expectations. They had such a wide variety of costumes and props, and everything was high-quality and reasonably priced. I spent way too much money, but it was worth it!"
                        </div>
                        <div class="rating"><i class="fa-solid fa-star" style="color: #e8d930;"></i>5</div>
                    </div>

                    <div class="review">
                        <h2 class="name">Emily G.</h2>
                        <div class="content">
                            "I was a little nervous about going to a Halloween store during the pandemic, but this place really had their safety protocols in place. They limited the number of people in the store, had hand sanitizer everywhere, and everyone was wearing masks. I felt totally comfortable and had a great shopping experience.  I still got sick though."
                        </div>
                        <div class="rating"><i class="fa-solid fa-star" style="color: #e8d930;"></i>3</div>
                    </div>

                    <div class="review">
                        <h2 class="name">Maria S.</h2>
                        <div class="content">
                            "I love that this store has options for all ages and sizes. My daughter wanted to be a character from her favorite cartoon, and they had costumes in her size that were actually cute and not just a cheap-looking knockoff. I also found a great outfit for myself, and my husband was able to find something that fit him well too. We'll definitely be back next year!"
                        </div>
                        <div class="rating"><i class="fa-solid fa-star" style="color: #e8d930;"></i>5</div>
                    </div>

                </div>
            </div>
        </div>

        <div class="mobile" v-if="mobile">
            <div class="header">
                <div class="headerWrap">    
                    <h1>Reviews</h1>
                </div>
            </div>
            <div class="body">
                <div class="failed" v-if="!databaseActive">
                    Failed
                </div>
                <div class="addReview" v-if="databaseActive">
                    <form @submit.prevent="sendReview" v-if="!reviewSent">
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
                            placeholder="What did you like best about our stores?" 
                            v-model="reviewContent"
                            rows="4"
                            cols="26"
                            required
                            ></textarea>
                        </div>
        
                        <div class="ratingInput">
                                <label for="rating" class="ratingLabel">Choose a Rating: </label>
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
                    <div class="confirmed" v-if="reviewSent">
                        <h2>Review Sent!</h2>
                    </div>
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
            </div>    
        </div>

    </template>

    <script>
        import { collection, getDocs, addDoc } from "firebase/firestore"
        import { db } from '@/firebase'
        import { v4 as uuidv4 } from 'uuid'
        import { ref } from "vue"

        export default {
            data() {
                return {
                    mobile: null,
                    reviewsArr: [
                    ],
                    databaseActive: true,
                }
            },
            async mounted() {
            try {
                const querySnapshot = await getDocs(collection(db, 'confirmedReviews'));
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
    <script setup>


        const reviewFirstName = ref('')
        const reviewLastName = ref('')
        const reviewContent = ref('')
        const reviewRating = ref('')
        let reviewSent = false;

        const sendReview = () => {
            addDoc(collection(db, "reviews"), {
                    firstName: reviewFirstName.value,
                    lastName: reviewLastName.value,
                    content: reviewContent.value,
                    rating: reviewRating.value,
                });
                reviewSent = true
                reviewFirstName.value = ''
                reviewLastName.value = ''
                reviewContent.value = ''
                reviewRating.value = ''
            }
    </script>
    
    <style lang="scss" scoped>

    .desktop {  
    
        .header {
            width: 100%;
            height: 750px;
            background-image: url('@/assets/ReviewImg.jpg');
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
            .failedWrap {
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;
                background-color: rgba(0,0,0,0.4);


                .failed {
                    width: 55%;
                    margin: 2.5% 22.5% 2.5% 22.5%;
                    background-color: rgba(0, 0, 0, 0.6);
                    padding: 10px 20px 10px 20px;
                    display: flex;
                    flex-wrap: wrap;
                    border-radius: 15px;

                    h2 {
                        font-size: 48px;
                        font-weight: 500;
                        width: 100%;
                        text-align: center;
                        color: #fff;
                    }
                }                
            }


            .addReview {
                background-color: rgba(0,0,0,0.4);
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;

                .confirmed {
                    width: 65%;
                    margin: 2.5% 17.5% 2.5% 17.5%;
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
                        color: #fff;
                    }
                }

                form {
                    width: 55%;
                    margin: 2.5% 22.5% 2.5% 22.5%;
                    background-color: rgba(0, 0, 0, 0.4);
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
                        background-color: #9c5600;
                        color: #fff;
                    }
                }
                }

                h2 {
                    font-size: 48px;
                    font-weight: 600;
                    width: 100%;
                    text-align: center;
                    color: #c5c5c5;
                    border-bottom: 2px solid;
                    border-color: #9c5600;
                    margin: 0 0 10px 0;
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
                    margin-left: 10px;
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
                background-color: rgba(0,0,0,0.4);
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
        .header {
            width: 100%;
            height: 500px;
            background-image: url('@/assets/ReviewImg.jpg');
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
            .failedWrap {
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;

                .failed {
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
                    }
                }                
            }
            .addReview {
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;

                .confirmed {
                    width: 65%;
                    margin: 2.5% 17.5% 2.5% 17.5%;
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
                        color: #fff;
                    }
                }

                    form {
                        width: 95%;
                        margin: 2.5% 2.5% 2.5% 2.5%;
                        background-color: rgba(0, 0, 0, 0.4);
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
                                    
                                    &:active {
                                        background-color: #9c5600;
                                        color: #fff
                                    }
                                }
                            }

                            h2 {
                                font-size: 32px;
                                font-weight: 600;
                                width: 100%;
                                text-align: center;
                                color: #c5c5c5;
                                border-bottom: 2px solid;
                                border-color: #9c5600;
                                margin: 0 0 10px 0;
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
                        font-size: 28px;
                        border-bottom: 2px solid;
                        border-color: rgb(48, 48, 48);
                        margin: 10px;
                        font-weight: 600;
                    }

                    .content {
                        margin: 10px;
                        font-size: 18px;
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
    
    .body {
        width: 100%;
        height: auto;
        background-image: url('../assets/hero-bg.png');
    }
    
    .ratingLabel {
        color: #c5c5c5;
    }
    </style>
    
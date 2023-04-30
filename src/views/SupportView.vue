<template>
    <div class="header"></div>
        <div class="desktop" v-if="!mobile">
            <div class="body">
            <div class="supportText">

            </div>
            <div class="supportWrap">
                <form @submit.prevent="sendIssue" v-if="!issueSent">
                    <h2>Contact Support</h2>
                    <div class="infoWrap">
                        <div class="name">                        
                            <input 
                            type="text"
                            placeholder="Full Name" 
                            v-model="supportName"
                            size="39"
                            required
                            >
                        </div>
                        <div class="email">
                            <input 
                            type="email"
                            placeholder="Email (ex. YourName@email.com)" 
                            v-model="supportEmail"
                            size="39"
                            required
                            >
                        </div>
                    </div>

                    <div class="wrap">
                        <div class="issue">                        
                            <textarea
                            placeholder="Write your issue here" 
                            v-model="supportIssue"
                            rows="4"
                            cols="41"
                            required
                            ></textarea>
                        </div>
                        <div class="submit">
                            <button class="reviewSubmit">Submit Issue</button>
                        </div>
                    </div>
                </form>
                <div class="confirmed" v-if="issueSent">
                    Hello
                </div>
            </div>    
        </div>
    </div>

    <div class="mobile" v-if="mobile">

    </div>
</template>

<script setup>
    import { collection, getDocs, addDoc } from "firebase/firestore"
    import { db } from '@/firebase'
    import { ref } from "vue"

        const supportName = ref('')
        const supportEmail = ref('')
        const supportIssue = ref('')
        let issueSent = false;

        const sendIssue = () => {
            addDoc(collection(db, "support"), {
                name: supportName.value,
                email: supportEmail.value,
                issue: supportIssue.value,
            });
            supportName.value = ''
            supportEmail.value = ''
            supportIssue.value = ''
            issueSent = true
        }
</script>

<script>
export default {
    data() {
        return {
            mobile: null,
            supportArr: [],
        }
    },
    async mounted() {
    try {
        const querySnapshot = await getDocs(collection(db, 'support'));
        let arrSupport = []
            querySnapshot.forEach((doc) => {
            arrSupport.push(doc.data())
        });
        this.supportArr = arrSupport;
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
        issueTrue() {

            }
        }
    }
</script>
    
<style lang="scss" scoped>

    .desktop {
        .body {
            .supportWrap {
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

                    .wrap {
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        text-align: center;

                        .issue {
                            width: 100%;
                        }

                        .submit {
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
                    
                    .infoWrap {
                        display: block;
                        margin: 0 auto 0 auto;
                        padding: 0 0 0 1%;

                        .name {
                            margin-bottom: 15px;
                        }

                        .email {
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
    
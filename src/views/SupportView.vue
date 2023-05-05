<template>
    <div class="desktop" v-if="!mobile">
        <div class="header">
            <div class="headerWrap">    
                <h1>Contact Us</h1>
            </div>
        </div>
        <div class="body">
            <div class="supportTextWrap">
                <div class="supportText">
                    <h2>About our Customer Support</h2>
                        If you have any issues with any of our products please contact us via the Email and Phone Number below<br/><br/>
                        <h3>Main Contact Info</h3>
                        <a href="tel:403.555.0635">+1 403-555-0635</a><br/>
                        <a href="mailto: info@SpookyPopUps.com">info@SpookyPopUps.com</a>                         
                        <h3>Accounting Contact Info</h3>
                        <a href="tel:403.556.0635">+1 403-556-0635</a><br/>
                        <a href="mailto: accounting@SpookyPopUps.com">accounting@SpookyPopUps.com</a>
                </div>
            </div>

            <div class="failedWrap" v-if="!databaseActive">
                    <div class="failed">
                        <h2>Failed</h2>
                    </div>
                </div>

            <div class="supportWrap" v-if="databaseActive">
                <form @submit.prevent="sendIssue" v-if="!issueSent">
                    <h2>Interested in owning your store for a season?</h2>
                    <h3>Submit the following information and someone will get back to you soon!</h3>
                    <div class="infoWrap">
                        <div class="firstName">                        
                            <input
                            type="text"
                            placeholder="First Name" 
                            v-model="franchiseFirstName"
                            size="39"
                            required
                            >
                            
                        </div>
                        <div class="lastName">
                            <input 
                            type="text"
                            placeholder="Last Name" 
                            v-model="franchiseLastName"
                            size="39"
                            required
                            >
                        </div>
                        <div class="email">
                            <input 
                            type="email"
                            placeholder="Email (ex. YourName@email.com)" 
                            v-model="franchiseEmail"
                            size="39"
                            required
                            >
                        </div>
                    </div>

                    <div class="wrap">
                        <div class="tempDropdown">
                            <label for="rating">How did you find us: </label>
                            <select   
                                name="howDidYouFindUs"
                                v-model="franchiseHowFind"
                                label="HowDidYouFindUs"
                                required
                                >
                                    <option value="Radio">Radio</option>
                                    <option value="TV">Television</option>
                                    <option value="Word of Mouth">Word of Mouth</option>
                                    <option value="Voice in Head">A voice in my head</option>
                                </select>    
                        </div>
                        <div class="issue">                        
                            <textarea
                            placeholder="Whats your reason for wanting a franchise?" 
                            v-model="franchiseReason"
                            rows="4"
                            cols="41"
                            required
                            ></textarea>
                        </div>
                        <div class="submit">
                            <button class="reviewSubmit">Submit Ticket</button>
                        </div>
                    </div>
                </form>
                <div class="confirmed" v-if="issueSent">
                    <h2>Request Sent!</h2>
                </div>
            </div>   
            <div class="locationsWrap">
                <div class="locations">
                    <h2>Our Locations</h2>

                        <div class="locationSort">
                            <label for="locationSort">Sort by City: </label>
                            <select   
                            name="locationSort"
                            label="City"
                            v-model="location"
                            required
                                >
                                <option value="all">All</option>
                                <option value="calgary">Calgary</option>
                                <option value="edmonton">Edmonton</option>
                                <option value="bc">British Columbia</option>
                            </select>

                            <button @click="locationSort()">Sort</button>
                        </div>

                        <div class="info" v-if="edmonton">
                            <p>
                                Street: 10200 102 Ave NW<br/>
                                City: Edmonton<br/>
                                Region: Alberta<br/>
                                Postcode: T5J 4B7<br/>
                                Country: Canada<br/>
                                Open Daily: 9:00am - 6:00pm<br/>
                            </p>
                        </div>
                        <div class="map" v-if="edmonton">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.8062235524003!2d-113.49836318415417!3d53.54337408002073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02248bb6c93f7%3A0xf16bcb0b052b8e1!2s10200%20102%20Ave%20NW%2C%20Edmonton%2C%20AB%20T5J%200V1!5e0!3m2!1sen!2sca!4v1683142404168!5m2!1sen!2sca" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>


                    <div class="info" v-if="edmonton">
                        <p>
                            Street: 10455 80th Ave NW<br/>
                            City: Edmonton<br/>
                            Region: Alberta<br/>
                            Postcode: T6E 1V1<br/>
                            Country: Canada<br/>
                            Open Daily: 9:00am - 9:00pm<br/>
                        </p>
                    </div>
                    <div class="map" v-if="edmonton">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.347527645889!2d-113.50166868415512!3d53.515849980014835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a022059c3963e3%3A0x88dc5b90ae740a44!2s10455%2080%20Ave%20NW%2C%20Edmonton%2C%20AB%20T6E%201V1!5e0!3m2!1sen!2sca!4v1683143172080!5m2!1sen!2sca" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div class="info" v-if="calgary">
                        <p>
                            Street: 618 5th Ave SW<br/>
                            City: Calgary<br/>
                            Region: Alberta<br/>
                            Postcode: T2P 0M6<br/>
                            Country: Canada<br/>
                            Open Daily: 9:00am - 8:00pm<br/>
                        </p>
                    </div>
                    <div class="map" v-if="calgary">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.229881877807!2d-114.0765772842468!3d51.048842979562345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe4cbf29a07%3A0xb8551655468979ae!2sGrid%205%20Apartments%20-%20Lot%20%23425!5e0!3m2!1sen!2sca!4v1683143329055!5m2!1sen!2sca" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div class="info" v-if="calgary">
                        <p>
                            Street: 1632 14 Ave NW<br/>
                            City: Calgary<br/>
                            Region: Alberta<br/>
                            Postcode: T2N 1M7<br/>
                            Country: Canada<br/>
                            Open Daily: 9:00am - 8:00pm<br/>
                        </p>
                    </div>
                    <div class="map" v-if="calgary">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.4746267620662!2d-113.37893320589207!3d53.44210139618304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01a2ab0dc9511%3A0x99d7742582f205a2!2s1632%2014%20Ave%20NW%2C%20Edmonton%2C%20AB%20T6T%200R7!5e0!3m2!1sen!2sca!4v1683143482941!5m2!1sen!2sca" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div class="info" v-if="calgary">
                        <p>
                            Street: 728 Northmount Dr<br/>
                            City: Calgary<br/>
                            Region: Alberta<br/>
                            Postcode: T2K 3K2<br/>
                            Country: Canada<br/>
                            Open Daily: 9:00am - 9:00pm<br/>
                        </p>
                    </div>
                    <div class="map" v-if="calgary">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.422789459681!2d-114.09476828424563!3d51.08220447956759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f7f61acc731%3A0x20f60c25b33f069!2s728%20Northmount%20Dr%20NW%2C%20Calgary%2C%20AB%20T2K%203K2!5e0!3m2!1sen!2sca!4v1683143642575!5m2!1sen!2sca"
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div class="info" v-if="bc">
                        <p>
                            Street: 668 Seymour St<br/>
                            City: Vancouver<br/>
                            Region: British Columbia<br/>
                            Postcode: V6B 3K4<br/>
                            Country: Canada<br/>
                            Open Daily: 9:00am - 9:30pm<br/>
                        </p>
                    </div>
                    <div class="map" v-if="bc">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.691913610532!2d-123.11884082309497!3d49.282234770785365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f25b5a553%3A0xf57c44d3c2f285f3!2s668%20Seymour%20St%2C%20Vancouver%2C%20BC%20V6B%203K3!5e0!3m2!1sen!2sca!4v1683143739836!5m2!1sen!2sca"  
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>                
            </div>
            
        </div>
    </div>

    <div class="mobile" v-if="mobile">
        <div class="header">
            <div class="headerWrap">    
                <h1>Contact Us</h1>
            </div>
        </div>
        <div class="body">
            <div class="supportTextWrap">
                <div class="supportText">
                    <h2>About our Customer Support</h2>
                        If you have any issues with any of our products please contact us via the Main Email and Phone Number below<br/><br/>
                        For any issues with payment or franchising, please contact the account Email and Phone Number below<br/><br/>
                        <h3>Main Contact Info</h3>
                        <br/>
                        <a href="tel:403.555.0635">+1 403-555-0635</a><br/><br/>
                        <a href="mailto: info@SpookyPopUps.com">info@SpookyPopUps.com</a><br/>
                        <h3>Accounting Contact Info</h3>
                        <br/>
                        <a href="tel:403.556.0635">+1 403-556-0635</a><br/><br/>
                        <a href="mailto: accounting@SpookyPopUps.com">accounting@SpookyPopUps.com</a>
                </div>
            </div>      
                <div class="failedWrap" v-if="!databaseActive">
                    <div class="failed">
                        <h2>Failed</h2>
                    </div>
                </div>

            <div class="supportWrap" v-if="databaseActive">
                <form @submit.prevent="sendIssue" v-if="!issueSent">
                    <h2>Interested in owning your store for a season?</h2>
                    <h3>Submit the following information and someone will get back to you soon!</h3>
                    <div class="infoWrap">
                        <div class="firstName">                        
                            <input
                            type="text"
                            placeholder="First Name" 
                            v-model="franchiseFirstName"
                            size="22"
                            required
                            >
                            
                        </div>
                        <div class="lastName">
                            <input 
                            type="text"
                            placeholder="Last Name" 
                            v-model="franchiseLastName"
                            size="22"
                            required
                            >
                        </div>
                        <div class="email">
                            <input 
                            type="email"
                            placeholder="Email (ex. YourName@email.com)" 
                            v-model="franchiseEmail"
                            size="22"
                            required
                            >
                        </div>
                    </div>

                    <div class="wrap">
                        <div class="tempDropdown">
                            <label for="rating">How did you find us: </label>
                            <select   
                                name="howDidYouFindUs"
                                v-model="reviewRating"
                                label="HowDidYouFindUs"
                                required
                                >
                                    <option value="Radio">Radio</option>
                                    <option value="TV">Television</option>
                                    <option value="Word of Mouth">Word of Mouth</option>
                                    <option value="Voice in Head">A voice in my head</option>
                                </select>    
                        </div>
                        <div class="reason">                        
                            <textarea
                            placeholder="Whats your reason for wanting a franchise?" 
                            v-model="franchiseReason"
                            rows="4"
                            cols="23"
                            required
                            ></textarea>
                        </div>
                        <div class="submit">
                            <button class="franchiseSubmit">Submit</button>
                        </div>
                    </div>
                </form>
                <div class="confirmed" v-if="issueSent">
                    <h2>Request Sent!</h2>
                </div>
            </div>    

            <div class="locationsWrap">
                <div class="locations">
                    <h2>Our Locations</h2>

                        <div class="locationSort">
                            <label for="locationSort">Sort by City: </label>
                            <select   
                            name="locationSort"
                            label="City"
                            v-model="location"
                            required
                                >
                                <option value="all">All</option>
                                <option value="calgary">Calgary</option>
                                <option value="edmonton">Edmonton</option>
                                <option value="bc">British Columbia</option>
                            </select>

                            <button @click="locationSort()">Sort</button>
                        </div>

                        <div class="info" v-if="edmonton">
                            <p>
                                Street: 10200 102 Ave NW<br/>
                                City: Edmonton<br/>
                                Region: Alberta<br/>
                                Postcode: T5J 4B7<br/>
                                Country: Canada<br/>
                                Open Daily: 9:00am - 6:00pm<br/>
                            </p>
                        </div>
                        <div class="map" v-if="edmonton">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.8062235524003!2d-113.49836318415417!3d53.54337408002073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02248bb6c93f7%3A0xf16bcb0b052b8e1!2s10200%20102%20Ave%20NW%2C%20Edmonton%2C%20AB%20T5J%200V1!5e0!3m2!1sen!2sca!4v1683142404168!5m2!1sen!2sca" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>


                    <div class="info" v-if="edmonton">
                        <p>
                            Street: 10455 80th Ave NW<br/>
                            City: Edmonton<br/>
                            Region: Alberta<br/>
                            Postcode: T6E 1V1<br/>
                            Country: Canada<br/>
                            Open Daily: 9:00am - 9:00pm<br/>
                        </p>
                    </div>
                    <div class="map" v-if="edmonton">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.347527645889!2d-113.50166868415512!3d53.515849980014835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a022059c3963e3%3A0x88dc5b90ae740a44!2s10455%2080%20Ave%20NW%2C%20Edmonton%2C%20AB%20T6E%201V1!5e0!3m2!1sen!2sca!4v1683143172080!5m2!1sen!2sca" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div class="info" v-if="calgary">
                        <p>
                            Street: 618 5th Ave SW<br/>
                            City: Calgary<br/>
                            Region: Alberta<br/>
                            Postcode: T2P 0M6<br/>
                            Country: Canada<br/>
                            Open Daily: 9:00am - 8:00pm<br/>
                        </p>
                    </div>
                    <div class="map" v-if="calgary">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.229881877807!2d-114.0765772842468!3d51.048842979562345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe4cbf29a07%3A0xb8551655468979ae!2sGrid%205%20Apartments%20-%20Lot%20%23425!5e0!3m2!1sen!2sca!4v1683143329055!5m2!1sen!2sca" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div class="info" v-if="calgary">
                        <p>
                            Street: 1632 14 Ave NW<br/>
                            City: Calgary<br/>
                            Region: Alberta<br/>
                            Postcode: T2N 1M7<br/>
                            Country: Canada<br/>
                            Open Daily: 9:00am - 8:00pm<br/>
                        </p>
                    </div>
                    <div class="map" v-if="calgary">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.4746267620662!2d-113.37893320589207!3d53.44210139618304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01a2ab0dc9511%3A0x99d7742582f205a2!2s1632%2014%20Ave%20NW%2C%20Edmonton%2C%20AB%20T6T%200R7!5e0!3m2!1sen!2sca!4v1683143482941!5m2!1sen!2sca" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div class="info" v-if="calgary">
                        <p>
                            Street: 728 Northmount Dr<br/>
                            City: Calgary<br/>
                            Region: Alberta<br/>
                            Postcode: T2K 3K2<br/>
                            Country: Canada<br/>
                            Open Daily: 9:00am - 9:00pm<br/>
                        </p>
                    </div>
                    <div class="map" v-if="calgary">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.422789459681!2d-114.09476828424563!3d51.08220447956759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f7f61acc731%3A0x20f60c25b33f069!2s728%20Northmount%20Dr%20NW%2C%20Calgary%2C%20AB%20T2K%203K2!5e0!3m2!1sen!2sca!4v1683143642575!5m2!1sen!2sca"
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div class="info" v-if="bc">
                        <p>
                            Street: 668 Seymour St<br/>
                            City: Vancouver<br/>
                            Region: British Columbia<br/>
                            Postcode: V6B 3K4<br/>
                            Country: Canada<br/>
                            Open Daily: 9:00am - 9:30pm<br/>
                        </p>
                    </div>
                    <div class="map" v-if="bc">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.691913610532!2d-123.11884082309497!3d49.282234770785365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f25b5a553%3A0xf57c44d3c2f285f3!2s668%20Seymour%20St%2C%20Vancouver%2C%20BC%20V6B%203K3!5e0!3m2!1sen!2sca!4v1683143739836!5m2!1sen!2sca"  
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>

<script setup>
    import { collection, getDocs, addDoc } from "firebase/firestore"
    import { db } from '@/firebase'
    import { ref } from "vue"

        const franchiseFirstName = ref('')
        const franchiseLastName = ref('')
        const franchiseEmail = ref('')
        const franchiseHowFind = ref('')
        const franchiseReason = ref('')
        let issueSent = false;

        const sendIssue = () => {
            addDoc(collection(db, "franchise"), {
                firstName: franchiseFirstName.value,
                lastName: franchiseLastName.value,
                email: franchiseEmail.value,
                howFind: franchiseHowFind.value,
                reason: franchiseReason.value,
            });

            franchiseFirstName.value = ''
            franchiseLastName.value = ''
            franchiseEmail.value = ''
            franchiseHowFind.value = ''
            franchiseReason.value = ''
            issueSent = true
        }
</script>

<script>
export default {
    data() {
        return {
            mobile: null,
            supportArr: [],
            databaseActive: true,
            edmonton: true,
            calgary: true,
            bc: true,
            location: 'all',
        }
    },
    async mounted() {
    try {
        const querySnapshot = await getDocs(collection(db, 'franchise'));
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
            locationSort() {
                if(this.location == "bc"){
                    this.bc = true
                    this.calgary = false
                    this.edmonton = false
                    return;
                } else if(this.location == "calgary") {
                    this.calgary = true
                    this.bc = false
                    this.edmonton = false
                    return;
                } else if (this.location == "edmonton") {
                    this.edmonton = true
                    this.bc = false
                    this.calgary = false
                    return;
                } else if(this.location == "all"){
                this.edmonton = true
                this.calgary = true
                this.bc = true
                return;
                }
            }
        }
    }
</script>
    
<style lang="scss" scoped>

    .desktop {
        .header {
            width: 100%;
            height: 750px;
            background-image: url('@/assets/contactImg.jpg');
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
            .locationsWrap {
                background-color: rgba(0,0,0,0.4);
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;   
                
                .locations {
                    width: 90%;
                    margin: 2.5% 5% 2.5% 5%;
                    background-color: rgba(0, 0, 0, 0.4);
                    padding: 10px 20px 10px 20px;
                    display: flex;
                    flex-wrap: wrap;
                    border-radius: 15px;

                    .locationSort {
                        width: 100%;
                        margin: 0 36% 0 39%;

                        label {
                            color: #c5c5c5;
                            font-size: 24px;
                        }

                        button {
                            margin-top: 10px;
                            margin-left: 10px;
                            background-color: #c5c5c5;
                            border-radius: 15px;
                            padding: 10px 20px 10px 20px;
                        }
                    }

                    h2 {
                        width: 100%;
                        text-align: center;
                        color: #c5c5c5;
                        border-bottom: 2px solid;
                        border-color: #9c5600;
                        font-size: 42px;
                    }

                        .info {
                            width: 50%;
                            border-bottom: 2px solid;
                            border-color: #9c5600;
                            p {
                                font-size: 26px;
                                margin: 0 auto 20px auto;
                                color: #c5c5c5; 
                            }
                        }
                        
                        .map {
                            width: 50%;
                            border-bottom: 2px solid;
                            border-color: #9c5600;

                            iframe {
                                padding: 10px;
                                width: 75%;
                                height: 100%;
                                margin-left: 25%;
                            }
                        }
                    }
                }
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
            .supportTextWrap {
                background-color: rgba(0,0,0,0.4);
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;
                .supportText {
                    width: 95%;
                    height: auto;
                    margin: 2.5% 2.5% 2.5% 2.5%;
                    background-color: rgba(0, 0, 0, 0.4);
                    padding: 10px 20px 10px 20px;
                    border-radius: 15px;
                    font-size: 26px;
                    color: #c5c5c5;
                    text-align: center;

                    h2 {
                        font-size: 48px;
                        font-weight: 600;
                        width: 100%;
                        text-align: center;
                        color: #c5c5c5;
                        border-bottom: 2px solid;
                        border-color: #9c5600;
                    }

                        h3 { 
                            font-size: 38px;
                            margin: 20px 25% 0 25%;
                            border-bottom: 2px solid;
                            border-color: #9c5600;

                        }

                        a {
                            transition: 0.2s ease-in;
                            border-bottom: 2px solid transparent;
                            color: #949494;
                        }


                        a:hover {
                            color: #9c5600;
                            border-color: #9c5600;
                        }  
                }
            }
            .supportWrap {
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
                    width: 95%;
                    margin: 2.5% 2.5% 2.5% 2.5%;
                    background-color: rgba(0, 0, 0, 0.4);
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

                        .tempDropdown {
                            label {
                                color: white;
                            }
                        }

                        .issue {
                            margin-top: 20px;
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
                        font-size: 38px;
                        font-weight: 600;
                        width: 100%;
                        text-align: center;
                        color: #fff;
                        border-bottom: 2px solid;
                        border-color: #9c5600;
                    }

                    h3 {
                        font-size: 24px;
                        font-weight: 500;
                        width: 100%;
                        text-align: center;
                        color: #fff; 
                        margin-bottom: 15px;
                    }
                    
                    .infoWrap {
                        display: block;
                        margin: 0 auto 0 auto;
                        padding: 0 0 0 1%;

                        .firstName {
                            margin-bottom: 15px;
                        }

                        .lastName {
                            margin-bottom: 15px;
                        }

                        .email {
                            margin-bottom: 30px;
                        }
                    }

                    input {
                    border-width: 2px;
                    border-color: #c5c5c5;
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
        .header {
            width: 100%;
            height: 500px;
            background-image: url('@/assets/contactImg.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
    
            .headerWrap {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 250px 0 250px 0;

                h1 {
                    font-size: 38px;
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

            .locationsWrap {
                background-color: rgba(0,0,0,0.4);
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;   
                
                .locations {
                    width: 100%;
                    margin: 2.5% 2.5% 2.5% 2.5%;
                    background-color: rgba(0, 0, 0, 0.4);
                    display: flex;
                    flex-wrap: wrap;
                    border-radius: 15px;

                    .locationSort {
                        width: 100%;

                        label {
                            color: #c5c5c5;
                            font-size: 24px;
                        }

                        button {
                            margin-top: 10px;
                            background-color: #c5c5c5;
                            border-radius: 15px;
                            padding: 5px 15px 5px 15px;
                            margin-left: 20px;
                        }
                    }

                    h2 {
                        width: 100%;
                        text-align: center;
                        color: #c5c5c5;
                        border-bottom: 2px solid;
                        border-color: #9c5600;
                        font-size: 42px;
                    }

                        .info {
                            width: 50%;
                            border-bottom: 2px solid;
                            border-color: #9c5600;
                            p {
                                font-size: 14px;
                                padding: 20% 0 20% 10px;
                                color: #c5c5c5; 
                            }
                        }
                        
                        .map {
                            width: 50%;
                            border-bottom: 2px solid;
                            border-color: #9c5600;

                            iframe {
                                padding: 10px;
                                width: 100%;
                                height: 70%;
                                margin: 15% 0 15% 0;
                            }
                        }
                    }
                }
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
            .supportTextWrap {
                background-color: rgba(0,0,0,0.4);
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;
                .supportText {
                    width: 100%;
                    height: auto;
                    margin: 2.5% 2.5% 2.5% 2.5%;
                    background-color: rgba(0, 0, 0, 0.4);
                    border-radius: 15px;
                    font-size: 16px;
                    color: #c5c5c5;
                    text-align: center;
                    padding: 10px 0 10px 0;

                    h2 {
                        font-size: 32px;
                        font-weight: 600;
                        width: 100%;
                        text-align: center;
                        color: #c5c5c5;
                        border-bottom: 2px solid;
                        border-color: #9c5600;
                    }

                        h3 { 
                            font-size: 22px;
                            margin: 20px 25% 0 25%;
                            border-bottom: 2px solid;
                            border-color: #9c5600;

                        }

                        a {
                            transition: 0.2s ease-in;
                            border-bottom: 2px solid transparent;
                            color: #949494;
                        }


                        a:hover {
                            color: #9c5600;
                            border-color: #9c5600;
                        }  
                }
            }
            .supportWrap {
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;
                background-color: rgba(0,0,0,0.4);

                .confirmed {
                    width: 95%;
                    margin: 2.5% 2.5% 5% 2.5%;
                    background-color: rgba(0, 0, 0, 0.4);
                    padding: 10px 20px 10px 20px;
                    display: flex;
                    flex-wrap: wrap;
                    border-radius: 15px;

                    h2 {
                        font-size: 36px;
                        width: 100%;
                        text-align: center;
                        color: #c5c5c5;
                        font-weight: 500;
                        border-bottom: 2px solid;
                        border-color: #c5c5c5;
                        margin: 0 3% 20px 1%;
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

                    h2 {
                        font-size: 36px;
                        font-weight: 600;
                        width: 100%;
                        text-align: center;
                        color: #fff;
                        border-bottom: 2px solid;
                        border-color: #9c5600;
                    }

                    h3 {
                        font-size: 20px;
                        font-weight: 500;
                        width: 100%;
                        text-align: center;
                        color: #fff; 
                        margin-bottom: 15px;
                    }

                    .wrap {
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        text-align: center;

                        .tempDropdown {
                            label {
                                color: white;
                            }
                        }

                        .reason {
                            width: 100%;
                            padding-top: 20px;
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
                        font-size: 36px;
                        width: 100%;
                        text-align: center;
                        color: #c5c5c5;
                        font-weight: 500;
                        margin: 0 3% 20px 1%;
                        border-bottom: 2px solid;
                        border-color: #9c5600;
                    }
                    
                    .infoWrap {
                        display: block;
                        margin: 0 auto 0 auto;
                        padding: 0 0 0 1%;

                        .firstName {
                            margin-bottom: 15px;
                        }

                        .lastName {
                            margin-bottom: 15px;
                        }

                        .email {
                            margin-bottom: 30px;
                        }
                    }

                    input {
                    border-width: 2px;
                    border-color: #c5c5c5;
                    border-radius: 5px;
                    }

                    textarea {
                    border-width: 2px;
                    border-color: #c5c5c5;
                    border-radius: 5px;
                    margin-left: 5px;
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
</style>
    
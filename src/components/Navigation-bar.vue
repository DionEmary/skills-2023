<template>
    <header :class="{ 'scrolled-nav' : scrolledNav }">
        <nav>
            <div class="branding">
                <img src="@/assets/logo.png" alt="Company Logo">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><RouterLink class="link" :to="{ name: 'home' }">Home</RouterLink></li>
                <li><RouterLink class="link" :to="{ name: 'about' }">About Us</RouterLink></li>
                <li><RouterLink class="link" :to="{ name: 'products' }">Products</RouterLink></li>                
                <li><RouterLink class="link" :to="{ name: 'support' }">Find/Contact Us</RouterLink></li>
                <li><RouterLink class="link" :to="{ name: 'review' }">Leave a Review</RouterLink></li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="fa-solid fa-bars" style="color: #ffffff;" :class="{ 'icon-active' : mobileNav }"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><RouterLink class="link" :to="{ name: 'home' }">Home</RouterLink></li>
                    <li><RouterLink class="link" :to="{ name: 'about' }">About Us</RouterLink></li>
                    <li><RouterLink class="link" :to="{ name: 'products' }">Products</RouterLink></li>
                    <li><RouterLink class="link" :to="{ name: 'support' }">Find/Contact Us</RouterLink></li>
                    <li><RouterLink class="link" :to="{ name: 'review' }">Leave a Review</RouterLink></li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
export default{
    name: "navigation_bar",
    data() {
        return {
            scrolledNav: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();

    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        },

        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        },

        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 850) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false; 
            return;
        }
    }
}
</script>

<style lang="scss" scoped>

header {
    background-color: rgba(20, 20, 20, 0.9);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: black;

    nav {
        display: flex;
        flex-direction: right;
        padding: 12px 0;
        transition: 0.5s ease all;
        width: 90%;
        margin: 0 auto;
        @media (min-width: 1140px) {
            max-width: 1140px;
        }

        ul,
        .link {
            font-weight: 500;
            color: #fff;
            list-style: none;
            text-decoration: none;
        }

        li {
            text-transform: uppercase;
            padding: 16px;
            margin-left: 16px;
        }

        .link {
            transition: 0.5s ease all;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;
            font-size: 18px;

            &:hover {
                color: #9c5600;
                border-color: #9c5600;
            }
        }

        .branding {
            display: flex;
            align-items: center;

            img {
                width: 80px;
                transition: 0.5s ease all;
            }
        }
        
        .navigation {
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }

        .icon {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            right: 24px;
            height: 100%;

            i {
                cursor: pointer;
                font-size: 24px;
                transition: 0.5s ease all;
            }
        }

        .icon-active {
            transform: rotate(180deg);
        }

        .dropdown-nav {
            display: flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            max-width: 200px;
            height: 100%;
            background-color: #fff;
            top: 0;
            left: 0;

            li {
                margin-left: 0;
                .link {
                    color: black;
                }
            }
        }
        
        .mobile-nav-enter-active,
        .mobile-nav-leave-active {
            transition: 0.5s ease all;
        }

        .mobile-nav-enter-from,
        .mobile-nav-leave-to {
            transform: translateX(-250px);
        }

        mobile-nav-enter-to {
            transform: translateX(0px);
        }
    }
}
    .scrolled-nav {
        background-color: rgb(2, 2, 2);
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.6);

        nav {
            padding: 8px 0;

            .branding {

                img {
                    width: 60px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.6);
                }
            }
        }
    }
</style>
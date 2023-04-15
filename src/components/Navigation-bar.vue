<template>
    <header :class="{ 'scrolled-nav' : scrollPosition }">
        <nav>
            <div class="branding">
                <img src="@/assets/logo.png" alt="Company Logo">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><RouterLink class="link" :to="{ name: 'home' }">Home</RouterLink></li>
                <li><RouterLink class="link" :to="{ name: 'about' }">About</RouterLink></li>
                <li><RouterLink class="link" :to="{ name: 'contact' }">Contact Us</RouterLink></li>
                <li><RouterLink class="link" :to="{ name: '' }"></RouterLink></li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="fa-solid fa-bars" :class="{ 'icon-active' : mobileNav }"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><RouterLink class="link" :to="{ name: 'home' }">Home</RouterLink></li>
                    <li><RouterLink class="link" :to="{ name: 'about' }">About</RouterLink></li>
                    <li><RouterLink class="link" :to="{ name: 'contact' }">Contact Us</RouterLink></li>
                    <li><RouterLink class="link" :to="{ name: '' }"></RouterLink></li>
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
            scrollPosition: null,
            mobile: true,
            mobileNav: true,
            windowWidth: null,
        }
    }
}
</script>

<style lang="scss" scoped>

header {
    background-color: rgba(0,0,0,0.8);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: white;

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
            font-size: 14px;
            transition: 0.5s ease all;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;

            &:hover {
                color: #00afea;
                border-color: #00afea;
            }
        }

        .branding {
            display: flex;
            align-items: center;

            img {
                width: 50px;
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
                transition: 0.8s ease all;
            }
        }

        .icon-active {
            transform: rotate(180deg);
        }
    }
}

</style>
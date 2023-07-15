<template>
    <Transition>
        <div id="overlay-menu2" class="bg-erieblack" v-show="open">

            <div>
                <div class="d-flex flex-row-reverse">
                    <div class="px-3 pt-2">
                        <img src="/src/assets/images/hamburger/_times.svg" id="hamburger-close" alt="hamburger" @click="toggle" />
                    </div>
                </div>
            </div>

            <div class="overlay-middle">
                <nav class="nav flex-column" id="fullscreen-menu">
                    <a ref="menuItems" class="nav-link stag-nav" href="/">Home</a>
                    <a ref="menuItems" class="nav-link stag-nav" href="/about">About</a>
                    <a ref="menuItems" class="nav-link stag-nav" href="/projekte">Projekte</a>
                    <a ref="menuItems" class="nav-link stag-nav" href="/artikel">Insights</a>
                    <a ref="menuItems" class="nav-link stag-nav" href="/kontakt">Kontakt</a>
                </nav>
            </div>
            <div id="overly-logo-bottom">
                <img src="/src/assets/images/logos/TW-EB5E28.svg" alt="logo overlay" data-aos="fade-top" data-aos-delay="200" />
            </div>
        </div>
    </Transition>
    <div class="px-0 pt-0">
        <img src="/src/assets/images/hamburger/_bars.svg" id="hamburger-bars" alt="hamburger" @click="toggle" />
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'
import gsap from "gsap";
const open = ref(false)
const props = defineProps(['hamburger'])
const menuItems = ref([]);

const toggle = () => {
    open.value = !open.value;

    if (open.value) {
        gsap.fromTo(".stag-nav", {
            opacity: 0,
            y: -15
        }, {
            opacity: 1,
            stagger: 0.3,
            duration: 1,
            y: 0
        });

    }
};


onMounted(() => {
    menuItems.value = document.querySelectorAll('.stag-nav');
});


</script>
<style scoped>
#overlay-menu2 {

    width: 100%;
    height: 100%;
    /* width: 100%; */
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    overflow-x: hidden;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from {
    opacity: 0;
    transform: translateY(-100%);
}

.v-enter-to,
.v-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.v-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}

.stag-nav {
    opacity: 0;
}
</style>

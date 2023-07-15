<template>
    <Transition>
        <div id="overlay-menu2" class="bg-orange" v-show="open">

            <div>
                <div class="d-flex flex-row-reverse">
                    <div class="px-3 pt-2">
                        <div @click="toggle">
                            <svg width="64" height="63" viewBox="0 0 64 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4438 15.5563L30.586 29.6985L33.4144 32.5269L47.5565 46.669" stroke="#252422" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M47.5562 15.5563L33.414 29.6985L30.5856 32.5269L16.4435 46.669" stroke="#252422" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
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
                <div data-aos="fade-top" data-aos-delay="200">
                    <svg width="72" height="42" viewBox="0 0 72 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.133606 21V42H36.0668H72V21V0H36.0668H0.133606V21ZM69.8627 21V39.8801H36.0668H2.2709V21V2.11987H36.0668H69.8627V21Z" fill="#252422" />

                        <path d="M10.0186 11.0631V12.7192H12.6902H15.3618V22.5236V32.3281H17.0983H18.8349V22.5236V12.7192H21.5065H24.1781V11.0631V9.40693H17.0983H10.0186V11.0631Z" fill="#252422" />

                        <path
                            d="M26.4757 10.1754C29.3076 15.1306 39.6201 32.7255 39.6869 32.7255C39.7403 32.7255 41.2631 30.1684 43.0932 27.0284L46.406 21.3445L46.6197 21.7022C46.7399 21.9009 48.2494 24.4713 49.9592 27.4259C51.6691 30.3804 53.1117 32.8448 53.1652 32.8978C53.2587 33.0038 62.0216 18.0852 62.0216 17.8069C62.0216 17.6744 60.1381 14.3091 60.0579 14.3091C60.0312 14.3091 58.495 16.9325 56.6383 20.1388L53.2453 25.9552L53.0316 25.5975C52.9114 25.3987 51.8293 23.5571 50.6405 21.5035L48.4765 17.7672L50.8809 13.6334C52.2167 11.3678 53.2987 9.48643 53.2987 9.45993C53.2987 9.43343 52.377 9.40693 51.2683 9.40693H49.2245L44.4824 17.5552C41.8776 22.0334 39.7136 25.7035 39.6735 25.7035C39.6334 25.7035 37.4828 22.0334 34.878 17.5552L30.1492 9.40693H28.0921H26.0349L26.4757 10.1754Z"
                            fill="#252422" />
                    </svg>
                </div>

            </div>
        </div>
    </Transition>
    <div class="px-0 pt-0">
        <div @click="toggle">
            <svg width="41" height="32" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L39 2" stroke="#EB5E28" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 16L39 16" stroke="#EB5E28" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 30L39 30" stroke="#EB5E28" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
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
.overlay-middle {
  height: 200px;
  width: 40%;
  margin: auto;
  top: 15%;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.3em;
}
#overly-logo-bottom {
  position: relative;
  top: 40%;
  margin: 0 auto;
  width: 70px;
}
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from {
    /* opacity: 0; */
    transform: translateY(-100%);
}

.v-enter-to,
.v-leave-from {
    /* opacity: 1; */
    transform: translateY(0);
}

.v-leave-to {
    /* opacity: 0; */
    transform: translateY(-100%);
}

.stag-nav {
    color: var(--erieblack);
    opacity: 0;
}
</style>

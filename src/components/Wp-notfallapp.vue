<template>
    <section class="w-75 mx-auto">
        <div v-if="actualPage == 0">
            <h2>Page 1</h2>
            <p>Texdfgdfgdfg</p>
            <button @click="setpage('forward')">Weiter</button>
        </div>
        <div v-if="actualPage == 1">
            <h2>Page 2</h2>
            <p>Texdfgdfgdfg</p>
            <button @click="setpage('backward')">Zurück</button>
            <button @click="setpage('forward')">Weiter</button>
        </div>
        <div v-if="actualPage == 2">
            <h2>Page 3</h2>
            <p>Texdfgdfgdfg</p>

            <button @click="setpage('backward')">Zurück</button>
            <button @click="setpage('forward')">Weiter</button>
        </div>
        <div v-if="actualPage == 3">
            <h2>Page 4</h2>
            <p>Texdfgdfgdfg</p>
            <button @click="setpage('backward')">Zurück</button>
        </div>
    </section>
</template>
<script setup>
import { ref, reactive } from 'vue';
const actualPage = ref(0);
const user_data = reactive({});

const setpage = (direction) => {
        if(direction === 'forward'){
            console.log(actualPage.value++);
        }
        else if (direction === 'backward') {
            console.log(actualPage.value--);
        }
        else{
           console.log('breaking up'); 
        }
}
</script>
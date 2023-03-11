<template>
      <div class="container w-75">
        <div class="row">
          <div class="col-md-4" v-for="(link, index) in activeLinks" :key="link.text">
            <a :href="link.link" class="text-erieblack">{{ link.text }}</a>
            <br>
            <!-- Render a new column after every 3 data sets -->
            <div v-if="index % 3 === 2"></div>
          </div>
        </div>
      </div>
</template>
<script setup>
const seo_linkfarm = [
    { text: 'Wordpress Programmierer Mainz', link: '/wordpress-programmierer-mainz/', active: true },
    { text: 'Technischer Support für Webagenturen', link: '/technischer-support-webagenturen/', active: true },
    { text: 'Webdesign Mainz Wiesbaden Frankfurt', link: '/webdesign-mainz-wiesbaden/', active: true },
    { text: 'Web Entwicklung Mainz Wiesbaden Frankfurt', link: '/webentwicklung-mainz-wiesbaden-frankfurt/', active: true },
    { text: 'Individuelle Wordpress-Plugins entwickeln lassen', link: '/wordpress-plugin-entwicklung/', active: true },
    { text: 'Wordpress Wartung', link: '/wordpress-wartung/', active: true },
]
const activeLinks = seo_linkfarm.filter(link => link.active)
</script>
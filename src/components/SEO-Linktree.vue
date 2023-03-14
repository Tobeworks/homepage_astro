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
    { text: 'Webentwicklung Freelancer', link: '/webentwicklung-freelancer-mainz/', active: true },

    { text: 'Wordpress Notfall', link: '/wordpress-notfallservice/', active: false },
    { text: 'SEO - Convesion Optimierung', link: '/conversion-optimiering-seo/', active: false },
    { text: 'SEO in Webentwicklung und Webdesign', link: '/seo-webentwicklung-webdesign/', active: false },
    { text: 'CMS mit Wordpress und App', link: '/cms-wordpress-app/', active: false },
    { text: 'Deine Inhalte auf anderne Seiten präsentieren', link: '/inhalte-auf-anderen-praesentieren/', active: false },
    { text: 'Headless CMS mit Wordpress', link: '/headless-cms-wordpress/', active: false },
    { text: 'Webauftritte für Steuer- und Rechtsberatung', link: '/webauftritte-steuerberatung/', active: false },
    { text: 'Webauftritte für Großhandel', link: '/webauftritte-grosshandel/', active: false },

]
const activeLinks = seo_linkfarm.filter(link => link.active)
</script>
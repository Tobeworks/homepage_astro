<template>
    <section class="container formular border border-orange p-3 p-sm-5 bg-orange " id="formular">

        <div class="row" v-if="!data_sent">

            <div class="col-md-8 offset-md-2">
                <transition name="fade-slide" mode="out-in">
                    <div v-if="actualPage == -1" class="page" key="page0">
                        <h2>Willkommen zur Wordpress Notfall App</h2>
                        <div class="p-2 p-sm-5">Herzlich willkommen zu unserer <strong>Wordpress Notfall App</strong>! Wir möchten dir schnell und effektiv helfen, daher bitten wir dich, alle Daten in den Formularen so genau wie möglich anzugeben. Natürlich ist die Nutzung der App komplett unverbindlich und kostenlos. Beachte, dass ein gültiger Vertrag erst nach perönlicher Absprache zustande kommt.
                            Das
                            Audit ist ebenfalls komplett kostenfrei. Erst wenn das Problem tatsächlich angegangen, kommt ein Vertrag zwischen uns zustande. <br>Vielen Dank und viel Erfolg!
                        </div>
                        <div class="my-2 buttons-group d-flex justify-content-center">
                            <button @click="setpage('forward')" class="btn btn-primary">Weiter</button>
                        </div>
                    </div>
                </transition>
                <transition name="fade-slide" mode="out-in">
                    <div v-if="actualPage == 0" class="page" key="page1">
                        <h2>Problembeschreibung</h2>
                        <div class="py-3">Schildere Dein Problem ausführlich. Was hast du bereits unternommen und in welchen Kontext tritt das Problem auf?</div>
                        <form>
                            <div class="mb-3">
                                <textarea v-model="user_data.problem" class="form-control"></textarea>
                            </div>
                        </form>
                        <div class="my-2 buttons-group d-flex justify-content-center">
                            <button @click="setpage('backward')" class="btn btn-secondary">Zurück</button>
                            <button @click="setpage('forward')" class="btn btn-primary">Weiter</button>
                        </div>
                    </div>
                </transition>
                <transition name="fade-slide" mode="out-in">
                    <div v-if="actualPage == 1" class="page" key="page2">
                        <h2>Dein Wordpress</h2>
                        <div class="py-3">Erzähle etwas zu deinem Wordpress, natürlich nur falls du es auch weißt und die Daten zur Hand hast</div>
                        <form>
                            <div class="mb-3">
                                <input placeholder="Wordpress Version" v-model="user_data.wordpress.version" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <input placeholder="PHP Version" v-model="user_data.wordpress.php" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <input placeholder="Theme" v-model="user_data.wordpress.theme" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <input placeholder="Plugins" v-model="user_data.wordpress.plugins" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <input placeholder="Sitebuilder" v-model="user_data.wordpress.sitebuilder" class="form-control" />
                            </div>
                        </form>
                        <div class="my-2 buttons-group d-flex justify-content-center ">
                            <button @click="setpage('backward')" class="btn btn-secondary">Zurück</button>
                            <button @click="setpage('forward')" class="btn btn-primary">Weiter</button>
                        </div>
                    </div>
                </transition>
                <transition name="fade-slide" mode="out-in">
                    <div v-if="actualPage == 2" class="page" key="page3">
                        <h2>Freiwillige Angaben zur Person</h2>
                        <div class="py-3">Die Angaben zur Person sind bis auf die Mailadresse freiwillig.</div>
                        <form>
                            <div class="mb-3">
                                <input placeholder="Name" v-model="user_data.user_name" type="text" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <input placeholder="E-Mail Adresse (ohne die geht aber leider nichts)" v-model="user_data.user_email" type="email" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <input placeholder="Telefon" v-model="user_data.user_phone" type="tel" class="form-control" />
                            </div>
                        </form>
                        <div class="my-2 buttons-group d-flex justify-content-center">
                            <button @click="setpage('backward')" class="btn btn-secondary">Zurück</button>
                            <button @click="setpage('forward')" class="btn btn-primary">Weiter</button>
                        </div>
                    </div>
                </transition>
                <transition name="fade-slide" mode="out-in">
                    <div v-if="actualPage == 3" class="page" key="page4">
                        <h2>Dringlichkeit</h2>
                        <div class="py-3">Wie dringend ist dein Problem?</div>
                        <div class="form-group">
                            <label for="alert-mode">Alert Mode</label>
                            <select class="form-control form-select" id="alert-mode" v-model="user_data.alertmode">
                                <option v-for="mode in alert_modes" :key="mode.mode" :value="mode.mode">{{ mode.text }}</option>
                            </select>
                        </div>
                        <div class="my-2 buttons-group d-flex justify-content-center">
                            <button @click="setpage('backward')" class="btn btn-secondary">Zurück</button>
                            <button @click="setpage('forward')" class="btn btn-primary">Weiter</button>
                        </div>
                    </div>
                </transition>
                <transition name="fade-slide" mode="out-in">
                    <div v-if="actualPage === 4" class="page" key="page5">
                        <h2>Zusammenfassung</h2>
                        <div class="py-3">Nachfolgend findest du eine Zusammenfassung deiner Daten. Bitte habe keine Sorge, wir behandeln deine Daten mit höchster Vertraulichkeit und übermitteln sie über eine sichere Verbindung.</div>
                        <div class="my-2">
                            <ul>
                                <li v-if="user_data.user_email && validateEmail(user_data.user_email)">Kontakt: {{ user_data.user_name }}, {{ user_data.user_email }}, {{ user_data.user_phone }}</li>
                                <li v-else class="text-danger">Deine E-Mailadresse fehlt noch. Ohne diese können wir dir leider nicht helfen</li>
                                <li v-if="user_data.problem">Problembeschreibung: {{ user_data.problem }}</li>
                                <li v-if="user_data.wordpress.version || user_data.wordpress.theme || user_data.wordpress.plugins || user_data.wordpress.sitebuilder || user_data.wordpress.php">
                                    Wordpress Daten:
                                    <ul>
                                        <li v-if="user_data.wordpress.version">Version: {{ user_data.wordpress.version }}</li>
                                        <li v-if="user_data.wordpress.theme">Theme: {{ user_data.wordpress.theme }}</li>
                                        <li v-if="user_data.wordpress.plugins">Plugins: {{ user_data.wordpress.plugins }}</li>
                                        <li v-if="user_data.wordpress.sitebuilder">Sitebuilder: {{ user_data.wordpress.sitebuilder }}</li>
                                        <li v-if="user_data.wordpress.php">PHP: {{ user_data.wordpress.php }}</li>
                                    </ul>
                                </li>

                                <li>Dringlichkeitsstufe:<br> <b>{{ selectedModeText }}</b>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <label for="additional-message" class="form-label">Zusätzliche Nachricht</label>
                            <textarea class="form-control" id="additional-message" rows="5" v-model="user_data.message"></textarea>
                        </div>
                        <div class="my-2 buttons-group d-flex justify-content-center">
                            <button type="button" class="btn btn-secondary" @click="setpage('backward')">Zurück</button>
                            <button type="button" class="btn btn-primary" v-if="validateEmail(user_data.user_email)" @click="sendData">Abschicken</button>
                        </div>
                        <div class="m-3 alert alert-danger" v-if="!validateEmail(user_data.user_email)">Fehler: Bitte gib noch eine gültige E-Mailaddresse an, nur so können wir dir wirklich helfen. </div>
                    </div>
                </transition>
            </div>
        </div>
        <div class="alert alert-success" v-if="data_sent">
            Deine Nachricht ist bei uns angekommen und wir freuen uns darauf, dir bei deinem Wordpress-Problem zu helfen! Wir werden uns schnellstmöglich bei dir melden, um gemeinsam eine Lösung zu finden.<br> Vielen Dank für dein Vertrauen!
        </div>
    </section>
</template>
<script setup>
import { ref, reactive, computed } from 'vue';
import axios from 'axios';
import { scrollToElement } from '../modules/tools';

const actualPage = ref(-1);
const user_data = reactive({
    problem: null,
    message: null,
    alertmode: 1,
    wordpress: {
        version: null,
        php: null,
        plugins: null,
        theme: null,
        sitebuilder: null
    },
    user_name: null,
    user_email: null,

});
const data_sent = ref(false);
const alert_modes = [{ mode: 0, text: 'Nicht ganz so dringend' },
{ mode: 1, text: 'Dringend, Problem muss in unter einer Woche gelöst werden' },
{ mode: 2, text: 'Sehr dringend: Problem muss binnen 2-3 Tagen gelöst sein' },
{ mode: 3, text: 'Super dringend: Problem muss binnen 1-2 Tagen gelöst sein' },
{ mode: 4, text: 'Extrem dringend: Problem muss binnen 24 Stunden gelöst sein' }];

const selectedModeText = computed(() => {
    const mode = alert_modes.find((m) => m.mode === user_data.alertmode);
    return mode ? mode.text : '';
});

const setpage = (direction) => {
    if (direction === 'forward') {
        actualPage.value++;
    }
    else if (direction === 'backward') {
        actualPage.value--;
    }
    else {
        console.error('breaking up');
    }
}


async function submitForm() {


    const postData = {
        email: user_data.user_email,
        payload: { formdata: user_data },
        uid: "8IJUJGT6745UHRTDFGTZO",
        dc: new Date().toJSON(),
    };
    //console.log(JSON.stringify(postData));
    await axios
        .post(`https://api.tobeworks.de/wpnotfall`, postData)
        .then(function (response) {
            response.data;
            if (response.data.status == 1) {
                data_sent.value = true;
                scrollToElement('formular');
            } else {
                error.value = true;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    return false;
}

const formatAnswer = (answer = '') => {
    return answer.replace(/\n/g, '<br>');
};

const sendData = () => {
    submitForm();
}
function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}


</script>
<style>
.fade-slide-enter-active {
    animation: slide-in 0.1s ease forwards;
    opacity: 0;
}

.fade-slide-leave-active {
    animation: slide-out 0.1s ease forwards;
    opacity: 1;
}

@keyframes slide-in {
    0% {
        opacity: 0;
        transform: translateX(-50%);
    }

    80% {
        opacity: 0.2;

    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slide-out {
    0% {
        opacity: 1;
        transform: translateX(0);
    }

    100% {
        opacity: 0;
        transform: translateX(50%);
    }
}</style>

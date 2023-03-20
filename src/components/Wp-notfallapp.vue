<template>
    <section class="container formular border border-orange p-5 bg-orange">
        <div class="row">

            <div class="col-md-8 offset-md-2">
                <div v-if="actualPage == -1">
                    <h2>Willkommen</h2>
                    <div class="p-5">Herzlich willkommen zu unserer <strong>Wordpress Notfall App</strong>! Wir möchten dir schnell und effektiv helfen, daher bitten wir dich, alle Daten in den Formularen so genau wie möglich anzugeben. Natürlich ist die Nutzung der App komplett unverbindlich und kostenlos für dich. Beachte jedoch bitte, dass ein gültiger Vertrag erst nach Absprache zustande kommt und
                        das Audit ebenfalls kostenfrei bleibt. Erst wenn wir das Problem tatsächlich angehen, kommt ein Vertrag zwischen uns zustande. Vielen Dank!
                    </div>
                    <div class="my-2 buttons-group d-flex justify-content-center">
                        <button @click="setpage('forward')" class="btn btn-primary">Weiter</button>
                    </div>
                </div>

                <div v-if="actualPage == 0">
                    <h2>Problembeschreibung</h2>
                   <div class="py-3">Schildere Dein Problem ausführlich, was hast du bereits unternommen und in welchen Kontext tritt es auf</div>
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

                <div v-if="actualPage == 1">
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

                <div v-if="actualPage == 2">
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

                <div v-if="actualPage == 3">
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


                <div v-if="actualPage === 4">
                    <h2>Zusammenfassung</h2>
                    <div class="py-3">Nachfolgend findest du eine Zusammenfassung deiner Daten. Bitte habe keine Sorge, wir behandeln deine Daten mit höchster Vertraulichkeit und übermitteln sie über eine sichere Verbindung.</div>
                    <div class="my-2">
                        <ul>
                            <li v-if="user_data.user_email && validateEmail(user_data.user_email)">Kontakt: {{ user_data.user_name }}, {{ user_data.user_email }}, {{ user_data.user_phone }}</li>
                            <li v-else class="text-danger">E-Mailadresse fehlt noch. Ohne E-Mailadresse können wir dir leider nicht helfen</li>
                            <li>Problembeschreibung: {{ user_data.problem }}</li>
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
                    <div class="m-3 alert alert-danger" v-if="!validateEmail(user_data.user_email)">Bitte gib noch eine E-Mailaddresse an, nur so kann man in Kotakt mit dir treten</div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, reactive, computed } from 'vue';
import axios from 'axios';
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
const alert_modes = [{ mode: 0, text: 'Nicht dringend' },
{ mode: 1, text: 'Dringend, Problem muss binnen 5 Tage gelöst werden' },
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

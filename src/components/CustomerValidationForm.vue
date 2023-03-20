<template>
    <div class="kontaktformular p-2 p-md-5 umfrage mb-5" id="formular">
        <form @submit.prevent="submitForm" v-if="!gotanwsers">

            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" v-model="formdata.name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="formdata.email" required>
            </div>
            <div class="form-group">
                <label for="company">Firma</label>
                <input type="text" class="form-control" id="company" v-model="formdata.company">
            </div>
            <div class="form-group">
                <label for="position">Position</label>
                <input type="text" class="form-control" id="position" v-model="formdata.position">
            </div>

            <div v-for="(key, index) in Object.keys(answers).filter(k => k.startsWith('question'))" :key="index">
                <div class="form-group">
                    <label :for="key">{{ answers[key].question }}</label>
                    <textarea class="form-control" :id="key" v-model="answers[key].answer"></textarea>
                </div>
            </div>

            <button type="submit" class="btn btn-primary "> Formular absenden <i class="fas fa-paper-plane"></i></button>
            <div class="my-1"> <small>Die Daten werden verschlüsselt übertragen</small></div>
        </form>
    </div>
    <div id="scroll"></div>
    <div id="answers" v-if="gotanwsers" class="w-75 p-2 p-md-5 mx-auto">
        <div class="alert alert-success" role="alert">
            Vielen Dank für deine Antworten! Ich bin überzeugt, dass sie dabei helfen werden, unsere Zusammenarbeit noch effektiver und erfolgreicher zu gestalten. Bitte sei versichert, dass alle Informationen vollständig vertraulich behandelt werden.
        </div>
        <!-- <h2>Anworten</h2>
        <ul>
            <li v-for="(question, key) in answers" :key="key">
                <strong>{{ question.question }}</strong> <span v-html="formatAnswer(question.answer)"></span>
            </li>
        </ul> -->
    </div>

    <div v-if="error" class="w-75 p-5 mx-auto">
        <div class="alert alert-red" role="alert">
            Sorry, beim Versenden ist ein Fehler aufgetreten.
        </div>

    </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';
import { scrollToElement } from '../modules/tools';
const gotanwsers = ref(false);
const error = ref(false);


const answers = reactive({
    question1: { question: 'Was hält Dich von Deinem Ziel “X” ab? Warum glaubst Du, ist das so?', answer: '' },
    question2: { question: 'Was hat bei Dir derzeit höchste Prio? Was schreit Dich förmlich an?', answer: '' },
    question3: { question: 'Was ist dein zweit- und drittgrößtes Problem?', answer: '' },
    question4: { question: 'Was machst Du derzeit, um diese Probleme in Angriff zu nehmen? Wie viel Zeit investierst Du? Welche Schritte machst Du genau?', answer: '' },
    question5: { question: 'Was hast Du vorher probiert? Was hat nicht so gut funktioniert?', answer: '' },
    question6: { question: 'Was frustriert Dich derzeit? Warum frustriert es Dich?', answer: '' },
    question7: { question: 'Wie hoch ist der Frustrationsgrad bei Deinen aktuellen Problemen?', answer: '' },
    question8: { question: 'Welche Folgen hat es, dass Du Deine Probleme bisher nicht gelöst hast? Welche negativen Folgen könnte es in der Zukunft haben?', answer: '' },
    question9: { question: 'Was sind die langfristigen Folgen, dieses Problem nicht zu lösen?', answer: '' },
    question10: { question: 'Welche kurzfristigen Folgen hat es, wenn das Problem ungelöst bleibt?', answer: '' },
});
const formdata = reactive({
    name: '',
    email: '',
    company: '',
    position: ''
});

const formatAnswer = (answer = '') => {
    return answer.replace(/\n/g, '<br>');
};


async function submitForm() {


    Object.values(answers).forEach(answer => {
        if (typeof answer === 'string') {
            // Apply the function on string values
            answers[answer] = formatAnswer(answer)
        } else {
            // Apply the function on answer.answer property
            answer.answer = formatAnswer(answer.answer)
        }
    })
    const mergedData = { ...answers, ...formdata };


    const postData = {
        email: mergedData.email,
        payload: { answers: answers, formdata: formdata },
        uid: "JIKDD88dfg",
        dc: new Date().toJSON(),
    };
    //console.log(JSON.stringify(postData));
    await axios
        .post(`https://api.tobeworks.de/kundenumfrage`, postData)
        .then(function (response) {
            response.data;
            if (response.data.status == 1) {
                gotanwsers.value = true;
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
</script>
<style lang="scss">
.umfrage {
    width: 80%;
    margin: 0px auto;
}

@media (max-width: 575.98px) {
    .umfrage {
        width: 100%;
    }
}

#answers {

    strong {
        display: block;
    }

    li strong+* {
        display: block;
        margin: 20px 0;
    }
}

label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.form-group {
    margin: 2rem 0;
}

/* Style the textareas */
textarea {
    height: 100px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    resize: none;
}

/* Add some space between the textareas */
textarea:not(:first-of-type) {
    margin-top: 1rem;
}

/* Style the form error messages */
.error {
    color: red;
    margin-top: 0.5rem;
    font-size: 0.9rem;
}
</style>
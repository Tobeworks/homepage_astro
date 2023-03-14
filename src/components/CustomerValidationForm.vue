<template>
    <div class="kontaktformular p-5 umfrage">
        <form @submit.prevent="submitForm">

     <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="formdata.name">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" v-model="formdata.email">
        </div>
        <div class="form-group">
          <label for="company">Company</label>
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


            <!-- 
            <div class="form-group">
                <label for="question2">Was hat bei Dir derzeit höchste Prio? Was schreit Dich förmlich an?</label>
                <textarea class="form-control" id="question2" v-model="answers.question2"></textarea>
            </div>
            <div class="form-group">
                <label for="question3">Was ist dein zweit- und drittgrößtes Problem?</label>
                <textarea class="form-control" id="question3" v-model="answers.question3"></textarea>
            </div>
            <div class="form-group">
                <label for="question4">Was machst Du derzeit, um diese Probleme in Angriff zu nehmen? Wie viel Zeit investierst Du? Welche Schritte machst Du genau?</label>
                <textarea class="form-control" id="question4" v-model="answers.question4"></textarea>
            </div>
            <div class="form-group">
                <label for="question5">Was hast Du vorher probiert? Was hat nicht so gut funktioniert?</label>
                <textarea class="form-control" id="question5" v-model="answers.question5"></textarea>
            </div>
            <div class="form-group">
                <label for="question6">Was frustriert Dich derzeit? Warum frustriert es Dich?</label>
                <textarea class="form-control" id="question6" v-model="answers.question6"></textarea>
            </div>
            <div class="form-group">
                <label for="question7">Wie hoch ist der Frustrationsgrad bei Deinen aktuellen Problemen?</label>
                <textarea class="form-control" id="question7" v-model="answers.question7"></textarea>
            </div>
            <div class="form-group">
                <label for="question8">Welche Folgen hat es, dass Du Deine Probleme bisher nicht gelöst hast? Welche negativen Folgen könnte es in der Zukunft haben?</label>
                <textarea class="form-control" id="question8" v-model="answers.question8.answer"></textarea>
            </div>
            <div class="form-group">
                <label for="question9">Was sind die langfristigen Folgen, dieses Problem nicht zu lösen?</label>
                <textarea class="form-control" id="question9" v-model="answers.question9"></textarea>
            </div>
            <div class="form-group">
                <label for="question10">Welche kurzfristigen Folgen hat es, wenn das Problem ungelöst bleibt?</label>
                <textarea class="form-control" id="question10" v-model="answers.question10"></textarea>
            </div> -->
            <button type="submit" class="btn btn-primary">Absenden</button>
        </form>
    </div>

    <div id="answers" v-if="gotansers">
        <h2>Anworten</h2>
        <ul>
       <li v-for="(question, key) in answers" :key="key">
        <strong>{{ question.question }}</strong>  <span v-html="formatAnswer(question.answer)"></span>
      </li> 
    </ul>
    </div>

</template>
<script setup>
import { ref, reactive, computed } from 'vue';
import axios from 'axios';
const gotansers = ref(false);
const textblock = ref(false);


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
const formdata = reactive({name:'', email:'',company:'', position:''});

const formatAnswer = (answer = '') => {
    return answer.replace(/\n/g, '<br>');
};


async function submitForm() {
    gotansers.value = true;

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

    //console.log(mergedData);

    
    const postData = {
        email: mergedData.email,
        payload: {answers: answers, formdata: formdata},
        uid: "JIKDD88dfg",
        dc: new Date().toJSON(),
    };
    //console.log(JSON.stringify(postData));
    await axios
        .post(`https://api.tobeworks.de/kundenumfrage`, postData)
        .then(function (response) {
            response.data;
        })
        .catch(function (error) {
            console.log(error);
        });

    return false;
    // try {
    //     const response = await axios.post('https://example.com/api/form', answers);
    //     console.log(response.data);
    // } catch (error) {
    //     console.log(error.response.data);
    // }
}

</script>
<style lang="scss">
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
    margin: 20px 0;
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
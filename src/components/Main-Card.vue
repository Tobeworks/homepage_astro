<template>
    <div class="col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-center my-4 mx-0 text-erieblack box" data-aos="fade-up">
        <div class="card landingcards">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <div class="card-text">
                    <slot />
                </div>
                <!-- <a href="#" class="card-link">weiter</a> -->
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

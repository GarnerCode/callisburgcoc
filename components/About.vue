<template>
    <section id="about">
        <div class="about-card" v-for="(item, index) of aboutData" :key="index">
            <img class="card-img" :src="item.imageUrl" alt="">
            <p class="card-text">{{ item.text }}</p>
        </div>
    </section>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #about {
            display: flex;
            flex-direction: column;
            gap: 5rem;
            .about-card {
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
            .card-img {
                width: 100%;
                border-radius: var(--border-radius);
            }
            .card-text {
                text-align: left;
            }
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { aboutData } from '~/const/aboutData';

    export default defineComponent({
        name: 'About',
        data: () => {
            return {
                aboutData,
            }
        }
    })
</script>
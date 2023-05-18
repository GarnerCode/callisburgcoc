<template>
    <section id="about">
        <div data-aos="fade-up" class="about-card" v-for="(item, index) of aboutData" :key="index" :class="{'alternate': !(index % 2)}">
            <img class="card-img" :src="item.imageUrl" alt="">
            <div class="card-text-container">
                <h2 class="card-title">{{ item.title }}</h2>
                <p class="card-text">{{ item.text }}</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #about {
            display: flex;
            flex-direction: column;
            gap: 10rem;
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
    @media screen and (min-width: 768px) {
        #about {
            .about-card {
                flex-direction: row;
                &.alternate {
                    flex-direction: row-reverse;
                }
            }
            .card-img {
                width: 50%;
            }
            .card-text {
                margin-top: 2rem;
                display: block;
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
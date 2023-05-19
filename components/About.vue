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
            gap: 20rem;
            .about-card {
                flex-direction: row;
                &.alternate {
                    flex-direction: row-reverse;
                    .card-text-container {
                        left: 75px;
                    }
                }
            }
            .card-img {
                width: 50%;
            }
            .card-text-container {
                position: relative;
                right: 75px;
                bottom: 100px;
                background-color:var(--color-primary);
                box-shadow: var(--box-shadow);
                height: fit-content;
                padding: 2rem;
                border-radius: var(--border-radius);
            }
            .card-text {
                margin-top: 2rem;
                display: block;
            }
            .card-title {
                color: var(--color-white);
            }
            .card-text {
                color: var(--color-gray);
            }
        }
    }
    @media screen and (min-width: 1440px) {
        #about {
            .card-text-container {
                bottom: 80px;
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
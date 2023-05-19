<template>
    <div id="events-page">
        <img class="events-hero" src="assets/images/events.webp" alt="2023 Easter Egg Hunt">
        <div class="events-text">
            <h1>Annual Events</h1>
            <p>The Callisburg Church of Christ hosts a variety of events throughout the year. Below are just a few of our annual events!</p>
        </div>
        <div class="events-list">
            <div class="event" v-for="(event, index) of eventData" :key="index" :class="{'alternate': !(index % 2)}">
                <img class="event-img" :src="event.imageUrl" alt="">
                <div class="event-text">
                    <h2 class="event-title">{{ event.title }}</h2>
                    <p class="event-summary">{{ event.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #events-page {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            .events-hero {
                width: 100%;
                border-radius: var(--border-radius);
            }
            .events-text {
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
            .events-list {
                display: flex;
                flex-direction: column;
                gap: 20rem;
            }
            .event {
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
            .event-text {
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }
            .event-img {
                width: 100%;
                border-radius: var(--border-radius);
            }
        }
    }
    @media screen and (min-width: 768px) {
        #events-page {
            .events-text {
                background-color: var(--color-primary);
                padding: 2rem;
                border-radius: var(--border-radius);
                position: relative;
                left: -25px;
                bottom: 150px;
                width: 50%;
                box-shadow: var(--box-shadow);
                h1 {
                    color: var(--color-white);
                }
                p {
                    color: var(--color-gray);
                }
            }
            .event {
                flex-direction: row;
                &.alternate {
                    flex-direction: row-reverse;
                    .event-text {
                        left: 75px;
                    }
                }
            }
            .event-text {
                position: relative;
                right: 75px;
                bottom: 100px;
                background-color: var(--color-primary);
                padding: 2rem;
                border-radius: var(--border-radius);
                height: fit-content;
                box-shadow: var(--box-shadow);
            }
            .event-title {
                color: var(--color-white);
            }
            .event-summary {
                color: var(--color-gray);
            }
            .event-img {
                width: 50%;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { eventData } from '~/const/eventData';

    export default defineComponent({
        name: 'EventsPage',
        data: () => {
            return {
                eventData,
            }
        }
    })
</script>
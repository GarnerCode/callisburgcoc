<template>
    <section data-aos="fade-up" id="events">
        <div class="section-header">
            <h2>Upcoming Events</h2>
            <!-- <NuxtLink to="/events">View All</NuxtLink> -->
        </div>
        <div class="section-content">
            <!-- <div class="event" v-for="(event, index) of eventData" :key="index">
                <div class="column">
                    <img :src="event.imageUrl" alt="">
                </div>
                <div class="column">
                    <div class="row">
                        <h3>{{ event.title }}</h3>
                        <p>{{ event.date }}</p>
                    </div>
                    <p>{{ event.text }}</p>
                </div>
            </div> -->
            <p>Events information coming soon!</p>
        </div>
    </section>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #events {
            padding: 100px var(--mobile-x-padding);
            .section-header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-bottom: 3rem;
            }
            .section-content {
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
            .event {
                img {
                    width: 100%;
                    border-radius: 15px;
                }
                .row {
                    margin-bottom: 1rem;
                    p {
                        font-size: 14px;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
        #events {
            padding: 100px var(--tablet-x-padding);
            .event {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: 2rem;
                img {
                    width: 15rem;
                }
            }
        }
    }
    @media screen and (min-width: 1440px) {
        #events {
            padding: 100px var(--desktop-x-padding);
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { eventData } from '~/const/eventData';

    export default defineComponent({
        name: 'Events',
        data: () => {
            return {
                eventData,
            }
        }
    })
</script>
<template>
    <div id="events-page">
        <div class="page-header">
            <div class="header-content">
                <h1>Annual Events</h1>
            </div>
        </div>
        <div class="header-shader"></div>
        <div class="page-content">
            <p>Events information coming soon!</p>
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #events-page {
            .page-header {
                background-image: url('/assets/images/vbs.webp');
            }
            .page-content {
                height: 100vh;
                p {
                    text-align: center;
                    margin-top: 2rem;
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
        #events-page {
            .page-header {
                background-position-y: -100px;
            }
        }
    }
    @media screen and (min-width: 1040px) {
        #events-page {
            .page-header {
                background-position-y: -150px;
            }
        }
    }
    @media screen and (min-width: 1800px) {
        #events-page {
            .page-header {
                background-position-y: -250px;
            }
        }
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
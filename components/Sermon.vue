<template>
    <section data-aos="fade-up" id="sermon">
        <div class="section-header">
            <h2>Last Sunday's Sermon</h2>
        </div>
        <div class="sermon-content">
            <iframe
                :src="sermonData.videoUrl" 
                title="YouTube video player" 
                frameborder="0" 
                allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
            >
            </iframe>
            <div class="sermon-text">
                <p class="scripture">"{{ sermonData.scripture }}"</p>
                <p class="verse">{{ sermonData.verse }}</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #sermon {
            padding: 100px var(--mobile-x-padding);
            h2 {
                margin-bottom: 3rem;
            }
            iframe {
                aspect-ratio: 16 / 9;
                width: 100%;
                border-radius: var(--border-radius);
            }
            .sermon-content {
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
            .sermon-text {
                font-style: italic;
            }
            .verse {
                font-size: 16px;
            }
        }
    }
    @media screen and (min-width: 768px) {
        #sermon {
            padding: 100px var(--tablet-x-padding);
            .sermon-text {
                width: 550px;
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
        }
    }
    @media screen and (min-width: 1000px) {
        #sermon {
            .sermon-content {
                flex-direction: row;
            }
            iframe {
                height: fit-content;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        #sermon {
            padding: 100px var(--desktop-x-padding);
            iframe {
                width: 650px;
            }
            .sermon-text {
                max-width: 450px;
            }
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { sermonData } from '~/const/sermonData';

    export default defineComponent({
        name: 'Sermon',
        data: () => {
            return {
                sermonData,
            }
        }
    })
</script>
<template>
    <section id="sermon">
        <h2>Watch Last Sunday's Sermon</h2>
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
            display: flex;
            flex-direction: column;
            gap: 3rem;
            h2 {
                text-align: center;
            }
            iframe {
                aspect-ratio: 16 / 9;
                width: 100%;
            }
            .sermon-text {
                font-style: italic;
            }
            .verse {
                font-size: 16px;
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
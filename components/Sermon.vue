<template>
    <section id="sermon">
        <div class="section-header">
            <h2 class="text-highlight">Watch Last Sunday's Sermon</h2>
            <div class="header-row"></div>
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
            display: flex;
            flex-direction: column;
            gap: 3rem;
            .section-header {
                .header-row {
                    height: 1px;
                    width: 100%;
                    background-color: var(--color-primary);
                    display: none;
                }
            }
            h2 {
                text-align: center;
            }
            iframe {
                aspect-ratio: 16 / 9;
                width: 100%;
                border-radius: var(--border-radius);
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
            .section-header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            h2 {
                text-align: left;
            }
            .sermon-content {
                display: flex;
                flex-direction: row-reverse;
                gap: 5rem;
            }
            .sermon-text {
                width: 550px;
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        #sermon {
            .section-header {
                .header-row {
                    display: block;
                    width: 650px;
                }
            }
            iframe {
                width: 650px;
            }
            .sermon-text {
                width: calc(100% - 650px - 5rem);
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
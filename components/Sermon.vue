<template>
    <section id="sermon" v-if="sermonData">
        <div class="sermon-content" data-aos="fade-up">
            <h4>Latest Sunday Service</h4>
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
        <div class="color-bg"></div>
        <div class="border-top"></div>
    </section>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #sermon {
            padding: 100px var(--mobile-x-padding);
            position: relative;
            h2 {
                margin-bottom: 3rem;
            }
            iframe {
                aspect-ratio: 16 / 9;
                width: 100%;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow);
            }
            h4 {
                text-align: center;
                font-size: 2rem;
                position: absolute;
                top: -3rem;
                font-size: 1.5rem;
                left: 0;
                right: 0;
                margin: 0 auto;
            }
            .sermon-content {
                display: flex;
                flex-direction: column;
                gap: 3rem;
                position: relative;
                z-index: 2;
            }
            .sermon-text {
                font-style: italic;
            }
            .verse {
                font-size: 16px;
            }
            .color-bg {
                background-color: var(--color-tertiary);
                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 25%;
                z-index: 1;
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
            .color-bg {
                height: 40%;
            }
        }
    }
    @media screen and (min-width: 1000px) {
        #sermon {
            .sermon-content {
                flex-direction: row;
                justify-content: space-between;
                gap: 10%;
            }
            iframe, .sermon-text {
                width: 40%;
            }
            iframe {
                height: fit-content;
                width: 50%;
            }
            h4 {
                position: absolute;
                top: -5rem;
                left: 0;
                font-size: 2.25rem;
                margin: 0;
                text-align: left;
            }
            .color-bg {
                height: calc(100% - 68px);
                width: calc(50% + 2rem);
                border-bottom-right-radius: 50px;
            }
            .border-top {
                display: block;
                position: absolute;
                top: -0.5px;
                left: calc(50% + 31px);
                width: 50px;
                height: 50px;
                background-color: var(--color-white);
                box-shadow: -15px -15px 0 5px var(--color-tertiary);
                border-top-left-radius: 50px;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        #sermon {
            padding: 100px var(--desktop-x-padding);
            // iframe {
            //     width: 650px;
            // }
            // .sermon-text {
            //     max-width: 450px;
            // }
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { supabase } from '~/lib/supabase';
    // import { sermonData } from '~/const/sermonData';

    export default defineComponent({
        name: 'Sermon',
        data: () => {
            return {
                sermonData: null,
            }
        },
        async mounted() {
            await this.fetchSermon();
        },
        methods: {
            async fetchSermon(): Promise<void> {
                const { data, error } = await supabase
                .from('sermons')
                .select();
                if (data) {
                    this.sermonData = data[0];
                } else {
                    console.error(error);
                }
            }
        }
    })
</script>
<template>
    <section id="landing">
        <div class="hero-shader"></div>
        <div class="section-content">
            <h1>Worshipping the Lord<br/> <span>From Our Corner of the World</span></h1>
            <div class="button-row">
                <NuxtLink class="button button-primary" to="/about">About Us</NuxtLink>
                <NuxtLink class="button button-secondary" to="/events">Events</NuxtLink>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #landing {
            height: 100vh;
            background-image: url('/assets/images/hero-mobile.webp');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: top;
            background-attachment: fixed;
            position: relative;
            .hero-shader {
                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100%;
                background-color: var(--color-secondary);
                opacity: 0.5;
                z-index: 3;
            }
            .section-content {
                height: 100%;
                position: relative;
                z-index: 4;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0 var(--mobile-x-padding);
            }
            h1 {
                color: var(--color-white);
                font-size: 1.75rem;
                text-align: center;
                line-height: 1.8rem;
                span {
                    font-size: 1.25rem;
                    color: var(--color-gray);
                }
            }
            .button-row {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: 2rem;
                margin-top: 1rem;
            }
        }
    }
    @media screen and (min-width: 768px) {
        #landing {
            background-image: url('/assets/images/hero-tablet.webp');
            h1 {
                font-size: 3rem;
                line-height: 3rem;
                span {
                    font-size: 2.25rem;
                }
            }
        }
    }
    @media screen and (min-width: 820px) {
        #landing {
            background-image: url('/assets/images/hero-desktop.webp');
        }
    }
    
</style>
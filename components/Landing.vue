<template>
    <section id="landing">
        <img class="hero" src="assets/images/exterior.webp" alt="Callisburg Church exterior"></img>
        <div class="landing-text">
            <h1>Welcome to the Callisburg Church of Christ</h1>
            <p>Our goal is to reach as many people with the message of Christ as we can from our little corner of the world.</p>
            <button class="button">Learn More</button>
        </div>
    </section>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #landing {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            .hero {
                width: 100%;
                box-shadow: var(--box-shadow);
            }
            .landing-text {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 3rem;
            }
            h1 {
                text-align: center;
            }
        }
    }
    @media screen and (min-width: 768px) {
        #landing {
            display: grid;
            grid-template-columns: 1fr 1fr;
            .button {
                margin: 0 auto;
            }
        }
    }
</style>
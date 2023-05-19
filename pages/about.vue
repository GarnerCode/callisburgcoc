<template>
    <div id="about-page">
        <img class="about-img" src="assets/images/sign.webp" alt="Callisburg Church of Christ sign on road">
        <div class="about-text">
            <h1>About Us</h1>
            <p>We are located at 308 McDaniel St in Callisburg, Texas. Each Sunday, we have Sunday School available for all ages starting at 9:30am, followed by our morning worship services starting at 10:30am. We later have our evening worship services starting at 6:00pm.</p>
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #about-page {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            .about-text {
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
            .about-img {
                border-radius: var(--border-radius);
            }
        }
    }
    @media screen and (min-width: 768px) {
        #about-page {
            .about-text {
                width: 50%;
                background-color: var(--color-primary);
                padding: 2rem;
                border-radius: var(--border-radius);
                position: relative;
                bottom: 150px;
                right: 25px;
                h1 {
                    color: var(--color-white);
                }
                p {
                    color: var(--color-gray);
                }
            }
        }
    }
</style>
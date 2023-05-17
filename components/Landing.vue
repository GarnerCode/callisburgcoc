<template>
    <section id="landing">
        <img class="hero hero-mobile" src="assets/images/mobile/exterior.webp" alt="Callisburg Church exterior">
        <img class="hero hero-tablet" src="assets/images/tablet/exterior.webp" alt="Callisburg Church exterior">
        <img class="hero hero-desktop" src="assets/images/desktop/exterior2.webp" alt="Callisburg Church exterior">
        <div class="landing-text">
            <div class="text">
                <h1>Welcome to the<br/> <span class="text-highlight">Callisburg Church of Christ</span></h1>
                <p>We are a small country church with a large heart for the Lord and others. Our goal is to reach as many people with the message of Christ as we can from our little corner of the world. We would love to see you and invite you to come spend some time with us!</p>
                <button class="button">Learn More</button>
            </div>
            <div class="events">
                <h2>Upcoming Events</h2>
                <div class="events-content">
                    <img src="assets/images/vbs.webp" alt="">
                    <div class="event-text">
                        <div class="event-title">Vacation Bible School</div>
                        <p class="event-date">June 27th - June 29th</p>
                    </div>
                </div>
            </div>
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
                border-radius: var(--border-radius);
            }
            .hero-tablet {
                display: none;
            }
            .hero-desktop {
                display: none;
            }
            .landing-text {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 10rem;
                .text {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 3rem
                }
            }
            h1 {
                text-align: center;
            }
            .events {
                display: flex;
                flex-direction: column;
                gap: 3rem;
                .events-content {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 1rem;
                }
                img {
                    width: 100%;
                    border-radius: var(--border-radius);
                }
                .event-title {
                    font-size: 20px;
                    font-weight: bold;
                }
                .event-date {
                    font-style: italic;
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
        #landing {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
            .hero {
                width: 100%;
            }
            .hero-mobile {
                display: none;
            }
            .hero-tablet {
                display: block;
            }
            .landing-text {
                gap: 0;
            }
            .button {
                margin: 0 auto;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        #landing {
            .hero-tablet {
                display: none;
            }
            .hero-desktop {
                display: block;
            }
            h1 {
                text-align: left;
            }
            .button {
                margin: 0;
            }
        }
    }
</style>
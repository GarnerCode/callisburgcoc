<template>
    <section id="landing">
        <img class="hero hero-mobile" src="assets/images/mobile/exterior.webp" alt="Callisburg Church exterior">
        <img class="hero hero-tablet" src="assets/images/mobile/exterior.webp" alt="Callisburg Church exterior">
        <img class="hero hero-desktop" src="assets/images/mobile/exterior.webp" alt="Callisburg Church exterior">
        <div class="landing-text">
            <div class="text">
                <h1>Welcome to the<br/> <span>Callisburg Church of Christ</span></h1>
                <p>We are a small country church with a large heart for the Lord and others. Our goal is to reach as many people with the message of Christ as we can from our little corner of the world. We would love to see you and invite you to come spend some time with us!</p>
                <button class="button">Learn More</button>
            </div>
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
    </section>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #landing {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            position: relative;
            .hero {
                width: 100%;
                box-shadow: var(--box-shadow);
                border-radius: var(--border-radius);
                opacity: 0;
                animation: slideUp 0.5s 0.3s ease forwards;
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
                opacity: 0;
                transform: translateY(200px);
                animation: slideUp 0.5s 0.5s ease forwards;
                .text {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 3rem;
                    text-align: justify;
                }
            }
            h1 {
                text-align: center;
                span {
                    color: var(--color-primary);
                }
            }
            .button {
                background-color: var(--color-primary);
                color: var(--color-white);
            }
            .events {
                display: flex;
                flex-direction: column;
                gap: 3rem;
                margin-top: 7rem;
                opacity: 0;
                transform: translateY(200px);
                animation: slideUp 0.5s 0.7s ease forwards;
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
                    font-size: 14px;
                    color: var(--color-black);
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
        #landing {
            display: block;
            .hero-mobile {
                display: none;
            }
            .hero-tablet {
                display: block;
            }
            .landing-text {
                gap: 0;
                background-color: var(--color-primary);
                box-shadow: var(--box-shadow);
                position: absolute;
                bottom: -250px;
                width: 50%;
                padding: 2rem;
                border-radius: var(--border-radius);
            }
            h1 {
                text-align: left;
                color: var(--color-white);
                span {
                    color: var(--color-white);
                }
            }
            p {
                color: var(--color-white);
            }
            .button {
                margin: 0 auto;
                background-color: var(--color-white);
                color: var(--color-primary);
            }
            .events {
                margin: 0;
                margin-top: 2rem;
                position: absolute;
                right: 0;
                width: calc(50% - 6rem);
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
            .landing-text {
                bottom: -75px;
                left: -75px;
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
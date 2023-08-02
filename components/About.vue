<template>
    <section data-aos="fade-up" id="about">
        <div class="section-content">
            <div class="column">
                <img src="/assets/location.svg" alt="" width="80px" height="80px">
                <h2>Location</h2>
                <p>308 McDaniel St Callisburg, TX 76241</p>
            </div>
            <div class="column">
                <img src="/assets/clock.svg" alt="" width="80px" height="80px">
                <h2>Service Times</h2>
                <div class="times">
                    <div class="time">
                        <h3>Sundays</h3>
                        <p>10:30am - 12:00pm<br/>6:00pm - 7:00pm</p>
                    </div>
                    <div class="time">
                        <h3>Wednesdays</h3>
                        <p>7:00pm - 8:00pm</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <img src="/assets/email.svg" alt="" width="80px" height="80px">
                <h2>Contact</h2>
                <p>940-634-2250</p>
                <p>1lostdog@sbcglobal.net</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #about {
            padding: 100px var(--mobile-x-padding);
            .section-content {
                display: flex;
                flex-direction: column;
                gap: 5rem;
            }
            img {
                display: block;
                margin: 0 auto;
            }
            h2 {
                text-align: center;
                margin: 1rem 0;
            }
            h3 {
                font-weight: normal;
                text-align: center;
            }
            p {
                text-align: center;
            }
            .times {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
        }
    }
    @media screen and (min-width: 768px) {
        #about {
            padding: 100px var(--tablet-x-padding);
        }
    }
    @media screen and (min-width: 1220px) {
        #about {
            .section-content {
                flex-direction: row;
                justify-content: space-between;
                gap: 0;
                .column {
                    width: 33%;
                }
            }
        }
    }
    @media screen and (min-width: 1440px) {
        #about {
            padding: 100px var(--desktop-x-padding);
        }
    }
</style>
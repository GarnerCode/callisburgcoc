<template>
    <div id="about-page">
        <div class="page-header">
            <div class="header-content">
                <h1>About Us</h1>
            </div>
        </div>
        <div class="header-shader"></div>
        <div class="page-content">
            <section>
                <img src="assets/images/sundayschool.webp" alt="" width="311px" height="241.88px">
                <div class="text">
                    <h2>Sunday School</h2>
                    <p>We have different Sunday School classes for all ages starting at 9:30. Come join us before our morning services to hear engaging lessons from the bible!</p>
                </div>
            </section>
            <section class="row-reverse">
                <img src="assets/images/morningsermon.webp" alt="" width="311px" height="241.88px">
                <div class="text">
                    <h2>Morning Sermon</h2>
                    <p>Our Sunday Morning services begin at 10:30am. Take part with us in singing, prayer, and worship!</p>
                </div>
            </section>
            <section>
                <img src="assets/images/evening.webp" alt="" width="311px" height="241.88px">
                <div class="text">
                    <h2>Evening Services</h2>
                    <p>Come back at 6:30pm Sunday nights for singing and bible study!</p>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #about-page {
            .page-header {
                background-image: url('/assets/images/about.webp');
            }
            section {
                padding: 100px var(--mobile-x-padding);
            }
            img {
                border-radius: 15px;
            }
            h2 {
                margin: 1rem 0;
                text-align: center;
            }
        }
    }
    @media screen and (min-width: 768px) {
        #about-page {
            section {
                padding: 100px var(--tablet-x-padding);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: 2rem;
                &.row-reverse {
                    flex-direction: row-reverse;
                }
            }
            h2 {
                text-align: left;
            }
        }
    }
    @media screen and (min-width: 1040px) {
        #about-page {
            .page-header {
                background-position-y: -100px;
            }
            img {
                width: 25rem;
                height: auto;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        #about-page {
            section {
                padding: 100px var(--desktop-x-padding);
            }
        }
    }
</style>
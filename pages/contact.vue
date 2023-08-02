<template>
    <div id="contact-page">
        <div class="page-header">
            <div class="header-content">
                <h1>Contact Us</h1>
            </div>
        </div>
        <div class="header-shader"></div>
        <div class="page-content">
            <section>
                <p>If we can help with prayer or baptism, please contact us anytime below.</p>
                <div class="contact-list">
                    <div class="contact">
                        <h2>Call or Text</h2>
                        <p>940-634-2250</p>
                    </div>
                    <div class="contact">
                        <h2>Email</h2>
                        <p>1lostdog@sbcglobal.net</p>
                    </div>
                    <div class="contact">
                        <h2>Mailing Address</h2>
                        <p>308 McDaniel St Callisburg, TX 76241</p>
                    </div>
                </div>
            </section>
        </div>
        <!-- <h1>Contact Us</h1>
        <p>If we can help with prayer or baptism, please contact us anytime below.</p>
        <div>
            <h2>Call or Text</h2>
            <p>940-634-2250</p>
        </div>
        <div>
            <h2>Email</h2>
            <p>1lostdog@sbcglobal.net</p>
        </div>
        <div>
            <h2>Mailing Address</h2>
            <p>308 McDaniel St Callisburg, TX 76241</p>
        </div> -->
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #contact-page {
            min-height: 100vh;
            text-align: center;
            .page-header {
                background-image: url('/assets/images/sign.webp');
            }
            section {
                padding: 100px var(--mobile-x-padding);
            }
            .contact-list {
                margin-top: 50px;
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
        }
    }
    @media screen and (min-width: 768px) {
        #contact-page {
            .page-header {
                background-position-y: -100px;
            }
            section {
                padding: 100px var(--tablet-x-padding);
            }
        }
    }
    @media screen and (min-width: 1440px) {
        #contact-page {
            .page-header {
                background-position-y: -250px;
            }
            section {
                padding: 100px var(--desktop-x-padding);
            }
        }
    }
</style>
<template>
    <footer>
        <div class="logo">
            <img src="assets/logo.png" alt="Callisburg Church of Christ logo">
        </div>
        <div class="contact">
            <div class="contact-item">
                <div class="contact-icon">
                    <font-awesome-icon :icon="['fas', 'phone']" />
                </div>
                <div class="contact-text">
                    940-634-2250
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon">
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                </div>
                <div class="contact-text">
                    1lostdog@sbcglobal.net
                </div>
            </div>
        </div>
        <div class="social">
            <a class="social-link" href="https://www.facebook.com/callisburgcoc" target="_blank">
                <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <a class="social-link" href="https://www.youtube.com/channel/UC8mvhmWIPjLnV8E1kb5XGpQ/featured" target="_blank">
                <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
        </div>
    </footer>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        footer {
            padding: 2rem var(--mobile-x-padding);
            background-color: var(--color-white);
            box-shadow: var(--box-shadow);
            display: flex;
            flex-direction: column;
            gap: 3rem;
            margin-top: 20rem;
            .logo {
                width: 80%;
                margin: 0 auto;
                img {
                    width: 100%;
                }
            }
            .contact {
                display: flex;
                flex-direction: column;
                gap: 3rem;
                width: fit-content;
                margin: 0 auto;
            }
            .contact-item {
                display: flex;
                flex-direction: row;
                gap: 3rem;
                align-items: center;
            }
            .contact-icon {
                font-size: 26px;
            }
            .contact-text {
                font-size: 16px;
            }
            .social {
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 3rem;
            }
            .social-link {
                color: var(--color-black);
                font-size: 26px;
            }
        }
    }
    @media screen and (min-width: 768px) {
        footer {
            flex-direction: row;
            padding: 2rem var(--tablet-x-padding);
            .logo {
                width: 33%;
                margin: 0;
            }
            .social {
                align-items: flex-end;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        footer {
            padding: 2rem var(--desktop-x-padding);
        }
    }
</style>
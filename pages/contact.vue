<template>
    <div id="contact-page">
        <h1>Contact Us</h1>
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
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #contact-page {
            display: flex;
            flex-direction: column;
            gap: 5rem;
            text-align: center;
            height: calc(100vh - 4rem);
            div {
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
        }
    }
</style>
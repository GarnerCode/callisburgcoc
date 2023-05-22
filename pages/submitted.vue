<template>
    <div id="submitted-page">
        <h1>Thank you for registering for our 2023 Vacation Bible School!</h1>
        <h2>We look forward to seeing you here!</h2>
        <NuxtLink to="/" class="button">Return Home</NuxtLink>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #submitted-page {
            text-align: center;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3rem;
            h2 {
                color: var(--color-primary);
            }
        }
    }
</style>
<template>
    <div>
        <Header></Header>
        <main>
            <Nuxt />
        </main>
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed:wght@700&display=swap');
    :root {
        --color-primary: #007EE5;
        --color-secondary: #65aee9;
        --color-gray: #CAC0BF;
        --color-black: #1d1d1f;
        --color-white: #fbfbfd;
        --font-family-primary: 'Roboto', sans-serif;
        --font-family-secondary: 'Roboto Condensed', sans-serif;
        --mobile-x-padding: 2rem;
        --tablet-x-padding: 6rem;
        --border-radius: 5px;
        --transition: ease 0.3s;
        --box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    html {
        overflow-x: hidden;
        font-size: 62.5%;
        @media screen and (min-width: 112.5em) {
            font-size: 75%;
        }
        
        @media screen and (min-width: 85.375em) and (max-width: 75em) {
            font-size: 56.25%;
        }
        
        @media screen and (max-width: 56.25em) {
            font-size: 50%;
        }
        
        @media screen and (max-width: 28.125em) {
            font-size: 45%;
        }
    }
    body {
        margin: 0;
        background-color: var(--color-white);
        color: var(--color-black);
    }
    p {
        font-family: var(--font-family-primary);
        margin: 0;
    }
    h1, h2, h3 {
        font-family: var(--font-family-secondary);
        margin: 0;
    }
    @media screen and (min-width: 0px) {
        h1 {
            font-size: 36px;
        }
        h2 {
            font-size: 30px;
        }
        h3 {
            font-size: 24px;
        }
        p {
            font-size: 18px;
        }
        main {
            padding: var(--mobile-x-padding);
        }
        .button {
            border: none;
            background-color: var(--color-primary);
            color: var(--color-white);
            border-radius: var(--border-radius);
            padding: 2rem 3rem;
            width: 100%;
            font-size: 18px;
            transition: var(--transition);
            cursor: pointer;
            &:hover {
                background-color: var(--color-secondary);
            }
        }
    }
    @media screen and (min-width: 768px) {
        main {
            padding: 0 var(--tablet-x-padding);
        }
        h1 {
            font-size: 24px;
        }
        .button {
            width: 280px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
</style>
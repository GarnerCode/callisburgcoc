<template>
    <div>
        <Header></Header>
        <main>
            <Nuxt />
        </main>
        <Footer></Footer>
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed:wght@700&display=swap');
    :root {
        --color-primary: #007EE5;
        --color-secondary: #65aee9;
        --color-gray: #cccccc;
        --color-black: #1d1d1f;
        --color-white: #fbfbfd;
        --font-family-primary: 'Roboto', sans-serif;
        --font-family-secondary: 'Roboto Condensed', sans-serif;
        --mobile-x-padding: 2rem;
        --tablet-x-padding: 6rem;
        --desktop-x-padding: 18rem;
        --border-radius: 10px;
        --transition: ease 0.3s;
        --box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(200px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
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
    * {
        font-family: var(--font-family-primary);
    }
    body {
        margin: 0;
        background-color: var(--color-white);
        color: var(--color-black);
    }
    p {
        margin: 0;
    }
    h1, h2, h3 {
        font-family: var(--font-family-secondary);
        margin: 0;
    }
    img {
        box-shadow: var(--box-shadow);
    }
    .text-highlight {
        color: var(--color-primary);
    }
    .error {
        color: red;
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
            margin-top: 5rem;
        }
        .button {
            border: none;
            background-color: var(--color-primary);
            color: var(--color-white);
            border-radius: var(--border-radius);
            padding: 2rem 3rem;
            font-size: 18px;
            transition: var(--transition);
            text-decoration: none;
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
            font-size: 36px;
        }
        .button {
            width: 280px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .panel {
            background-color: var(--color-primary);
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 3rem;
            position: relative;
            box-shadow: var(--box-shadow);
            h1, h2 {
                color: var(--color-white);
            }
            p {
                color: var(--color-gray);
            }
        }
    }
    @media screen and (min-width: 1440px) {
        main {
            padding: 0 var(--desktop-x-padding);
        }
    }
</style>
<template>
    <div id="container">
        <Header></Header>
        <main>
            <Nuxt />
        </main>
        <Footer></Footer>
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
    :root {
        --color-primary: #007EE5;
        --color-primary-hover: #3696e6;
        --color-secondary: #0c3957;
        --color-tertiary: #b7cddf;
        --color-gray: #bebebe;
        --color-black: #1d1d1f;
        --color-white: #fbfbfd;
        --font-family-primary: 'Poppins', sans-serif;
        --mobile-x-padding: 2rem;
        --tablet-x-padding: 6rem;
        --desktop-x-padding: 20rem;
        --border-radius: 0px;
        --transition: ease 0.3s;
        --box-shadow: 0 0 25px 15px rgba(110, 110, 110, 0.1)
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
    * {
        font-family: var(--font-family-primary);
    }
    body {
        margin: 0;
        background-color: var(--color-white);
        color: var(--color-black);
    }
    #container {
        position: relative;
        overflow-x: hidden;
    }
    p {
        margin: 0;
    }
    h1, h2, h3 {
        font-family: var(--font-family-primary);
        font-weight: 700;
        margin: 0;
    }
    .text-highlight {
        color: var(--color-secondary);
    }
    .error {
        color: red;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    .field {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        div {
            text-align: left;
            font-size: 16px;
        }
    }
    label {
        display: block;
        font-size: 18px;
        text-align: left;
        font-weight: bold;
        span {
            font-size: 16px;
            font-style: italic;
        }
    }
    input {
        padding: 1rem 2rem;
        font-size: 18px;
        width: calc(100% - 5rem);
    }
    @media screen and (min-width: 0px) {
        h1 {
            font-size: 2.25rem;
        }
        p {
            font-size: 18px;
        }
        // main {
        //     padding: var(--mobile-x-padding);
        //     margin-top: 5rem;
        // }
        .button {
            border: none;
            padding: 0.5rem 1.5rem;
            font-size: 18px;
            transition: var(--transition);
            text-decoration: none;
            cursor: pointer;
            &.button-primary {
                background-color: var(--color-primary);
                color: var(--color-white);
                &:hover {
                    background-color: var(--color-primary-hover);
                }
            }
            &.button-secondary {
                background: none;
                border: 1px solid var(--color-white);
                color: var(--color-white);
                &:hover {
                    background-color: var(--color-white);
                    color: var(--color-black);
                }
            }
        }
        .page-header {
            background-repeat: no-repeat;
            background-size: cover;
            height: 155px;
            position: relative;
        }
        .header-content {
            position: absolute;
            bottom: 1rem;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: fit-content;
            z-index: 4;
            h1 {
                color: var(--color-white);
            }
        }
        .header-shader {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 3;
            width: 100%;
            height: 155px;
            background-color: var(--color-secondary);
            opacity: 0.75;
        }
    }
    @media screen and (min-width: 768px) {
        // main {
        //     padding: 0 var(--tablet-x-padding);
        // }
        h1 {
            font-size: 3rem;
        }
        .button {
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
    @media screen and (min-width: 1040px) {
        .page-header, .header-shader {
            height: 200px;
        }
    }
    @media screen and (min-width: 1440px) {
        // main {
        //     padding: 0 var(--desktop-x-padding);
        // }
    }
</style>
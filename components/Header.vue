<template>
    <header>
        <div class="logo-container">
            <img src="assets/logo.png" alt="Callisburg Church of Christ logo">
        </div>
        <div class="mobile-nav-toggle" :class="{'toggled': navToggled}" @click="navToggled = !navToggled">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </header>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        header {
            padding: 2rem var(--mobile-x-padding);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .logo-container {
                img {
                    width: 30rem;
                }
            }
            .mobile-nav-toggle {
                cursor: pointer;
                div {
                    width: 25px;
                    height: 3px;
                    background-color: var(--color-black);
                    margin: 5px;
                    transition: all 0.3s ease;
                }
                &.toggled {
                    div {
                        background-color: var(--color-primary);
                    }
                    .line1 {
                        transform: rotate(-45deg) translate(-5px, 6px);
                    }
                    .line2 {
                        opacity: 0;
                    }
                    .line3 {
                        transform: rotate(45deg) translate(-5px, -6px);
                    }
                }
            }
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { navData } from '@/const/navData';

    export default defineComponent({
        name: 'Header',
        data: () => {
            return {
                navData,
                navToggled: false,
            }
        }
    })
</script>
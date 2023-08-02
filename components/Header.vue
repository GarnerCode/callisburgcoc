<template>
    <div>
        <Transition name="fade" mode="out-in">
            <div class="mobile-nav-overlay" v-if="navToggled"></div>
        </Transition>
        <header>
            <NuxtLink to="/" class="logo-container">
                <img src="assets/header-logo.svg" alt="Callisburg Church of Christ logo">
            </NuxtLink>
            <ul class="nav-list">
                <li class="nav-item" v-for="(nav, index) of navData" :key="index">
                    <NuxtLink :to="nav.route">
                        {{ nav.label }}
                    </NuxtLink>
                </li>
            </ul>
            <div class="mobile-nav-toggle" :class="{'toggled': navToggled}" @click="navToggled = !navToggled">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <Transition name="slide" mode="out-in">
                <div class="mobile-nav-container" v-if="navToggled">
                    <ul class="mobile-nav-list">
                        <li @click="navToggled = !navToggled" class="mobile-nav-item" v-for="(nav, index) of navData" :key="index">
                            <NuxtLink :to="nav.route">
                                {{ nav.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .mobile-nav-overlay {
            background-color: rgba(0,0,0,0.5);
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            z-index: 5;
        }
        .fade-enter, .fade-leave-to {
            opacity: 0;
        }
        .fade-enter-active, .fade-leave-active {
            transition: all 0.3s ease;
        }
        header {
            height: 60px;
            width: calc(100vw - (var(--mobile-x-padding) * 2));
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            z-index: 6;
            padding: 0 var(--mobile-x-padding);
            .logo-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 0.5rem;
                text-decoration: none;
                position: relative;
                z-index: 4;
                cursor: pointer;
                img {
                    width: 12rem;
                    box-shadow: none;
                }
            }
            .nav-list {
                display: none;
            }
            .mobile-nav-toggle {
                cursor: pointer;
                position: relative;
                z-index: 6;
                div {
                    width: 25px;
                    height: 3px;
                    background-color: var(--color-white);
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
            .mobile-nav-container {
                background-color: var(--color-white);
                position: absolute;
                top: 0;
                right: 0;
                z-index: 5;
                width: 50%;
                height: 100vh;
                border-bottom-left-radius: var(--border-radius);
                .mobile-nav-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    margin-top: 60px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    text-align: center;
                    gap: 3rem;
                    height: calc(100% - 60px);
                    a {
                        color: var(--color-black);
                        text-decoration: none;
                        font-size: 28px;
                    }
                }
            }
            .slide-enter, .slide-leave-to {
                opacity: 0;
                transform: translateX(5rem);
            }
            .slide-enter-active, .slide-leave-active {
                transition: all 0.3s ease;
            }
        }
    }
    @media screen and (min-width: 768px) {
        header {
            padding: 0 var(--tablet-x-padding);
            width: calc(100vw - (var(--tablet-x-padding) * 2));
            height: 70px;
            .logo-container {
                img {
                    width: 15rem;
                }
            }
            .mobile-nav-container {
                width: 45%;
            }
        }
    }
    @media screen and (min-width: 821px) {
        header {
            .nav-list {
                display: flex;
                flex-direction: row;
                list-style: none;
                padding: 0;
                margin: 0;
                gap: 3rem;
                a {
                    text-decoration: none;
                    font-size: 18px;
                    color: var(--color-white);
                    transition: var(--transition);
                    &:hover {
                        color: var(--color-primary);
                    }
                }
            }
            .mobile-nav-toggle {
                display: none;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        header {
            padding: 0 var(--desktop-x-padding);
            width: calc(100vw - (var(--desktop-x-padding) * 2));
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
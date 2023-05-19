<template>
    <div>
        <Transition name="fade" mode="out-in">
            <div class="mobile-nav-overlay" v-if="navToggled"></div>
        </Transition>
        <header>
            <NuxtLink to="/" class="logo-container">
                <img src="assets/logo.svg" alt="Callisburg Church of Christ logo">
                <div class="logo-text">
                    Callisburg<br/> Church of Christ
                </div>
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
            backdrop-filter: blur(5px);
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
            padding: 0 var(--mobile-x-padding);
            height: 10rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            box-shadow: var(--box-shadow);
            position: relative;
            z-index: 6;
            background-color: var(--color-white);
            .logo-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1rem;
                text-decoration: none;
                cursor: pointer;
                img {
                    width: 3.5rem;
                    box-shadow: none;
                }
                .logo-text {
                    font-size: 20px;
                    font-family: var(--font-family-secondary);
                    transition: var(--transition);
                    color: var(--color-black);
                }
                &:hover {
                    .logo-text {
                        color: var(--color-primary);
                    }
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
            .mobile-nav-container {
                background-color: var(--color-white);
                position: absolute;
                top: 10rem;
                right: 0;
                z-index: 5;
                padding: 5rem;
                padding-top: 2rem;
                border-bottom-left-radius: var(--border-radius);
                .mobile-nav-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
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
            .logo-container {
                img {
                    width: 3rem;
                }
            }
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
                    font-family: var(--font-family-secondary);
                    color: var(--color-primary);
                    transition: var(--transition);
                    &:hover {
                        color: var(--color-secondary);
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
            .logo-container {
                img {
                    width: 2rem;
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
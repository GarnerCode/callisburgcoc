<template>
    <div id="login-page">
        <div class="header-backdrop"></div>
        <div class="page-header">Administrator Login</div>
        <form @submit="(e) => handleLogin(e)">
            <div class="error errorMsg" v-if="errorMsg">{{ errorMsg }}</div>
            <div class="field">
                <label for="email">Email</label>
                <input type="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password</label>
                <input type="password" v-model="password">
            </div>
            <button class="button button-primary">Login</button>
        </form>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #login-page {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 3rem;
            height: 100vh;
            padding: 0 var(--mobile-x-padding);
            .header-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 60px;
                background-color: var(--color-secondary);
                z-index: 3;
            }
            .page-header {
                font-size: 18px;
                font-weight: bold;
                text-align: center;
            }
            form {
                width: 100%;
                gap: 2rem;
            }
            .errorMsg {
                font-size: 18px;
                text-align: center;
            }
            input {
                padding: 0.5rem 1rem;
                font-size: 16px;
                width: auto;
            }
        }
    }
    @media screen and (min-width: 768px) {
        #login-page {
            align-items: center;
            padding: 0 var(--tablet-x-padding);
            max-width: 550px;
            margin: 0 auto;
            form {
                width: 100%;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        #login-page {
            padding: 0 var(--desktop-x-padding);
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { supabase } from '~/lib/supabase';

    export default defineComponent({
        name: 'LoginPage',
        data: () => {
            return {
                supabase,
                email: '',
                password: '',
                errorMsg: null,
            }
        },
        methods: {
            async handleLogin(e: any): Promise<void> {
                e.preventDefault();
                if (this.email !== '' && this.password !== '') {
                    const { data, error } = await supabase.auth.signInWithPassword({
                        email: this.email,
                        password: this.password
                    });
                    if (data.session) {
                        this.$router.push('/admin');
                    } else if (error) {
                        this.errorMsg = 'Email or Password is incorrect.';
                    }
                }
            }
        }
    })
</script>
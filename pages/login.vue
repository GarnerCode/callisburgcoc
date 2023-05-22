<template>
    <div id="login-page">
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
            <button class="button">Login</button>
        </form>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #login-page {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            height: 100vh;
            .page-header {
                font-size: 18px;
                font-weight: bold;
                text-align: center;
            }
            .errorMsg {
                font-size: 18px;
                text-align: center;
            }
        }
    }
    @media screen and (min-width: 768px) {
        #login-page {
            width: 75%;
            align-items: center;
            margin: 0 auto;
            form {
                width: 100%;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        #login-page {
            max-width: 798px;
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
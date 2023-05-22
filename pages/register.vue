<template>
    <div id="register-page">
        <h1>Register for 2023 Vacation Bible School</h1>
        <img class="poster" src="assets/images/vbs-poster.webp" alt="2023 VBS Poster">
        <form @submit="(e) => submitForm(e)">
            <div class="field">
                <label for="name" :class="{'error': form.child_name.error}">Child or Children's Names</label>
                <div class="error" v-if="form.child_name.error">{{ form.child_name.error }}</div>
                <input v-model="form.child_name.value" type="text" name="name">
            </div>
            <div class="field">
                <label for="age" :class="{'error': form.child_age.error}">Child's Age and Grade Going Into</label>
                <div class="error" v-if="form.child_age.error">{{ form.child_age.error }}</div>
                <input v-model="form.child_age.value" type="text" name="age">
            </div>
            <div class="field">
                <label for="address" :class="{'error': form.address.error}">Address</label>
                <div class="error" v-if="form.address.error">{{ form.address.error }}</div>
                <input v-model="form.address.value" type="text" name="address">
            </div>
            <div class="field">
                <label for="city" :class="{'error': form.city.error}">City</label>
                <div class="error" v-if="form.city.error">{{ form.city.error }}</div>
                <input v-model="form.city.value" type="text" name="city">
            </div>
            <div class="field">
                <label for="zipcode" :class="{'error': form.zip.error}">Zipcode</label>
                <div class="error" v-if="form.zip.error">{{ form.zip.error }}</div>
                <input v-model="form.zip.value" type="text" name="zipcode">
            </div>
            <div class="field">
                <label for="allergies">Allergies <span>(Please leave blank if none exist)</span></label>
                <input v-model="form.allergies.value" type="text" name="allergies">
            </div>
            <div class="field">
                <label for="contact-name" :class="{'error': form.contact_name.error || form.contact_phone.error}">Parent/Emergency Contact</label>
                <div class="error" v-if="form.contact_name.error || form.contact_phone.error">Value is Required</div>
                <input v-model="form.contact_name.value" type="text" name="contact-name" placeholder="Name">
                <input v-model="form.contact_phone.value" type="text" name="contact-phone" placeholder="Phone">
            </div>
            <button class="button">Submit</button>
        </form>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #register-page {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 3rem;
            .poster {
                width: 100%;
                border-radius: var(--border-radius);
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
        }
    }
    @media screen and (min-width: 768px) {
        #register-page {
            width: 75%;
            align-items: center;
            margin: 0 auto;
            form {
                width: 100%;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        #register-page {
            max-width: 798px;
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { formConfig } from '@/const/formConfig';
    import { supabase } from '@/lib/supabase';

    export default defineComponent({
        name: 'RegisterPage',
        data: () => {
            return {
                supabase,
                form: formConfig,
            }
        },
        methods: {
            generateId(): number {
                return Math.round(Date.now() + Math.random());
            },
            formHasError(): boolean {
                let data = Object.values(this.form);
                let error = false;
                data.forEach((field: any) => {
                    field.error = null;
                    if (field.value === '' && field.required) {
                        this.form[`${field.id}`].error = 'Value is required.';
                    }
                    if (field.error) {
                        error = true;
                    }
                });
                return error;
            },
            async submitForm(e: any): Promise<void> {
                e.preventDefault();
                if (!this.formHasError()) {
                    const { error } = await supabase
                    .from('vbs-registrants')
                    .insert({
                        id: this.generateId(),
                        created_at: new Date(),
                        child_name: this.form.child_name.value,
                        child_age: this.form.child_age.value,
                        address: this.form.address.value,
                        city: this.form.city.value,
                        zip: this.form.zip.value,
                        allergies: this.form.allergies.value,
                        contact_name: this.form.contact_name.value,
                        contact_phone: this.form.contact_phone.value,
                    });
                    if (error) {
                        console.error(error);
                    } else {
                        this.$router.push('/submitted');
                    }
                }
            }
        }
    })
</script>
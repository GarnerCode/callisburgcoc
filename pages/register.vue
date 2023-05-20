<template>
    <div id="register-page">
        <h1>Register for 2023 Vacation Bible School</h1>
        <img class="poster" src="assets/images/vbs-poster.webp" alt="2023 VBS Poster">
        <form @submit="(e) => submitForm(e)">
            <div class="field">
                <label for="name">Child or Children's Names</label>
                <input v-model="formData.child_name" type="text" name="name">
            </div>
            <div class="field">
                <label for="age">Child's Age and Grade Going Into</label>
                <input v-model="formData.child_age" type="text" name="age">
            </div>
            <div class="field">
                <label for="address">Address</label>
                <input v-model="formData.address" type="text" name="address">
            </div>
            <div class="field">
                <label for="city">City</label>
                <input v-model="formData.city" type="text" name="city">
            </div>
            <div class="field">
                <label for="zipcode">Zipcode</label>
                <input v-model="formData.zip" type="text" name="zipcode">
            </div>
            <div class="field">
                <label for="allergies">Allergies</label>
                <input v-model="formData.allergies" type="text" name="allergies">
            </div>
            <div class="field">
                <label for="contact-name">Parent/Emergency Contact</label>
                <input v-model="formData.contact_name" type="text" name="contact-name" placeholder="Name">
                <input v-model="formData.contact_phone" type="text" name="contact-phone" placeholder="Phone">
            </div>
            <recaptcha />
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
            }
            label {
                display: block;
                font-size: 18px;
                text-align: left;
                font-weight: bold;
            }
            input {
                padding: 1rem 2rem;
                font-size: 18px;
                width: calc(100% - 5rem);
            }
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { formConfig } from '@/const/formConfig';

    export default defineComponent({
        name: 'RegisterPage',
        data: () => {
            return {
                form: formConfig,
                formData: {
                    id: 0,
                    created_at: new Date(),
                    child_name: formConfig.child_name.value,
                    child_age: formConfig.child_age.value,
                    address: formConfig.address.value,
                    city: formConfig.city.value,
                    zip: formConfig.zip.value,
                    allergies: formConfig.allergies.value,
                    contact_name: formConfig.contact_name.value,
                    contact_phone: formConfig.contact_phone.value,
                }
            }
        },
        methods: {
            formHasError(): boolean {
                console.log('formData: ', this.formData);
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
                    console.log('Form complete, no errors :)');
                } else {
                    console.log('Form has an error :(');
                }
                const token = await this.$recaptcha.getResponse();
                console.log('ReCaptcha token:', token);
            }
        }
    })
</script>
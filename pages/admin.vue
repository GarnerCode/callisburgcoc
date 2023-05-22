<template>
    <div id="admin-page">
        <div class="admin-header" v-if="authorized && !loading && db">
            <div class="message">VBS 2023 Registrants</div>
            <button @click="handleSignout()" class="button">Signout</button>
        </div>
        <div class="message" v-if="!authorized">Authorizing session...</div>
        <div class="message" v-if="authorized && loading">Loading...</div>
        <div class="filters" v-if="authorized && !loading && db">
            <div class="filter">
                <label for="filterAllergy">Display Only Registrants with Allergies</label>
                <input type="checkbox" v-model="toggleAllergies">
            </div>
        </div>
        <div v-if="authorized && !loading && db" class="db-container">
            <div :class="{'has-allergy': item.allergies && item.allergies !== ''}" class="db-item" v-for="(item, index) of filteredDb" :key="index">
                <div class="field">
                    <div class="item-label">Name(s)</div>
                    <div class="item-value">{{ item.child_name }}</div>
                </div>
                <div class="field">
                    <div class="item-label">Age & Grade</div>
                    <div class="item-value">{{ item.child_age }}</div>
                </div>
                <div class="field">
                    <div class="item-label">Address</div>
                    <div class="item-value">{{ item.address }}</div>
                </div>
                <div class="field">
                    <div class="item-label">City</div>
                    <div class="item-value">{{ item.city }}</div>
                </div>
                <div class="field">
                    <div class="item-label">Zipcode</div>
                    <div class="item-value">{{ item.zip }}</div>
                </div>
                <div class="field">
                    <div class="item-label">Allergies</div>
                    <div class="item-value allergy" v-if="item.allergies && item.allergies !== ''">{{ item.allergies }}</div>
                    <div class="item-value" v-if="!item.allergies || item.allergies === ''">None Provided</div>
                </div>
                <div class="field">
                    <div class="item-label">Emergency Contact Name</div>
                    <div class="item-value">{{ item.contact_name }}</div>
                </div>
                <div class="field">
                    <div class="item-label">Emergency Contact Phone</div>
                    <div class="item-value">{{ item.contact_phone }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #admin-page {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            .admin-header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10rem;
                .message {
                    font-weight: bold;
                }
            }
            .message {
                font-size: 18px;
                text-align: center;
            }
            .filter {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1rem;
                label {
                    font-weight: normal;
                }
                input {
                    width: fit-content;
                    cursor: pointer;
                }
            }
            .db-container {
                display: flex;
                flex-direction: column;
                padding-top: 3rem;
            }
            .db-item {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 5rem;
                border-top: 1px solid black;
                padding: 1rem 0;
                &:nth-child(even) {
                    background-color: #cccccc;
                }
                &.has-allergy {
                    background-color: #ff8282;
                }
            }
            .field {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .item-label {
                font-weight: bold;
            }
            .item-value {
                &.allergy {
                    font-weight: bold;
                    color: red;
                    text-decoration: underline;
                }
            }
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { supabase } from '~/lib/supabase';

    export default defineComponent({
        name: 'AdminPage',
        data: () => {
            return {
                supabase,
                authorized: false,
                loading: true,
                db: null,
                filteredDb: null,
                toggleAllergies: false,
            }
        },
        watch: {
            'toggleAllergies': {
                handler: function (val) {
                    if (val) {
                        this.filteredDb = this.db.filter((item: any) => {
                            if (item.allergies && item.allergies !== '') {
                                return item
                            }
                        });
                    } else {
                        this.filteredDb = this.db;
                    }
                }
            }
        },
        async mounted() {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                this.authorized = true;
                this.fetchData();
            } else {
                this.$router.push('/login');
            }
        },
        methods: {
            async fetchData(): Promise<void> {
                const { data, error } = await supabase
                .from('vbs-registrants')
                .select()
                if (data) {
                    data.sort((a: any, b: any) => {
                        return a.child_name.localeCompare(b.child_name);
                    });
                    this.db = data;
                    this.filteredDb = data;
                    this.loading = false;
                }
            },
            async handleSignout(): Promise<void> {
                const { error } = await supabase.auth.signOut();
                this.$router.push('/login');
            }
        }
    })
</script>
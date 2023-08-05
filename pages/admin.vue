<template>
    <div id="admin-page">
        <div class="header-backdrop"></div>
        <div class="admin-header" v-if="authorized && !loading">
            <div class="message">Admin Control Panel</div>
            <button @click="handleSignout()" class="button button-primary">Signout</button>
        </div>
        <div v-if="authorized" class="sermon-container">
            <div class="message">
                <div class="label">Edit Sermon</div>
                <div class="status" :class="{'success': this.status.success, 'error': !this.status.success}">
                    {{ status.message }}
                </div>
            </div>
            <form class="edit-sermon" @submit="(e) => uploadSermon(e)">
                <textarea v-model="sermonData.scripture" name="sermon-text" placeholder="Scripture"></textarea>
                <input v-model="sermonData.verse" type="text" name="sermon-verse" placeholder="Verse">
                <input v-model="sermonData.videoUrl" type="text" name="sermon-video" placeholder="YouTube URL">
                <input class="button button-primary" type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #admin-page {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            padding: 0 var(--mobile-x-padding);
            min-height: 100vh;
            margin-bottom: 100px;
            .header-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 60px;
                background-color: var(--color-secondary);
                z-index: 3;
            }
            .admin-header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-top: 160px;
                .message {
                    font-weight: bold;
                }
            }
            .message {
                font-size: 18px;
                font-weight: bold;
                text-align: left;
                display: flex;
                flex-direction: row;
                gap: 3rem;
                .status {
                    &.success {
                        color: #1a8f1a;
                    }
                    &.error {
                        color: #ca1a1a;
                    }
                }
            }
            .edit-sermon {
                input, textarea {
                    padding: 0.5rem 1rem;
                    font-size: 16px;
                    width: calc(100% - 2rem);
                }
                textarea {
                    height: 250px;
                    resize: none;
                }
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
    @media screen and (min-width: 768px) {
        #admin-page {
            padding: 0 var(--tablet-x-padding);
            .edit-sermon {
                width: 500px;
                .button {
                    width: 280px;
                }
            }
        }
    }
    @media screen and (min-width: 1440px) {
        #admin-page {
            padding: 0 var(--desktop-x-padding);
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { supabase } from '~/lib/supabase';
    import { Sermon } from '~/model/Sermon.interface';

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
                sermonData: {
                    id: 1,
                    created_at: new Date(),
                    scripture: '',
                    verse: '',
                    videoUrl: '',
                    email: '1lostdog@sbcglobal.net',
                } as Sermon,
                eventsData: null as any,
                status: {
                    success: false,
                    message: '',
                }
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
                .from('sermons')
                .select();
                if (data) {
                    console.log('fetched data: ', data);
                    this.sermonData.scripture = data[0].scripture;
                    this.sermonData.verse = data[0].verse;
                    this.sermonData.videoUrl = data[0].videoUrl;
                    this.loading = false;
                }
            },
            async uploadSermon(e: any): Promise<void> {
                e.preventDefault();
                this.status.message = '';
                const { error } = await supabase
                .from('sermons')
                .update(this.sermonData)
                .eq('id', this.sermonData.id);
                if (error) {
                    console.log('There was an error, ', error);
                    this.status.message = 'Error updating sermon';
                    this.status.success = false;
                } else {
                    await this.fetchData();
                    this.status.message = 'Sermon updated!';
                    this.status.success = true;
                }
            },
            async handleSignout(): Promise<void> {
                const { error } = await supabase.auth.signOut();
                this.$router.push('/login');
            }
        }
    })
</script>
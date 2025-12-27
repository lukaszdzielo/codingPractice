<template>

    <div>
        <BaseDialog :show="!!error" title="An Error Occurred" @close="handleError">
            <p>{{ error }}</p>
        </BaseDialog>

        <section>
            <CoachFilter @change-filter="setFilter" />
        </section>
        
        <section>
            <BaseCard>
                <div class="controls">
                    <BaseButton mode="outline" @click="loadCoaches(true)">Refresh</BaseButton>
                    <BaseButton v-if="!isLoggedIn" link to="/auth?redirect=register">Login to Register as Coach</BaseButton>
                    <BaseButton v-if="isLoggedIn && !isCoach && !isLoading" link to="/register">Register as coach</BaseButton>
                </div>
                <div v-if="isLoading">
                    <BaseSpinner></BaseSpinner>
                </div>
                <ul v-else-if="hasCoaches">
                    <CoachItem v-for="coach in filteredCoaches" :key="coach.id"
                        :id="coach.id"
                        :first-name="coach.firstName"
                        :last-name="coach.lastName"
                        :rate="coach.hourlyRate"
                        :areas="coach.areas" />
                </ul>
                <h3 v-else>No coaches found.</h3>
            </BaseCard>

        </section>
    </div>

</template>

<script>
import CoachItem from '@/components/coaches/CoachItem.vue';
import CoachFilter from '@/components/coaches/CoachFilter.vue';

    export default {
        components: {
            CoachItem,
            CoachFilter,
        },
        data() {
            return {
                isLoading: false,
                error: null,
                activeFilters: {
                    frontend: true,
                    backend: true,
                    career: true,
                },
            };
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isAuthenticated;
            },
            isCoach() {
                return this.$store.getters['coaches/isCoach'];
            },
            filteredCoaches() {
                const coaches = this.$store.getters['coaches/coaches'];
                return coaches.filter(coach => {
                    if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
                        return true;
                    } else if (this.activeFilters.backend && coach.areas.includes('backend')) {
                        return true;
                    } else if (this.activeFilters.career && coach.areas.includes('career')) {
                        return true;
                    }
                    return false;
                });
            },
            hasCoaches() {
                return !this.isLoading && this.$store.getters['coaches/coaches'];
            }   
        },
        created() {
            this.loadCoaches();
        },
        methods: {
            setFilter(updatedFilters) {
                this.activeFilters = updatedFilters;
            },
            async loadCoaches(refresh = false) {
                this.isLoading = true;
                try {
                    await this.$store.dispatch('coaches/loadCoaches', { forceRefresh: refresh });
                } catch (error) {
                    this.error = error.message || 'Something went wrong!';
                }
                this.isLoading = false;
            },
            handleError() {
                this.error = null;
            },
        },
    }
</script>

<style scoped>
    ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
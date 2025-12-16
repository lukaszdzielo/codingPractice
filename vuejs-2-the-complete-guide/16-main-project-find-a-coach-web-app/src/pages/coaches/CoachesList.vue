<template>

    <section>
        FILTER
    </section>
    
    <section>
        <div class="cointrols">
            <button>Refresh</button>
            <RouterLink to="/register">Register as coach</RouterLink>
        </div>
        
        <ul v-if="hasCoaches">
            <CoachItem v-for="coach in filteredCoaches" :key="coach.id"
                :id="coach.id"
                :first-name="coach.firstName"
                :last-name="coach.lastName"
                :rate="coach.rate"
                :areas="coach.areas" />
        </ul>
        <h3 v-else>No coaches found.</h3>

    </section>

</template>

<script>
import CoachItem from '@/components/coaches/CoachItem.vue';

    export default {
        components: {
            CoachItem,
        },
        computed: {
            filteredCoaches() {
                return this.$store.getters['coaches/coaches'];
            },
            hasCoaches() {
                return this.$store.getters['coaches/coaches'];
            }   
        }
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
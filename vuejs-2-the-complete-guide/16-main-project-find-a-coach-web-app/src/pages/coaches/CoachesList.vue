<template>

    <section>
        FILTER
    </section>
    
    <section>
        <BaseCard>
            <div class="controls">
                <BaseButton mode="outline">Refresh</BaseButton>
                <BaseButton link to="/register">Register as coach</BaseButton>
            </div>
            <ul v-if="hasCoaches">
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

</template>

<script>
import CoachItem from '@/components/coaches/CoachItem.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseCard from '@/components/ui/BaseCard.vue';

    export default {
        components: {
            CoachItem,
            BaseCard,
            BaseButton,
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
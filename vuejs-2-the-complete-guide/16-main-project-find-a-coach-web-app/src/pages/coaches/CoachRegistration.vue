<template>
    <section>
        <BaseCard>
            <h2>Register as a Coach now!</h2>
            <CoachForm @save-data="saveData"/>
        </BaseCard>
    </section>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm.vue';

export default {
    components: {
        CoachForm,
    },
    computed: {
        isCoach() {
            return this.$store.getters['coaches/isCoach'];
        },
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('coaches/registerCoach', data);
            this.$router.replace('/coaches');
        },
    },
};
</script>

<style scoped>

</style>
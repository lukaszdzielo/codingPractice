<template>
    <div style="border: 1px solid green;">
        <h2>{{ userName }}</h2>
        <h3>{{ userAge }}</h3>
    </div>
</template>

<script>
export default {
    props: ['firstName', 'lastName', 'userAge'],
    computed: {
        userName() {
            return this.firstName + ' ' + this.lastName;
        }
    },
}
</script>
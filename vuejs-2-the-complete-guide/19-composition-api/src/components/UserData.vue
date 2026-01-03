<template>
    <div style="border: 1px solid green;">
        <h2>{{ userName }}</h2>
        <h3>{{ userAge }}</h3>
    </div>
</template>

<script setup>
import { computed, inject } from 'vue';
// export default {
//     props: ['firstName', 'lastName', 'userAge'],
//     computed: {
//         userName() {
//             return this.firstName + ' ' + this.lastName;
//         }
//     },
// }

// // <script setup> i context nie zadziała.
// // console.log(context)
// // context.emit('save-data', 1)
// const emit = defineEmits(['save-data']);
// // Przykład użycia:
// const saveData = () => {
//     emit('save-data', 1); // Odpowiednik context.emit
// };

const userAge = inject('userAge');

const props = defineProps(['firstName', 'lastName']);

const userName = computed( function () {
    return props.firstName + ' ' + props.lastName;
})

</script>
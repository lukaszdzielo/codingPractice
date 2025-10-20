<script setup>
    defineProps({
        elementClass: {
            type: String,
            default: 'w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6',
        },
        modelValue: String,
    })
    defineEmits(['update:modelValue'])
</script>

<template>
    <input type="text" :class="elementClass" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>
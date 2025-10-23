<script setup>
    import { ref, watch } from 'vue'
    const props = defineProps({
        elementClass: {
            type: String,
            default: 'w-full rounded-md bg-white py-1.5 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6',
        },
        modelValue: String,
        decimals: {
            type: Number,
            default: 0,
        },
        min: {
            type: Number,
            default: null,
        },
        max: {
            type: Number,
            default: null,
        },
    })
    const emit = defineEmits(['update:modelValue'])

    const localValue = ref(props.modelValue ?? '');

    const onInput = (e) => {
        console.log('e', e.target.value);
        let value = e.target.value

        // // 1️⃣ Normalize comma to dot internally
        // value = value.replace(',', '.')

        // // 2️⃣ Allow only digits and one dot
        // value = value.replace(/[^0-9.]/g, '')
        // const parts = value.split('.')

        // if (parts.length > 2) {
        //     // If multiple dots, keep only first
        //     value = parts[0] + '.' + parts[1]
        // }

        // // 3️⃣ Limit decimal places
        // if (parts[1] && props.decimals >= 0) {
        //     parts[1] = parts[1].slice(0, props.decimals)
        //     value = parts.join('.')
        // }

        // 4️⃣ Convert back to comma for display
        const displayValue = value.replace('.', ',')

        // // 5️⃣ Validate min/max if numeric
        // const num = parseFloat(value)
        // if (!isNaN(num)) {
        //     if (props.min !== null && num < props.min) return
        //     if (props.max !== null && num > props.max) return
        // }

        localValue.value = displayValue
        console.log('localValue', localValue.value)
        emit('update:modelValue', displayValue)
    }

</script>

<template>
  {{ localValue }}
  
    <input type="text" :class="elementClass" :value="localValue" @input="onInput">
{{ (+modelValue).toLocaleString( 'pl-PL', { useGrouping: true, minimumFractionDigits: 2, maximumFractionDigits : 2} ) }}
</template>
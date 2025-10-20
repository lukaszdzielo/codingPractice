<script setup>
    import { computed } from 'vue'
    defineProps({
        wrapperClass: {
            type: String,
            default: 'grid grid-cols-1',
        },
        elementClass: {
            type: String,
            default: 'col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6',
        },
        iconClass: {
            type: String,
            default: 'pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4',
        },
        modelValue: [String, Number, Object, null],
        options: {
            type: [Array, Object],
            required: true,
        },
    })
const emit = defineEmits(['update:modelValue'])

// 🧠 Normalize all types of inputs into a unified array of { label, value }
const normalizedOptions = computed(() => {
  const opts = props.options

  // 1️⃣ If array of primitives (e.g. [123, 456])
  if (Array.isArray(opts) && typeof opts[0] !== 'object') {
    return opts.map(v => ({ label: v, value: v }))
  }

  // 2️⃣ If array of objects (e.g. [{k1: 123}, {k2: 456}])
  if (Array.isArray(opts) && typeof opts[0] === 'object') {
    return opts.flatMap(obj =>
      Object.entries(obj).map(([k, v]) => ({ label: k, value: v }))
    )
  }

  // 3️⃣ If plain object (e.g. {k1: 123, k2: 456})
  if (!Array.isArray(opts) && typeof opts === 'object') {
    return Object.entries(opts).map(([k, v]) => ({ label: k, value: v }))
  }

  return []
})
</script>

<template>
    {{ options }}
    <div :class="wrapperClass">
        <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)" :class="elementClass">
            <option v-for="(item, index) in options" :key="index" :value="item.value">{{ item.label }}</option>
        </select>
        <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" :class="iconClass">
            <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
        </svg>
    </div>
</template>

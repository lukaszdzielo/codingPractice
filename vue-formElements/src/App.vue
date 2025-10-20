<script setup>
import { ref } from 'vue'
import FormLabel from "./components/form/FormLabel.vue";
import FormInputText from "./components/form/FormInputText.vue";
import FormInputNumber from "./components/form/FormInputNumber.vue";
import FormSelect from "./components/form/FormSelect.vue";

const form = ref({
	 label: "My Label",

	 inputText: "Some text",

	 inputNumber1: '11',
	 inputNumber2: '12',

	 select1: 123,
	 selectOptions1: [123, 456, 789],

	 select2: 'k1',
	 selectOptions2: [{'k1': 123}, {'k2': 456}, {'k3': 789}],

	 select3: 'k1',
	 selectOptions3: {'k1': 123, 'k2': 456, 'k3': 789},
});

const selectedFruit = ref('apple')

</script>

<template>
	<!-- <section class="!pt-0">
		<div class="text-sm" v-for=" (value, key) in form">{{ key }}: {{ value }}</div>
	</section> -->

	<section>
		<div>FormLabel</div>
		<FormLabel id="someId">{{ form.label }}</FormLabel>
		<code>{{ form.label }}</code>
	</section>

	<section>
		<div>FormInput Text</div>
		<FormInputText v-model="form.inputText"/>
		<code>{{ form.inputText }}</code>
	</section>

	<section>
		<div>FormInput Number ( :decimals="2" :min="0" :max="10" )</div>
		<FormInputNumber v-model="form.inputNumber1" :decimals="2" :min="0" :max="10"/>
		<code>{{ form.inputNumber1 }}</code>
	</section>

	<section>
		<div>FormInput Number (:decimals="0" :min="0" :max="100")</div>
		<FormInputNumber v-model="form.inputNumber2" :decimals="0" :min="0" :max="100"/>
		<code>{{ form.inputNumber2 }}</code>
	</section>

	<!-- <section class="">
		<div>FormSelect - Array: {{ form.select1 }}</div>
		<FormSelect v-model="form.select1" :options="form.selectOptions1"/>
	</section>

	<section class="">
		<div>FormSelect - Array with Object: {{ form.select2 }}</div>
		<FormSelect v-model="form.select2" :options="form.selectOptions2"/>
	</section>

	<section class="">
		<div>FormSelect - Object: {{ form.select3 }}</div>
		<FormSelect v-model="form.select3" :options="form.selectOptions3"/>
	</section> -->

	<input type="text" v-model="form.select" />

</template>

<style>
body {
	padding: 2rem;
}
section {
	padding: 12px 0;
	+ section {
		border-top: 1px solid #000;
	}
}

code {
	display: block;
	margin-top: 8px;
	font-size: 12px;
}
</style>

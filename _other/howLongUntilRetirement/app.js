const app = Vue.createApp({
	data() {
		return {
			howManyYears: 25,
			jobs: [
				{
					type: "UoP",
					name: "HM",
					start: "2014-06-01",
					end: "2014-12-09",
					hours: "0.5",
				},
				{
					type: "UoP",
					name: "PW",
					start: "2021-09-01",
					end: "2022-04-22",
					hours: null,
				},
				{
					type: "UoP",
					name: "PW",
					start: "2022-07-25",
					end: "2022-10-24",
					hours: null,
				},
				{
					type: "JDG",
					name: "JDG",
					start: "2023-01-02",
					end: "2025-05-31",
				},
				{
					type: "UoP",
					name: "PESI",
					start: "2025-10-13",
					end: null,
					hours: null,
				},
			],
		};
	},
	computed: {
		sumUp() {
			const days = this.jobs.map((el, i) => this.daysByHours(i));
			const daysSum = days.reduce((a, b) => a + b, 0);
			const { y, m, d } = this.subtractDaysFromYears(daysSum);
			return this.displayAsYMD(y, m, d);
		},
	},
	methods: {
		getDate(i, type) {
			return new Date(this.jobs[i][type] ?? Date.now());
		},
		daysBetween(i) {
			const diffTime = Math.abs(
				this.getDate(i, "end") - this.getDate(i, "start")
			);
			const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
			return diffDays;
		},
		daysByHours(i) {
			const number = this.daysBetween(i) * (this.jobs[i].hours ?? 1);
			const roundDown = Math.floor(number);
			return roundDown;
		},
		displayAsYMD(Y, M, D) {
			return `${Y} years ${M} months and ${D} days`;
		},
		diffInYMD(i) {
			let start = this.getDate(i, "start");
			let end = this.getDate(i, "end");

			if (start > end) [start, end] = [end, start];

			let years = end.getFullYear() - start.getFullYear();
			let months = end.getMonth() - start.getMonth();
			let days = end.getDate() - start.getDate();

			if (days < 0) {
				months--;
				const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
				days += prevMonth.getDate();
			}

			if (months < 0) {
				years--;
				months += 12;
			}

			return this.displayAsYMD(years, months, days);
		},

		subtractDaysFromYears(daysToSubtract) {
			// Ustal datę bazową: np. "25 lat" = 25 lat od dziś wstecz
			const today = new Date();
			const baseDate = new Date(today);
			baseDate.setFullYear(today.getFullYear() - this.howManyYears);

			// Odejmij dni
			const resultDate = new Date(baseDate);
			resultDate.setDate( baseDate.getDate() + daysToSubtract > 0 ? daysToSubtract : daysToSubtract * -1 );

			// Oblicz różnicę (ile lat, miesięcy i dni między resultDate a today)
			let y = today.getFullYear() - resultDate.getFullYear();
			let m = today.getMonth() - resultDate.getMonth();
			let d = today.getDate() - resultDate.getDate();

			if (d < 0) {
				m--;
				const prevMonth = new Date(
					today.getFullYear(),
					today.getMonth(),
					0
				);
				d += prevMonth.getDate();
			}

			if (m < 0) {
				y--;
				diffMonths += 12;
			}

			return { y, m, d };
		},
	},
});

app.mount("#app");

import { readable, writable } from 'svelte/store';

export function nowStoreBuilder() {
	return readable(new Date(), (set) => {
		const setIntervalId = setInterval(() => {
			set(new Date());
		}, 1000);

		return () => {
			clearInterval(setIntervalId);
		};
	});
}

export const nowStore = nowStoreBuilder()

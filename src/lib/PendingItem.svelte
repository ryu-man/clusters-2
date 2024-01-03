<script context="module" lang="ts">
	import { onMount, type SvelteComponent } from 'svelte';

	type Type = 'update' | 'add' | 'extend' | 'transfer' | 'remove' | 'buy' | 'createBid';

	const a = import('$lib/icons/AddWalletIcon.svelte');

	const items: Record<Type, Promise<unknown>> = {
		add: import('$lib/icons/AddWalletIcon.svelte'),
		buy: import('$lib/icons/BuyIcon.svelte'),
		createBid: import('$lib/icons/CreateBidIcon.svelte'),
		extend: import('$lib/icons/ExtendIcon.svelte'),
		remove: import('$lib/icons/RemoveIcon.svelte'),
		transfer: import('$lib/icons/TransferIcon.svelte'),
		update: import('$lib/icons/EditIcon.svelte')
	};
</script>

<script lang="ts">
	import dayjs from 'dayjs';
	import { ExtendIcon, ExternalIcon } from './icons';
	import { nowStore } from '$lib/stores';
	import { derived } from 'svelte/store';

	export let type: Type;
	export let chainId: number;
	export let timeLeftSeconds: number;
	export let transactionHash: string;

	// Create dayjs instance after `timeLeftSeconds` from now
	const timeLeftAt = dayjs().add(timeLeftSeconds, 'seconds');

	// Calculate reactivly the time left
	const timeLeftStore = derived(nowStore, (now) => Math.max(0, timeLeftAt.diff(now, 'seconds')), 0);
</script>

<div class="pending-item">
	<div class="flex gap-3 col-span-full md:col-span-1 md:flex-1">
		<button
			class="w-11 h-11 bg-neutral-100 border border-neutral-300 rounded-lg flex items-center justify-center text-xl shrink-0 dark:bg-neutral-900 dark:border-neutral-700"
		>
			{#await items[type] then comp}
				<svelte:component this={comp.default}></svelte:component>
			{/await}
		</button>

		<div class="flex flex-col justify-between">
			<div class="text-base font-bold">Updating wallet name</div>
			<p class="text-small opacity-50">
				<slot />
			</p>
		</div>
	</div>

	<div class="flex md:flex-col items-center col-span-2 md:col-span-1 md:items-end">
		<div class="flex items-center gap-1">
			<img
				class="w-4 h-4 bg-neutral-300 rounded-full text-2xl leading-[1]"
				src="/images/chain/{chainId}.jpg"
				alt="currency icon"
			/>

			<div class="font-bold truncate">Ethereum</div>
		</div>

		<div class="flex-1 md:hidden"></div>

		<div class="flex gap-1 items-center opacity-50 truncate text-small">
			<div class="text-base align-middle flex justify-center leading-[1]"><ExtendIcon /></div>
			<div class="font-medium truncate">{$timeLeftStore}s left</div>
		</div>
	</div>

	<div class="hidden md:block border-l border-neutral-300 h-full"></div>

	<a
		class="w-10 h-10 flex items-center justify-center border border-neutral-300 dark:border-neutral-700 rounded-md text-xl leading-[1]"
		href="http://test.com/{transactionHash}"
	>
		<ExternalIcon />
	</a>
</div>

<style lang="postcss">
	.pending-item {
		@apply grid gap-6 border border-neutral-200 rounded-lg p-3 items-center bg-white dark:bg-neutral-800 dark:border-neutral-700 text-black dark:text-white;

		grid-template-columns: 1fr auto auto;

		@media (min-width: theme('screens.md')) {
			grid-template-columns: 1fr auto auto auto;
		}
	}
</style>

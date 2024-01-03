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
	import { derived } from 'svelte/store';

	export let type: Type;
	export let chainId: number;
	export let timeLeftSeconds: number;
	export let transactionHash: string;
</script>

<div class="pending-item">
	<div class="flex gap-3 col-span-full md:col-span-1 md:flex-1">
		<button
			class="w-[41px] h-[43px] bg-neutral-100 border border-neutral-300 rounded-[10px] flex items-center justify-center text-xl shrink-0 dark:bg-neutral-900 dark:border-neutral-700"
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
		<div class="flex items-center gap-[5px]">
			<img
				class="w-[17px] h-[17px] bg-neutral-300 rounded-full text-2xl leading-[1]"
				src="/images/chain/{chainId}.jpg"
				alt="currency icon"
			/>

			<div class="font-bold truncate">Ethereum</div>
		</div>

		<div class="flex-1 md:hidden"></div>

		<div class="flex gap-[5px] items-center truncate text-small">
			<div class="text-base leading-[1] opacity-30">
				<ExtendIcon />
			</div>
			<div class="font-medium truncate opacity-50">{timeLeftSeconds}s left</div>
		</div>
	</div>

	<div class="hidden md:block border-l border-neutral-300 h-full"></div>

	<a
		class="w-[30px] h-[30px] md:w-10 md:h-10 flex items-center justify-center border border-neutral-300 dark:border-neutral-700 rounded-md md:rounded-[10px] text-base md:text-xl leading-[1]"
		href="http://test.com/{transactionHash}"
	>
		<ExternalIcon />
	</a>
</div>

<style lang="postcss">
	.pending-item {
		@apply grid border border-neutral-200 rounded-lg py-3 px-4 items-center bg-white dark:bg-neutral-800 dark:border-neutral-700 text-black dark:text-white;

		grid-template-columns: 1fr auto auto;
		gap: theme('spacing.5');

		@media (min-width: theme('screens.md')) {
			grid-template-columns: 1fr auto auto auto;
			gap: theme('spacing.4');
		}
	}
</style>

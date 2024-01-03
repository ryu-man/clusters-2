<script lang="ts">
</script>

<div class="wallets-container px-5 py-4 gap-4 flex flex-col">
	<div class="flex flex-col gap-1">
		<div class="text-large-bold text-neutral-800 dark:text-neutral-200">Pending</div>
		<p class="text-neutral-500 text-base">Onchain actions still being finalized.</p>
	</div>

	<div class="items flex flex-col gap-3">
		<slot />
	</div>
</div>

<style lang="postcss">
	.wallets-container {
	}
</style>

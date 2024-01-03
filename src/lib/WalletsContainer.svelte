<script lang="ts">
</script>

<div class="wallets-container px-5 py-4 gap-4 flex flex-col">

    <div class="">
        <div class="text-large-bold text-neutral-800">Pending</div>
        <p class="text-neutral-500 text-xs">Onchain actions still being finalized.</p>
    </div>

    <div class="items flex flex-col gap-3">
        <slot />

    </div>
</div>

<style lang="postcss">
	.wallets-container {
	}
</style>

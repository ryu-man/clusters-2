<script lang="ts">
	import WalletsContainer from '$lib/WalletsContainer.svelte';
	import PendingItem from '$lib/PendingItem.svelte';

	let timeLeft = 60;
</script>

<WalletsContainer>
	<PendingItem type="update" chainId={1} timeLeftSeconds={timeLeft} transactionHash="abcdef">
		“oldName” → “newName”
	</PendingItem>

	<PendingItem type="add" chainId={1} timeLeftSeconds={timeLeft} transactionHash="abcdef">
		ryeshrimp/main
	</PendingItem>

	<PendingItem type="extend" chainId={1} timeLeftSeconds={timeLeft} transactionHash="abcdef">
		{`by {durationLength}`}
	</PendingItem>

	<PendingItem type="transfer" chainId={1} timeLeftSeconds={timeLeft} transactionHash="abcdef">
		Sending foobar/ to 0xAbCd...
	</PendingItem>

	<PendingItem type="remove" chainId={1} timeLeftSeconds={timeLeft} transactionHash="abcdef">
		You will no longer own foobar/
	</PendingItem>

	<PendingItem type="buy" chainId={1} timeLeftSeconds={timeLeft} transactionHash="abcdef">
		Registered “...”
	</PendingItem>

	<PendingItem type="createBid" chainId={1} timeLeftSeconds={timeLeft} transactionHash="abcdef">
		3.9 ETH for “...”
	</PendingItem>
</WalletsContainer>

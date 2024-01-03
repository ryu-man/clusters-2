<script lang="ts">
	import WalletsContainer from '$lib/WalletsContainer.svelte';
	import PendingItem from '$lib/PendingItem.svelte';
</script>

<WalletsContainer>
	<PendingItem type="update" chainId={1} timeLeftSeconds={60} transactionHash="http://test.com/">
		“oldName” → “newName”
	</PendingItem>

	<PendingItem type="add" chainId={1} timeLeftSeconds={60} transactionHash="http://test.com/">
		ryeshrimp/main
	</PendingItem>

	<PendingItem type="extend" chainId={1} timeLeftSeconds={60} transactionHash="http://test.com/">
		{`by {durationLength}`}
	</PendingItem>

	<PendingItem type="transfer" chainId={1} timeLeftSeconds={60} transactionHash="http://test.com/">
		Sending foobar/ to 0xAbCd...
	</PendingItem>

	<PendingItem type="remove" chainId={1} timeLeftSeconds={60} transactionHash="http://test.com/">
		You will no longer own foobar/
	</PendingItem>

	<PendingItem type="buy" chainId={1} timeLeftSeconds={60} transactionHash="http://test.com/">
		Registered “...”
	</PendingItem>

	<PendingItem type="createBid" chainId={1} timeLeftSeconds={60} transactionHash="http://test.com/">
		3.9 ETH for “...”
	</PendingItem>
</WalletsContainer>

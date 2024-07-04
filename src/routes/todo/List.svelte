<!-- Generic List Component that renders items and passes item information back up to the parent component so that it can render these items however it likes using the slot API-->
<script lang="ts">
	let {items, row, empty} = $props();
</script>

{#if items.length}
	<ul>
		{#each items as item, idx (item.id)}
			<li>{@render row({item, idx})}</li>
		{/each}
	</ul>
{:else}
	{@render empty()}
{/if}

<style>
	li {
		background-color: gray;
	}
</style>

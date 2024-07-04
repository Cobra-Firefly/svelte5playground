<script>
	import SubMenu from './SubMenu.svelte';

	let { subMenu } = $props();
	let subDropdownOpen = $state(false);
</script>

<!-- Controls the dropdown menu link visibility-->
{#if true}
	<li class="sub-dropdown">
		<div onclick={() => (subDropdownOpen = !subDropdownOpen)}>
			<span>{subMenu.subDropdown}</span>
			<span class="material-symbols-outlined {subDropdownOpen && 'icon-rotated'}"
				>chevron-right</span
			>
		</div>
		<SubMenu {subMenu} {subDropdownOpen} />
	</li>
{/if}

<style>
	.sub-dropdown > div {
		cursor: pointer;
	}

	.sub-dropdown > div span:first-child {
		font-weight: bold;
	}

	.sub-dropdown > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.5em;
	}

	.sub-dropdown > div {
		cursor: pointer;
		padding: 0.5em;
	}

	@media screen and (min-width: 800px) {
		.sub-dropdown > div span:last-child {
			display: none;
		}

		.sub-dropdown > div {
			display: none;
		}
	}

	@media screen and (max-width: 800px) {
		.sub-dropdown:hover > div {
			background: #dbdbdb;
		}

		.sub-dropdown > div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 0.5em;
		}
	}
</style>

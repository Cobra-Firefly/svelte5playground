<script>
	let { subMenu, subDropdownOpen } = $props();
</script>

<ul class="sub-menu {subDropdownOpen && 'sub-menu-show'}">
	{#each subMenu.subMenuLinks as subMenuLink, i (i)}
		<li>
			<a href="/">{subMenuLink}</a>
		</li>
	{/each}
</ul>

<style>
	a:hover {
		color: #9b9b9b;
	}

	@media screen and (max-width: 800px) {
		.sub-menu {
			font-size: 0.9em;
			display: none;
		}

		/* Toggle class for Javascript */
		.sub-menu-show {
			display: block;
		}
	}
</style>

<script>
	import Dropdown from './Dropdown.svelte';
	import { links } from './menulinks';

	let menuOpen = $state(false);
</script>

<nav class="navbar">
	<a href="/" class="brand">Brand</a>
	<a href="/events/one">Event One</a>
	<a href="/events/two">Event Two</a>
	<a href="/events/three">Event Three</a>
	<!-- <div class="menu-container {menuOpen && 'mega-menu-show'}">
		<ul class="mega-menu">
			{#each links as link, i (i)}
				{#if link.dropdownEnabled}
					<Dropdown {link} />
				{:else}
					<li>
						<a href="/" class="linklabel"
							>{link.dropdown} <i class="fa-solid fa-chevron-right">></i></a
						>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
	<div class="buttons">
		<button class="btn">Contact</button>
		<button class="menu-btn" onclick={() => (menuOpen = !menuOpen)}>
			{#if menuOpen}
				<span class="material-symbols-outlined">CLOSE</span>
			{/if}
			{#if !menuOpen}
				<span class="material-symbols-outlined">MENU</span>
			{/if}
		</button>
	</div> -->
</nav>

<style>
	ul {
		list-style: none;
	}

	:global(.linklabel) {
		text-decoration: none;
		color: #211551;
	}

	:global(.material-symbols-outlined) {
		transition: 0.3s;
	}

	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: #fff;
		z-index: 2;
	}

	.navbar,
	.buttons {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1em;
	}

	.brand {
		font-weight: bold;
		font-size: 1.3em;
	}

	button {
		border: none;
		transition: 0.3s;
		cursor: pointer;
		margin: 0;
	}

	.btn {
		font-size: 1.1em;
		background: #ff553b;
		padding: 0.5em 1.3em;
		border-radius: 8px;
		color: #fff;
	}

	.btn:hover {
		background: #de4a34;
	}

	.menu-btn {
		margin-left: 1em;
		background: none;
		display: inline-block;
	}

	.menu-btn span {
		font-size: 2em;
	}

	/*Toggle class for Javascript */
	:global(.icon-rotated) {
		transform: rotate(90deg);
	}

	@media screen and (min-width: 800px) {
		.navbar {
			padding: 0 1.5em;
		}

		.mega-menu {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
		}

		.menu-btn {
			display: none;
		}
	}

	@media screen and (max-width: 800px) {
		.navbar {
			padding: 1em 1.5em;
		}

		.menu-container {
			background: #fff;
			position: absolute;
			top: 5em;
			left: 0;
			width: 100%;
			overflow-y: hidden;
			transition: 0.3s ease-in-out;
		}

		/* width */
		.mega-menu::-webkit-scrollbar {
			width: 8px;
		}

		/* Track */
		.mega-menu::-webkit-scrollbar-track {
			background: #f1f1f1;
		}

		/* Handle */
		.mega-menu::-webkit-scrollbar-thumb {
			background: #888;
		}

		/* Handle on Hover */
		.mega-menu::-webkit-scrollbar-thumb:hover {
			background: #555;
		}

		.mega-menu {
			padding: 0 1em 1em 1em;
			height: 100%;
			overflow-y: scroll;
		}

		.mega-menu :global(li) {
			font-weight: bold;
			font-size: 1.1em;
		}

		/* Hide mnue */
		.menu-container {
			height: 0;
		}

		/* Toggle class for Javascript */
		.mega-menu-show {
			height: 50vh;
		}
	}
</style>

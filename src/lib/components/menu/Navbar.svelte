<script>
	import Dropdown from './Dropdown.svelte';

	const links = [
		{
			dropdown: 'New Releases',
			subMenus: [
				{
					id: 1,
					subDropdown: 'Featured',
					subMenuLinks: ['Featured', 'Shop All New Arrivals', 'SKNRS Launch Calendar']
				}
			]
		},
		{
			dropdown: 'Men',
			subMenus: [
				{
					id: 1,
					subDropdown: 'Featured',
					subMenuLinks: ['Featured', 'New Releases', 'SKNRS Launch Calendar', 'Bestsellers']
				},
				{
					id: 2,
					subDropdown: 'Shoes',
					subMenuLinks: [
						'All Shoes',
						'Lyfestyle',
						'Jordan',
						'Running',
						'Football',
						'Basketball',
						'Training and Gym',
						'Skateboarding'
					]
				},
				{
					id: 3,
					subDropdown: 'Clothing',
					subMenuLinks: [
						'All Clothing',
						'Lyfestyle',
						'Tops and T-Shirts',
						'Hoodies and Sweatshirts',
						'Football',
						'Basketball',
						'Training and Gym',
						'Skateboarding'
					]
				},
				{
					id: 4,
					subDropdown: 'Shop by Sport',
					subMenuLinks: [
						'All Sports',
						'Lyfestyle',
						'Tops and T-Shirts',
						'Hoodies and Sweatshirts',
						'Football',
						'Basketball',
						'Training and Gym',
						'Skateboarding'
					]
				},
				{
					id: 5,
					subDropdown: 'Accessories',
					subMenuLinks: ['All Accessories', 'Bags and Backpacks', 'Socks']
				}
			]
		},
		{
			dropdown: 'Women',
			subMenus: [
				{
					id: 1,
					subDropdown: 'Featured',
					subMenuLinks: ['Featured', 'New Releases', 'SKNRS Launch Calendar', 'Bestsellers']
				},
				{
					id: 2,
					subDropdown: 'Shoes',
					subMenuLinks: [
						'All Shoes',
						'Lyfestyle',
						'Jordan',
						'Running',
						'Football',
						'Basketball',
						'Training and Gym',
						'Skateboarding'
					]
				},
				{
					id: 3,
					subDropdown: 'Clothing',
					subMenuLinks: [
						'All Clothing',
						'Lyfestyle',
						'Tops and T-Shirts',
						'Hoodies and Sweatshirts',
						'Football',
						'Basketball',
						'Training and Gym',
						'Skateboarding'
					]
				},
				{
					id: 4,
					subDropdown: 'Shop by Sport',
					subMenuLinks: [
						'All Sports',
						'Lyfestyle',
						'Tops and T-Shirts',
						'Hoodies and Sweatshirts',
						'Football',
						'Basketball',
						'Training and Gym',
						'Skateboarding'
					]
				},
				{
					id: 5,
					subDropdown: 'Accessories',
					subMenuLinks: ['All Accessories', 'Bags and Backpacks', 'Socks']
				}
			]
		},
		{
			dropdown: 'Kids',
			subMenus: [
				{
					id: 1,
					subDropdown: 'Featured',
					subMenuLinks: ['Featured', 'New Releases', 'SKNRS Launch Calendar', 'Bestsellers']
				},
				{
					id: 2,
					subDropdown: 'Shoes',
					subMenuLinks: [
						'All Shoes',
						'Lyfestyle',
						'Jordan',
						'Running',
						'Football',
						'Basketball',
						'Training and Gym',
						'Skateboarding'
					]
				},
				{
					id: 3,
					subDropdown: 'Clothing',
					subMenuLinks: [
						'All Clothing',
						'Lyfestyle',
						'Tops and T-Shirts',
						'Hoodies and Sweatshirts',
						'Football',
						'Basketball',
						'Training and Gym',
						'Skateboarding'
					]
				},
				{
					id: 4,
					subDropdown: 'Shop by Sport',
					subMenuLinks: [
						'All Sports',
						'Lyfestyle',
						'Tops and T-Shirts',
						'Hoodies and Sweatshirts',
						'Football',
						'Basketball',
						'Training and Gym',
						'Skateboarding'
					]
				},
				{
					id: 5,
					subDropdown: 'Accessories',
					subMenuLinks: ['All Accessories', 'Bags and Backpacks', 'Socks']
				}
			]
		},
		{
			dropdown: 'Sale',
			subMenus: [
				{
					id: 1,
					subDropdown: 'Featured',
					subMenuLinks: ['Featured', 'New Releases', 'SKNRS Launch Calendar', 'Bestsellers']
				},
				{
					id: 2,
					subDropdown: 'Shoes',
					subMenuLinks: [
						'All Shoes',
						'Lyfestyle',
						'Jordan',
						'Running',
						'Football',
						'Basketball',
						'Training and Gym',
						'Skateboarding'
					]
				},
				{
					id: 3,
					subDropdown: 'Clothing',
					subMenuLinks: [
						'All Clothing',
						'Lyfestyle',
						'Tops and T-Shirts',
						'Hoodies and Sweatshirts',
						'Football',
						'Basketball',
						'Training and Gym',
						'Skateboarding'
					]
				},
				{
					id: 4,
					subDropdown: 'Shop by Sport',
					subMenuLinks: [
						'All Sports',
						'Lyfestyle',
						'Tops and T-Shirts',
						'Hoodies and Sweatshirts',
						'Football',
						'Basketball',
						'Training and Gym',
						'Skateboarding'
					]
				},
				{
					id: 5,
					subDropdown: 'Accessories',
					subMenuLinks: ['All Accessories', 'Bags and Backpacks', 'Socks']
				}
			]
		},
		{
			dropdown: 'Collections',
			subMenus: [
				{
					id: 1,
					subDropdown: 'Featured',
					subMenuLinks: ['Featured', 'New Releases', 'SKNRS Launch Calendar', 'Bestsellers']
				},
				{
					id: 2,
					subDropdown: 'Shoes',
					subMenuLinks: [
						'All Shoes',
						'Lyfestyle',
						'Jordan',
						'Running',
						'Football',
						'Basketball',
						'Training and Gym',
						'Skateboarding'
					]
				},
				{
					id: 3,
					subDropdown: 'Clothing',
					subMenuLinks: [
						'All Clothing',
						'Lyfestyle',
						'Tops and T-Shirts',
						'Hoodies and Sweatshirts',
						'Football',
						'Basketball',
						'Training and Gym',
						'Skateboarding'
					]
				},
				{
					id: 4,
					subDropdown: 'Shop by Sport',
					subMenuLinks: [
						'All Sports',
						'Lyfestyle',
						'Tops and T-Shirts',
						'Hoodies and Sweatshirts',
						'Football',
						'Basketball',
						'Training and Gym',
						'Skateboarding'
					]
				},
				{
					id: 5,
					subDropdown: 'Accessories',
					subMenuLinks: ['All Accessories', 'Bags and Backpacks', 'Socks']
				}
			]
		}
	];

	let menuOpen = $state(false);
</script>

<nav class="navbar">
	<a href="/" class="brand">Brand</a>
	<div class="menu-container {menuOpen && 'mega-menu-show'}">
		<ul class="mega-menu">
			{#each links as link, i (i)}
				<Dropdown {link} />
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
	</div>
</nav>

<style>
	:global(ul) {
		list-style: none;
	}

	:global(a) {
		text-decoration: none;
		color: #000;
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

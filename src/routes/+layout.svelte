<script lang="ts">
	import type { Snippet } from 'svelte';
	import Navbar from '$lib/components/menutwo/Navbar.svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<Navbar />

{@render children()}

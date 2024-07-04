<script lang="ts">
	// import {PortableText} from "@portabletext/svelte";
	import { useQuery } from '@sanity/svelte-loader';
	import { urlFor } from '$lib/sanity/image';

	let { data } = $props();
	const q = useQuery(data);
	let { data: event } = $derived($q);
</script>

<svelte:head>
	<title>Event</title>
</svelte:head>

<section class="event">
	<div class="event__container section flow">
		<h1 class="h2">{event.name}</h1>

		<div class="dates">
			<!-- Sale Dates-->
			{#if event.date}
				<div class="flow">
					<h2 class="h3">Sale Dates</h2>
					<!-- <ul class="sale-dates">
						{#each event.date as date}
							<li>
								<span class="clr-primary-500">{new Date(date.start)}</span>
								{(new Date(date.start), 'h:mm aaaa')}
								to
								{(new Date(date.end), 'h:mm aaaa')}
							</li>
						{/each}
					</ul> -->
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	iframe {
		aspect-ratio: 16 / 9;
		width: 100%;
	}

	.gridder {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
	}

	.event-cover-mobile {
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;

		min-block-size: 50vh;
		place-content: center;
		text-align: center;
	}

	.event-cover-desktop {
		display: none;
	}

	.sale-dates li {
		list-style-type: none;
	}

	.dates {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>

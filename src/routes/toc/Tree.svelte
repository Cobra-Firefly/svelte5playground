<script lang="ts">
	import {
		type TableOfContentsItem,
		type TableOfContentsElements,
		melt,
	} from "@melt-ui/svelte";

	export let tree: TableOfContentsItem[] = [];
	export let activeHeadingIdxs: number[];
	export let item: TableOfContentsElements["item"];
	export let level = 1;
</script>

<ul class="list {level !== 1 ? 'pl-4' : ''}">
	{#if tree && tree.length}
		{#each tree as heading, i (i)}
			<li style="margin-top: 0; padding-top: 0.5rem;">
				<a href="#{heading.id}" use:melt={$item(heading.id)} class="headinga">
					<!--
            Along with the heading title, the original heading node
            is also passed down, so you can display headings
            however you want.
          -->
					{@html heading.node.innerHTML}
				</a>
				{#if heading.children && heading.children.length}
					<svelte:self
						tree={heading.children}
						level={level + 1}
						{activeHeadingIdxs}
						{item}
					/>
				{/if}
			</li>
		{/each}
	{/if}
</ul>

<style lang="scss">
	.list {
		margin: 0;
		list-style-type: none;
	}

	.pl-4 {
		padding-left: 1rem;
	}

	.headinga {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		color: gray;
		text-decoration-line: none;
		transition-property: color, background-color, border-color,
			text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	.headinga[data-active] {
		color: var(--primary-500);
	}
</style>

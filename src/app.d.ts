import type { LoaderLocals } from '@sanity/svelte-loader';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	interface Document {
		startViewTransition?(callback: () => Promise<void>): void;
	}

	interface Window {
		toggleTheme?(): void;
	}

	namespace App {
		// interface Error {}
		interface Locals extends LoaderLocals {}
		// interface Locals {
		// 	lootRepo: LootRepoInterface;
		// }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

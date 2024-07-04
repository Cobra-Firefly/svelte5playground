import type {Event} from "../../../lib/types/sanity.types.js";
import {eventQuery as query} from "$lib/sanity/queries";

export const load = async (event) => {
	const {loadQuery} = event.locals;
	const {slug} = event.params;

	const params = {slug};
	const initial = await loadQuery<Event>(query, params);

	// We pass the data in a format that is easy for `useQuery` to consume in the
	// corresponding `+page.svelte` file, but you can return the data in any
	// format you like.
	return {
		query,
		params,
		options: {initial},
	};
};

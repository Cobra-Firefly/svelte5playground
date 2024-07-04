<script lang="ts">
	let {placeholder, onEnter, ...props} = $props();

	function handleKeyup(evt) {
		if (evt.key !== "Enter") return;

		onEnter?.(evt.target.value);
		evt.target.value = "";
	}
</script>

<input
	{placeholder}
	aria-label={placeholder}
	onkeyup={handleKeyup}
	{...props}
/>

<style>
	input {
		padding: 10px;
		border: 1px solid grey;
	}
</style>

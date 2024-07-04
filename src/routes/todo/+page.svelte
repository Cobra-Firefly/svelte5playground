<script lang="ts">
	import List from "./List.svelte";
	import Input from "./Input.svelte";
	import {clock} from "./clock.svelte.js";

	let id = 0;
	let todos = $state([]);
	const openTodos = $derived(todos.filter((t) => !t.done).length);

	function addTodo(text) {
		todos.push({text, done: false, id: id++});
		todos = todos;
	}
</script>

<div class="clock">
	{clock.time}
</div>

<Input placeholder="Add new todo" onEnter={addTodo} />

<List items={todos}>
	{#snippet row({item, idx})}
		<button
			class:crossed={item.done}
			onclick={() => (todos[idx].done = !todos[idx].done)}
			>{item.text}
		</button>
	{/snippet}

	{#snippet empty()}
		<p>Nothing to do yet</p>
	{/snippet}
</List>

{#if todos.length}
	<p>{openTodos} todo(s) left</p>
{/if}

<style>
	.clock {
		text-align: right;
	}

	button {
		padding: 5px 10px;
		border: none;
		min-width: 150px;
		text-align: left;
	}

	.crossed {
	}
</style>

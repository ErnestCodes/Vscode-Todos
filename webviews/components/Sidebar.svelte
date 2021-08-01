<script lang="ts">
  import { onMount } from "svelte";

  let todos: Array<{ text: string; completed: boolean }> = [];
  let text = "";

  // This function is called when the component first gets mounted
  onMount(() => {
    window.addEventListener("message", (event) => {
      const message = event.data;
      console.log({ message });
      switch (message.type) {
        case "add-Todo":
          todos = [...todos, { text: message.value, completed: false }];
      }
    });
  });
</script>

<form
  on:submit|preventDefault={() => {
    todos = [...todos, { text, completed: false }];
    text = "";
  }}
>
  <input type="text" bind:value={text} />
</form>

<ul>
  {#each todos as todo (todo.text)}
    <li
      class:completed={todo.completed}
      on:click={() => {
        todo.completed = !todo.completed;
      }}
    >
      {todo.text}
    </li>
  {/each}
</ul>

<!-- svelte-ignore missing-declaration -->
<button
  on:click={() => {
    tsvscode.postMessage({
      type: "onInfo",
      value: "info message",
    });
  }}>click me</button
>

<!-- svelte-ignore missing-declaration -->
<button
  on:click={() => {
    tsvscode.postMessage({
      type: "onError",
      value: "error message",
    });
  }}>click me for err</button
>

<!-- <pre>
    class={todo.completed ? "completed" : ""}
    {JSON.stringify(todos, null, 2)}
</pre> -->
<style>
  .completed {
    text-decoration: line-through;
  }
</style>

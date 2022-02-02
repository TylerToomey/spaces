<script>
import { Row, Col } from 'sveltestrap';
import Result  from './Result.svelte';
import { fade } from 'svelte/transition'
let fetchJson = fetch('data_example.json').then(res => res.json());
</script>

{#await fetchJson}
{:then result}

<!-- Once we have fetched the appropriate data, display it-->

<div class="middle-container"transtion:fade>
    <div class="overflow-auto">
    {#if result}
        {#each result as item}
        <Row>
            <div class="col text-center" > H E L L O </div>
        </Row>
        {/each}
    {:else}
    {/if}
</div>
</div>

{/await}


<script>
import { Row, Col } from 'sveltestrap';
import Result  from './Result.svelte';

let fetchJson = fetch('data_example.json').then(res => res.json());
</script>

{#await fetchJson}
    <p>Loading JSON</p>
{:then result}

<!-- Once we have fetched the appropriate data, display it-->
<div class="middle-container">
    <div class="overflow-auto">
    {#if !result}
        {#each result as item}
        <Row>
            <Result></Result>
        </Row>
        {/each}
    {:else}
    .
    {/if}
</div>
</div>

{/await}


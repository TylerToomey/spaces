<script>
import { Row, Col } from 'sveltestrap';
import { Result } from './Result.svelte';
import data from '../data_example.json'

</script>

<Row>
    {#each data as item}
    <h1> {data.title} </h1>
    {/each}
</Row>
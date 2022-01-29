<script>
    import { FormGroup, Row} from 'sveltestrap';
    import { onMount, onDestroy } from 'svelte'

    import { placeholders, searchTerm }  from '../store.js'

    let index = 0;
    let searchValue = ""

    $:placeholder = "e.g " + $placeholders[index];

    // When the Search.svelte component is mounted in the DOM
    // we begin to probe the store.js for the placeholder information
    // and bound our index incrementer accordingly. 
     onMount(async ()=>{
        const PLACEHOLDER_LENGTH = $placeholders.length;        
        const interval = setInterval(() => {
            index === PLACEHOLDER_LENGTH-1 ? index = 0 : index = index + 1 // Increments the index and resets to 0 at array bound
        },3900);

        index = Math.round((Math.random()*PLACEHOLDER_LENGTH-1))

        return () => clearInterval(interval); // Runs onDestroy 
    })

</script>

<Row class="d-flex h-100 align-items-end">
    <FormGroup class="p-5" id="searchbar">
        <input class="form-control"
        type="search"
        name="search"
        id="exampleSearchs"
        placeholder="{placeholder}"
        bind:value={$searchTerm}
        />
    </FormGroup>
</Row>

<style>
</style>
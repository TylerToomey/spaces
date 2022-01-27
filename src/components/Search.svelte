<script>
    import { FormGroup, Label, Input, Row} from 'sveltestrap';
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte'
    import { placeholders }  from '../store.js'

    let index = 0;
    $:placeholder = $placeholders[index];

    // When the Search.svelte component is mounted in the DOM
    // we begin to probe the store.js for the placeholder information
    // and bound our index incrementer accordingly. 
     onMount(async ()=>{
        const PLACEHOLDER_LENGTH = $placeholders.length;
        index = Math.round((Math.random()*PLACEHOLDER_LENGTH-1))

        const interval = setInterval(() => {
            index === PLACEHOLDER_LENGTH-1 ? index = 0 : index = index + 1
        },3900);
    })
</script>

<Row class="d-flex h-100 align-items-end">
    <FormGroup class="p-5" id="searchbar">
        <Label for="exampleSearch"></Label>
        <input class="form-control"
        type="search"
        name="search"
        id="exampleSearch"
        placeholder="e.g {placeholder}"
        on:click={(e)=>{console.log(`${e} clicked`)}}
        />
    </FormGroup>
</Row>

<style>
</style>
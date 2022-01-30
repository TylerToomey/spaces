<script>
    import { Row, Container, Input, InputGroup, Button } from 'sveltestrap';
    import { onMount, createEventDispatcher } from 'svelte'
    import { fade } from 'svelte/transition'

    import { placeholders, searchTerm }  from '../store.js'

    const dispatch = createEventDispatcher();

    let index = 0;
    let enabled = true;

    $:placeholder = "e.g " + $placeholders[index];

    // When the Search.svelte component is mounted in the DOM
    // we begin to probe the store.js for the placeholder information
    // and bound our index incrementer accordingly. 
     onMount(async () => {
        const PLACEHOLDER_LENGTH = $placeholders.length;        
        const interval = setInterval(() => {
            index === PLACEHOLDER_LENGTH-1 ? index = 0 : index = index + 1 // Increments the index and resets to 0 at array bound
        },3900);

        index = Math.ceil((Math.random()*PLACEHOLDER_LENGTH-1)) // Randomize the starting placeholder so it's not always the same

        return () => clearInterval(interval); // clears our interval timer onDestroy 
    })

	function requestData(value) {
		dispatch('requestData', {
            request : value
        });
	}

    function onKeyPress(key){
        key.code === 'Enter' ? requestData($searchTerm) : console.log("nada");
    }   

</script>

<div class="middle-container">
    <Container class="container middle">
        <Row class="d-flex h-100 align-items-end">
            <InputGroup class="p-5" id="searchbar" >
                <Input
                type="input"
                name="search"
                id="exampleSearchs"
                placeholder="{placeholder}"
                bind:value={$searchTerm}
                on:keypress={onKeyPress}
                />
                <Button class="btn-dark text-white" on:click={requestData($searchTerm)}>
                    Search
                </Button>
            </InputGroup>
        </Row>
    </Container>
</div>

<style>
</style>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
  <title> Smelly </title>
</svelte:head>

<script>	
	import SearchBar  from './components/SearchBar.svelte'
	import AppContainer from './components/AppContainer.svelte'
	import ResultsContainer from './components/ResultsContainer.svelte'

	const COLORS = {
		SUCCESS:100,
		FAIL:0,
		PENDING:180
	}

	function requestData(event){
		console.log("Test", event.detail);
		showResults = true;
	}

	let showResults = false;
</script>

<AppContainer>
	<SearchBar on:requestData={requestData}/>
	{ #if showResults }
	<ResultsContainer/>
	{ /if }
</AppContainer>

<style>
</style>


<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head>

<script>
	import { Col, Container, Row, FormGroup, Input, Label } from 'sveltestrap';

	import SearchBar  from './components/SearchBar.svelte'
	import AppContainer from './components/AppContainer.svelte'
	import ResultsContainer from './components/ResultsContainer.svelte'

	const COLORS = {
		SUCCESS:100,
		FAIL:0,
		PENDING:180
	}

	function requestData(event){
		console.log(event.detail);
	}

</script>

<AppContainer>
	<SearchBar on:requestData={requestData}/>
	<ResultsContainer/>
</AppContainer>

<style>
</style>

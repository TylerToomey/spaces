
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head>

<script>
	import { Col, Container, Row, FormGroup, Input, Label } from 'sveltestrap';

	import  Search  from './components/Search.svelte'
	import AppContainer from './components/AppContainer.svelte'

	const COLORS = {
		SUCCESS:100,
		FAIL:0,
		PENDING:180
	}
</script>

<AppContainer>
	<Search/>
</AppContainer>

<style>
</style>

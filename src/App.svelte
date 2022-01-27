
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
	<!--<link rel="stylesheet" href="https://nsscdn.rowan.edu/public/asa/css/v2/rowan-bootstrap.min.css">-->
	<title> Test Environment </title>
</svelte:head>

<script>
	import { Col, Container, Row, FormGroup, Input, Label } from 'sveltestrap';
	import Search from './components/Search.svelte'
</script>
<div id="root">
	<div class="search-container">
		<Container class="container middle">
			<Search></Search>
		</Container>
	</div>
</div>
<div></div>
<style>
	#root { min-height: 100vh; }
		
</style>

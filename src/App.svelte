
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head>

<script>
	import { Col, Container, Row, FormGroup, Input, Label } from 'sveltestrap';
	import  Search  from './components/Search.svelte'
	
	import { searchTerm } from './store'

	const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
	const getRandom = () => Math.round(Math.random()*250)

	let hue = 0;

	$:targetHue = clamp($searchTerm.length,0,10) * 25

	const interpolate = setInterval(()=>{
		hue += (targetHue - hue) * 0.1;
	},10)
</script>


<div id="root" style="color:white;background-color:hsl({hue}, 100%, 50%)">
	<div class="search-container">

		<Container class="container middle">
			<Search/>
		</Container>
		
	</div>
</div>


<style>
	#root { min-height: 100vh; }
</style>

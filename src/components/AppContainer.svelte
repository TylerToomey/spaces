<!-- This component is just for abstracting the 
    background / body of the app and changing the 
    background color based on the search terms
-->
<script>
    import { onMount } from 'svelte';
    import { searchTerm } from '../store';

    const MAX_CHARACTERS = 18;

	const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
	
	// Create animation frame loop for background color change on component creation
	onMount(() => {
		let frame;
		function loop() {
			frame = requestAnimationFrame(loop);
			if(Math.round(hue) != Math.floor(targetHue)){
				hue += (targetHue - hue) * 0.075;
			}
		}
		loop();
		return () => cancelAnimationFrame(frame);
	});

	let hue = 0;
	$: targetHue = clamp($searchTerm.length,0,MAX_CHARACTERS) * (255/MAX_CHARACTERS) // Adjust the target hue to interpolate to on searchTerm length change
</script>

<div id="root" style="color:white;background-color:hsl({hue}, 50%, 50%)">
    <slot></slot>
</div>

<style>
#root { min-height: 100vh; }
</style>

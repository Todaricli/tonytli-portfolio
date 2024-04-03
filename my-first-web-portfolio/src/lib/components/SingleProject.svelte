<script>
	export let project
	let showCardBack = false;
	const toggleShowBack = () => (showCardBack = !showCardBack);

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => toggleShowBack()} class="flip-box w-full h-96 box-content rounded-3xl">
	<div class="flip-box-inner w-full h-full flex flex-col rounded-3xl justify-center items-center relative bg-black shadow-[0px_5px_5px_5px_rgb(44,50,56)]" class:fliped={showCardBack}>
		<div class="flip-box-front w-full h-full rounded-3xl absolute">
			<div class="image-cont w-full p-2.5 rounded-3xl">
				<img class="w-full h-auto p-2.5 max-h-full" src={project.image} alt={project.name}/>
			</div>
			<div>
				<h2 class="text-center text-white">{project.name}</h2>
			</div>
		</div>

		<div class="flip-box-back w-full h-full rounded-3xl absolute flex flex-col justify-center items-center text-white">
			<h2>{project.name}</h2>
			<p class="text-xs">{@html project.desc}</p>
		</div>
	</div>
</div>

<style>
	.flip-box {
		perspective: 500px;
        transition: transform 300ms;
	}

    .flip-box:hover {
        transform: scale(1.05);
    }

	.flip-box:hover > .flip-box-inner {
		cursor: pointer;
	}

	.fliped {
		transform: rotateY(180deg);
	}

	.flip-box-inner {
		transition: transform 1500ms;
		transform-style: preserve-3d;
	}

	.flip-box-front,
	.flip-box-back {
		box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
		backface-visibility: hidden;
	}

	.flip-box-back {
		transform: rotateY(180deg);
	}
	.image-cont {
		height: 80%;
        box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
	}

	/* * {
		border: solid red 1px;
	} */
</style>

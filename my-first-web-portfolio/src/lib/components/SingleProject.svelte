<script>
	export let project;
	let showCardBack = false;
	const toggleShowBack = () => (showCardBack = !showCardBack);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => toggleShowBack()} class="flip-box w-full box-content rounded-3xl min-h-96 h-fit pb-2">
	<div
		class="flip-box-inner p-4 w-full min-h-96 h-fit flex flex-col rounded-3xl justify-center items-center relative bg-black shadow-[0px_5px_5px_5px_rgb(44,50,56)]"
		class:fliped={showCardBack}
	>
		<div class="flip-box-front w-full h-full rounded-3xl absolute">
			<div class="image-cont w-full p-2.5 rounded-3xl">
				<img
					class="w-full h-auto p-2.5 max-h-full opacity-50"
					src={project.image}
					alt={project.name}
				/>
			</div>
			<div>
				<h2 class="text-center tracking-wide px-2 text-xl text-white">{project.name}</h2>
			</div>
		</div>

		<div
			class="flip-box-back p-4 w-full min-h-96 rounded-3xl absolute flex flex-col justify-start items-start text-white"
		>
			<div class="flip-box-back-key-info px-2 tracking-wider">
				<h2>{project.name}</h2>
				<h2>Duration: {project.duration}</h2>
				<h2>Client: {project.company}</h2>
			</div>
			<div class="flex flex-col items-center w-full pt-6 tablet:pt-0 text-sky-100">
				<div class="grid grid-cols-3 gap-2 py-2">
					{#if project.technologies && project.technologies.length > 0}
						{#each project.technologies as stack}
							<span class="technologies-link pr-2 border-r-2 w-18 text-xs hover:animate-pulse hover:translate-x-4 hover:z-10 text-center"
								><a href="https://www.google.co.nz/search?q={stack}" target="_blank">{stack}</a></span
							>
						{/each}
					{/if}
				</div>
			</div>
			<div class="flex flex-col px-2 justify-center items-center w-full pt-6 tablet:pt-2">
				<p class="text-xs">{@html project.desc}</p>
			</div>
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

	.flip-box-front {
		box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
		backface-visibility: hidden;
		font-family: Bebas, Arial, Helvetica, sans-serif;
	}

	.flip-box-back {
		box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
		backface-visibility: hidden;
		transform: rotateY(180deg);
		font-family: DMSans, Arial, Helvetica, sans-serif;
	}
	.image-cont {
		height: 80%;
		box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
	}
	.flip-box:hover img {
		animation: image-effect 1s forwards linear;
	}
	.technologies-link {
		transition-property: transform, z-index;
		transition-duration: 500ms;
	}
	.flip-box-back-key-info {
		font-family: Teko, Arial, Helvetica, sans-serif;
	}
</style>

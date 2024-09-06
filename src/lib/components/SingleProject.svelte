<script>
	export let project;
	let showCardBack = false;
	const toggleShowBack = () => (showCardBack = !showCardBack);

	const isPrivateProj = project.github === 'private' || project.website === 'private';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => toggleShowBack()} class="flip-box w-full flex flex-col items-center justify-center rounded-3xl pb-2">
	<div
		class="flip-box-inner p-4 min-w-80 max-w-96 w-full h-96 flex flex-col rounded-3xl justify-center items-center relative bg-black shadow-[0px_5px_5px_5px_rgb(44,50,56)]"
		class:fliped={showCardBack}
	>
		<div class="flip-box-front w-full rounded-3xl absolute">
			<div class="image-cont h-96 p-2.5 rounded-3xl flex flex-col items-center">
				<img class="w-full max-w-96 p-2.5 opacity-50" src={project.image} alt={project.name} />
			</div>
			<div>
				<h2 class="text-center tracking-wide px-2 text-xl text-white">{project.name}</h2>
			</div>
			{#if project.github && project.website}
				<div class="flex flex-row justify-evenly px-2 w-full pt-6 text-emerald-400">
					{#if isPrivateProj}
						<div class="px-5">
							<p>Due to this web app is now linking to police communication system for testing, no Demo or GitHub Repo provided</p>
						</div>
					{:else}
						<div
							class="bg-slate-200 rounded-xl p-2 hover:scale-105 hover:animate-pulse w-16 text-center"
						>
							<a href={project.github} target="_blank">Github</a>
						</div>
						<div
							class="bg-slate-200 rounded-xl p-2 hover:scale-105 hover:animate-pulse w-16 text-center"
						>
							<a href={project.website} target="_blank">Demo</a>
						</div>
					{/if}
				</div>
			{/if}
		</div>

		<div
			class="flip-box-back p-2 w-full min-h-96 rounded-3xl absolute flex flex-col justify-start items-start text-white overflow-hidden"
		>
			<div class="flip-box-back-key-info px-2 tracking-wider">
				<h2>{project.name}</h2>
				<h2>Duration: {project.duration}</h2>
				<h2>Client: {project.company}</h2>
			</div>
			<div class="flex flex-col items-center w-full pt-0 text-sky-100">
				<div class="grid grid-cols-3 gap-2 py-2">
					{#if project.technologies && project.technologies.length > 0}
						{#each project.technologies as stack}
							<span
								class="technologies-link pr-2 border-r-2 w-18 text-xs hover:animate-pulse hover:translate-x-4 hover:z-10 text-center"
								><a href="https://www.google.co.nz/search?q={stack}" target="_blank">{stack}</a
								></span
							>
						{/each}
					{/if}
				</div>
			</div>
			<div
				class="flex flex-col px-2 justify-center items-center w-full pt-2 overflow-hidden"
			>
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
		backface-visibility: hidden;
		font-family: Bebas, Arial, Helvetica, sans-serif;
	}

	.flip-box-back {
		backface-visibility: hidden;
		transform: rotateY(180deg);
		font-family: Titillium, Arial, Helvetica, sans-serif;
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

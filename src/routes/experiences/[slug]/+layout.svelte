<script>
	import { onMount } from 'svelte';
	export let data;
	import { isExperienceMounted } from '../../../lib/store/store';

	let ScreenWidth;
	let clickToDrop = false;
	let path;
	let timer;

	const openIcon = 'fa-bars-staggered';
	const closeIcon = 'fa-angle-up';

	function expandExperienceNavlinks() {
		if(ScreenWidth > 740) {
			clickToDrop = false;
		}
	}

	function changeState() {
		$isExperienceMounted = false;

		timer = setTimeout(() => {
			$isExperienceMounted = true;
			path = window.location.pathname;
		}, 200);
	}

	onMount(() => {		
		path = window.location.pathname;
		
		return () => {
			clearTimeout(timer)
		}
	});
</script>

<svelte:window on:resize={expandExperienceNavlinks} bind:innerWidth={ScreenWidth} />

<div class="experience-main-container w-full flex flex-col justify-start items-center px-8 pt-24">
	<div
		class="pt-12 flex flex-col justify-center items-center tablet:items-start tablet:w-5/6 tablet:grid tablet:grid-cols-6 gap-4"
	>
		<main class="col-span-4 experience-main-content-container laptop:min-h-screen" class:shade-background={clickToDrop}>
			<slot />
		</main>
		<aside class="hidden tablet:flex col-span-2 w-5/6 tablet:w-auto">
			<div class="flex flex-col">
				<h2 class="other-experience text-gray-400 text-2xl">OTHER EXPERIENCES</h2>
				<div class="flex flex-col items-center mt-4">
					<ul>
						{#each data.experiencesData as singleExperience}
							<li
								class="experience-link text-white hover:translate-x-5 hover:animate-pulse pb-1"
								class:current-page-link={'/experiences/' + singleExperience.slug === path}
							>
								<a on:click={changeState} href="/experiences/{singleExperience.slug}"
									>{singleExperience.title}</a
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</aside>
		<div class="top-10 right-5 fixed">
			<button
				on:click={() => clickToDrop = !clickToDrop}
				class="text-white text-1xl rounded-3xl tablet:hidden z-20 hover:animate-pulse"
				><i class="w-full fa-solid {clickToDrop ? closeIcon : openIcon} text-white text-3xl"
				></i></button
			>
		</div>
		<div
			class="dropdown-menu fixed right-5 top-16 w-80 rounded-2xl overflow-hidden z-10 hidden p-2"
			class:dropdown={clickToDrop}
		>
			<h2 class="other-experience text-gray-400 text-2xl">OTHER EXPERIENCES</h2>
			<div class="flex flex-col text-xl items-center gap-4 mt-4 text-white">
				<ul>
					{#each data.experiencesData as singleExperience}
						<li
							class="experience-link hover:translate-x-5 hover:animate-pulse"
							class:current-page-link={'/experiences/' + singleExperience.slug === path}
						>
							<a on:click={changeState} href="/experiences/{singleExperience.slug}"
								>{singleExperience.title}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	.other-experience {
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		font-family: teko, Arial, Helvetica, sans-serif;
	}

	.experience-main-container {
		animation: experience-effect 1s forwards linear;
	}

	.experience-main-content-container {
		transition: opacity 1000ms;
	}
	.experience-link {
		transition: transform 1000ms;
		font-family: Titillium, Arial, Helvetica, sans-serif;
	}
	.current-page-link {
		border-bottom: 1px solid rgba(256, 256, 256, 0.2);
		transition: border 1000ms;
	}
	.dropdown-menu {
		animation: dropdown-items-effect 1s forwards linear;
		background-color: rgba(0, 0, 0, 0.1);
	}

	@media (max-width: 740px) {
		.dropdown {
			display: block;
		}
	}
	.shade-background {
		opacity: 25%;
	}
</style>

<script>
	export let data;
	import SingleProject from '../../lib/components/SingleProject.svelte';
	import { onMount } from 'svelte';
	import { globalDataLoadingDuration } from '../../lib/store/store';
	import Loader from '../../lib/components/Loader.svelte';
	import { mounted } from '../../lib/store/store';

	$mounted = false;
	const loadingMessage = 'Projects.';
	let timer;
	
	onMount(() => {
		timer = setTimeout(() => {
			$mounted = true;
		}, $globalDataLoadingDuration);
		return () => clearTimeout(timer);
	});
</script>

<Loader message={loadingMessage}></Loader>
<div
	class="project-main-container flex flex-col gap-5 justify-center item-center w-full h-full pb-24 tablet:px-16 laptop:px-16"
	class:hide={!$mounted}
>
	<div
		class="project-main-desc-div pl-14 pb-12 flex flex-col items-start w-full tablet:pb-16 laptop:pb-24 pt-24 laptop:min-h-screen"
	>
		<div
			class="project-main-desc w-[460px] text-black text-lg tablet:pb-4 tablet:pl-16 laptop:pl-14 laptop:pb-24 desktop:pb-32"
		>
			<p>
				During my tenure at various prestigious companies like Apple, Google, SpaceX, Amazon,
				Facebook, and Tencent, I engaged in diverse projects that showcased my expertise. From
				developing e-commerce websites and social media platforms to crafting online learning
				platforms and event management systems, each project spanned several months and utilized
				cutting-edge technologies such as HTML, CSS, JavaScript, React, Vue.js, Angular, Node.js,
				Express, and MongoDB.
			</p>
		</div>
		<h1
			class="project-title text-white text-6xl tablet:scale-[1.8] tablet:translate-x-28 laptop:scale-[2.8] laptop:translate-x-80 laptop:pr-0 opacity-70 pt-10 laptop:pt-4 desktop:scale-[3.5] desktop:translate-x-[500px]"
		>
			MY PROJECTS
		</h1>
		<div class="w-full hidden laptop:flex flex-row justify-center items-center laptop:pt-36 desktop:pt-48 text-white text-2xl animate-bounce opacity-50"><i class="fa-solid fa-chevron-down"></i></div>
	</div>
	<div
		class="project-flex-container pt-12 mx-16 flex flex-col items-center justify-center gap-5 tablet:mx-12 tablet:grid tablet:grid-cols-2 laptop:grid laptop:grid-cols-3 laptop:mx-24 desktop:mx-36"
	>
		{#if data.projects && data.projects.length > 0}
			{#each data.projects as project (project.slug)}
				<SingleProject {project} />
			{/each}
		{/if}
	</div>
</div>

<style>
	.hide {
		display: none;
	}
	.project-title {
		font-family: DMSans, Arial, Helvetica, sans-serif;
		transition-property: margin, transform, padding;
		transition-duration: 1000ms;
	}
	.project-main-desc {
		font-family: DMSans, Arial, Helvetica, sans-serif;
		transition-property: margin, transform, padding, text-wrap, word-wrap;
		transition-duration: 1000ms;
	}
	.project-main-desc-div {
		transition-property: margin, transform, padding, height;
		transition-duration: 1000ms;
	}
	.project-main-container {
		animation: page-effect 1000ms forwards linear;
	}
	.project-flex-container {
		border-top: 1px solid rgba(255, 255, 255, 0.2);
	}
</style>

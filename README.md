# PORTFOLIO SNAPSHOT
<img width="880" alt="image" src="https://github.com/Todaricli/tonytli-portfolio/assets/130806678/b1ecae68-fc03-4606-a8d3-c018b05b5b6e">

# MOTIVATION:

Building a web portfolio is key for developers! It's like your online resume but cooler. It showcases your skills, projects, and creativity to potential employers. Plus, it's a chance to express yourself and stand out in the tech world. It's like your own digital billboard saying, "Hey, check out my awesome work!"

# OBJECTIVE:

- Introduce state management using Svelte.
- Introduce some tools available in [Svelte and SvelteKit](https://kit.svelte.dev/docs/introduction)
- Introduce svelteKit and its functionalities, such as routing and single-page-app (SPA)
- Introduce [Tailwind CSS](https://tailwindcss.com/docs/guides/sveltekit) set up in Svelte and its usage

# TO START
## Check node.js and npm installation
open any terminal and run:
```
node --version
```
```
npm --version
```
## If you **_have_** node.js and npm installed at your device:
### 1. Clone this repository to your desired local repository
```
git clone https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Todaricli.git
```
### 2. Navigate to proper repository
```
cd tonytli-portfolio
```
### 3. Install all the dependencies
```
npm install
```
### 4. Run the app
```
npm run dev
```
**Now, the app should be up and runing at the port http://localhost:5173/**

**To allow the svelte files properly display in VScode, you need to install Svelte for VS code plugin**

![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Todaricli/assets/130806678/8a6d3143-050d-4346-8dee-c53008f3f19c)

## If you **_do not have_** node.js and npm installed at your device:
### 1. Download them
Go to [node.js](https://nodejs.org/en/download) website, and download the appropriate version for your device (i.e. MacOS or Windows)

**REMINDER:**
- When you got to the installation stage, you must select node runtime, npm(node package manager) and add to PATH to install along with node.js
- Remember to restart you IDE (i.e. VScode), or sometimes restart your device is needed to enable node.js to work

### 2. Successfully downloaded node.js and npm 

Now go back to the above **Check node.js and npm installation**, and start from there and follow the steps to run the app.

If you have both of them succesfully downloaded, and check their installation status, you will see the following in your terminal:

<img width="580" alt="image" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Todaricli/assets/130806678/109b2e0b-ff4a-4864-bf21-5bb0803189c4">

<br>
<br>
<br>

# PROJECT INTRODUCTION
**Note:** Only some of the key aspects are conveyed here

## 1. Routing
### 1. Overall structure
When inspect the code for this app, you will able to find a block of code as shown below, these are the [navlinks](my-first-web-portfolio/src/routes/+layout.svelte) on the top of the webpage, it also conveys the overall struture of this web portfolio
```
	<nav class="w-1/2 flex flex-row justify-evenly">
		<a class="hover:translate-y-3" href="/">Home</a>
		<a class="hover:translate-y-3" href="/experiences">Experiences</a>
		<a class="hover:translate-y-3" href="/projects">Projects</a>
		<a class="hover:translate-y-3" href="/about">About</a>
		<a class="hover:translate-y-3" href="/contact">Contact</a>
	</nav>
```
You might also find this block of code looks somewhat similar to the structure of the files. Thats right! **In svelte, the routes are determined by the struture within the _routes_ folder as shown below:**

<img width="214" alt="image" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Todaricli/assets/130806678/9559333d-d112-4b7a-98ff-fe4f4450d7f9">

- ### 2. Sub-routes
Sometimes, we will need to have many sub-routes path under one major route path, in my case, the owner of the portfolio might have many experiences, and creating new file for each experience is tedious and not desirable. Thus, we can rely on svelte route parameter and utilize load() function to figure out which experience the user want to navigate to.
```
<a on:click={changeState} href="/experiences/{singleExperience.slug}">{singleExperience.title}</a>
```
Once the above anchor tag is clicked, we will have a server-side code to find the experience's company key that matches the params slug key value as shown below, and it is [located](/my-first-web-portfolio/src/routes/experiences/[slug]/+page.server.js) in [slug] folder inside experience, so its scope only cover if user navigate through experience main page.
```
export function load({ params }) {
	const singleExperience = jobExperiences.find((experience) => experience.company === params.slug);

	if (!singleExperience) throw error(404);

	return {
		singleExperience
	};
}
```
**(Inside the webpage, it will look like the navlinks at the RHS, and it path display on the top)**

<img width="797" alt="image" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Todaricli/assets/130806678/a26ae532-0969-4f79-96b5-d414ac30bb56">

**(However, inside the file structure, we only have three files reponsible for rendering all experiences as shown below)**

<img width="194" alt="image" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Todaricli/assets/130806678/c433cde9-5508-4e33-98d8-de1b2b0ef34a">

## 2. State management
### 1. Simple state management
If you comming from react, you might know that to enable react to re-render, you will need useState() function. In svelte, it is much easier. For example, when screen-width is small, the above experiences Navlinks will change to a button, once user click the button, a Navlinks div will display and allow them to navigate to different experiences. To trigger svelte re-render following this action, we just need to simply declare a variable inside the script block, and any changes to that variable later on, svelte is smart enough to re-render it based on the value. 

You might also notice how easy it is to write a click event handling in svelte, in this case, I use `on:click` directive with the button, and there are much more [directives](https://svelte.dev/docs/element-directives) in svelte you can use.

```
<script>
let clickToDrop = false;
</script>
```
```
<button on:click={() => clickToDrop = !clickToDrop}
class="text-white text-1xl rounded-3xl tablet:hidden z-20 hover:animate-pulse">
<i class="w-full fa-solid {clickToDrop ? closeIcon : openIcon} text-white text-3xl"></i>
</button>
```
In the webpage, the above looks something like this:

<img width="586" alt="image" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Todaricli/assets/130806678/cfe9e17f-be4d-4ae9-b9cd-16dde7270017">

### 2. Value Binding
One of the directive used in the web app allows value of a html element bind with a variable inside your script, my used case is I would like to detect if the browser-width is below certain number, I will collapse dropdown navlinks as mentioned above.

**Following from the above illustration:**
```
<script>
let ScreenWidth;

function expandExperienceNavlinks() {
	if(ScreenWidth > 740) {
		clickToDrop = false;
	}
}
</script>
```
```
<svelte:window on:resize={expandExperienceNavlinks} bind:innerWidth={ScreenWidth} />
```
As shown in the above code block, we used `<svelte/>` in this case as an element, and binded its innerWidth value with screenWidth, so whenever the broswer size changes, the ScreenWidth will get updated.

### 3. Svelte/store
Sometimes, we need have a global-scoped variable, that can access through everything, and its value get updated everywhere, as well as be able to trigger re-rendering when its value changes. In svelte, we have a svelte/store to help us, there are readable, writable and derived stores, their names are self-explantory that some might only allow read-only or also allow re-write. In my case, I used writable store to monitor whether a DOM is mounted or not, and hence determined whether should continue animating.

**Inside [store.js](/my-first-web-portfolio/src/lib/store/store.js)**
```
import { writable} from "svelte/store";
export let mounted = writable(false)

mounted.subscribe((mounted) => console.log(mounted));
```
**Inside my [homepage](/my-first-web-portfolio/src/routes/+page.svelte) svelte file**
```
<script>
import { mounted } from '../lib/store/store';
$mounted = false;

	onMount(() => {
		const timer = setTimeout(() => {
			$mounted = true;
		}, $globalDataLoadingDuration);
		return () => clearTimeout(timer);
	});
</script>

<div class="flex flex-col justify-start min-h-screen" class:hide={!$mounted}>
```
To explain the above code block, the writeable store `mounted` initially set to false, when svelte execute the script we set it to false again to handle the case after setting to true. When all DOM in the file mounted, we set it to true. **Notice that how I access `mounted` as `$mounted`**, in svelte we can use $ to trigger update() or subscribe() build-in function with store and trigger re-rendering. In this case, I purposely delay the `$mounted` set to true, because there are not much content or data to load, and thus the actual mounting time is too short for animation to display.

### 4. Others
- **Component:**
```
<script>
import SingleExperience from '$lib/components/SingleExperience.svelte';
</script>

<div class:experience-effect={$isExperienceMounted} class:hide={!$isExperienceMounted}>
	<SingleExperience singleExperience={data.singleExperience}></SingleExperience>
</div>
```
In svelte, we can create various component for code re-using and enhancing semantic clarity purposes, we can create componement in `lib/components`, and we able to passed data into component as shown above. 

In `lib/components/SingleExperience.svelte`, we simply need to do the following to allow data pass in:
```
<script>
	export let singleExperience;
</script>
```
- **Logic Block:**
This usage consider self-explantory
```
{#if data.projects && data.projects.length > 0}
	{#each data.projects as project (project.slug)}
		<SingleProject {project} />
	{/each}
{/if}
```

## 3. Tailwind CSS
### 1. Default usage
Tailwind CSS has many pre-defined classes, we simply need to add them to a element class attribute as shown below
```
<h1 class="text-xl font-bold underline ">JOHN SMITH</h1>
```
On [Tailwind CSS](https://tailwindcss.com/docs/font-size) website:

<img width="453" alt="image" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Todaricli/assets/130806678/ed6684ef-b8df-43c5-a147-e7a3174c9611">

The look:

<img width="275" alt="image" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Todaricli/assets/130806678/442b3a31-7564-4648-8a61-809a3a37b69a">

### 2. Customization
Inside the [tailwind.config.js](/my-first-web-portfolio/tailwind.config.js), you can customize some css for your application, such as, I defined my own device screen width options:
```
theme: {
    extend: {},
    screens: {
      'tablet': '740px',
      'laptop': '1124px',
      'desktop': '1560px',
    },
```
In other svelte files:
```
<div class="text-slides">
	<h1 class="text-[188px] desktop:text-[220px]">John Smith - Prospective Web Developer</h1>
</div>
```
# REFERENCE
[1] [SvelteKit Intro](https://kit.svelte.dev/docs/introduction)

[2] [SvelteKit Routing](https://kit.svelte.dev/docs/routing)

[3] [SvelteKit Loading Data](https://kit.svelte.dev/docs/load)

[4] [Svelte Components](https://svelte.dev/docs/svelte-components)

[5] [Svelte Element Directive](https://svelte.dev/docs/element-directives)

[6] [Svelte/Store](https://svelte.dev/docs/svelte-store)

[7] [Svelte Logic block](https://svelte.dev/docs/logic-blocks)

[8] [Install Tailwind CSS with SvelteKit](https://tailwindcss.com/docs/guides/sveltekit)

[9] [Tailwind css doc](https://tailwindcss.com/docs/installation)





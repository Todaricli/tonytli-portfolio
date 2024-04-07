# cs732-assignment-Todaricli
<img width="800" alt="snapshot of project homepage" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Todaricli/assets/130806678/43a09c86-3302-4db9-84d5-2bd3004d6b99">

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
cd cs732-assignment-Todaricli
cd my-first-web-portfolio
```
### 3. Install all the dependencies
```
npm install
```
### 4. Run the app
```
npm run dev
```
**Now, the app should be up and runing at the port http://localhost:5173/

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

# PROJECT INTRODUCTION
**Note:** Only some of the key aspects are conveyed here

## 1. Routing
- ### Overall structure
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
You might also find this block of code looks somewhat similar to the structure of the files. Thats right! **In svelte, the routes are determined by the struture within the **routes** folder as shown below: 

<img width="214" alt="image" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Todaricli/assets/130806678/9559333d-d112-4b7a-98ff-fe4f4450d7f9">

- ### Sub-routes
Sometimes, we will need to have many sub-routes path under one major route path, in my case, the owner of the portfolio might have many experiences, and creating new file for each experience is tedious and not desirable. Thus, we can rely on svelte route parameter and utilize load() function to figure which experience the user want to navigate to.
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


import { writable} from "svelte/store";

/**This is a relatively small and front-end only web app, thus, onmount() will finished runing quite fast, to enable 
 * the loading animation, we use timer to mimic the data loading.
 */
export const globalDataLoadingDuration = writable(Math.floor(Math.random()* (2000 - 1200 +1) + 1200))

/**Global variable, shared among all routes to control actual page display or loading animation required */
export let mounted = writable(false)

mounted.subscribe((mounted) => console.log(mounted));

/**For experience page specific, to monitor changing in different sub-routes within /experiences */
export let isExperienceMounted = writable(true)

isExperienceMounted.subscribe((isExperienceMounted)=> console.log(isExperienceMounted + " isexpe"))
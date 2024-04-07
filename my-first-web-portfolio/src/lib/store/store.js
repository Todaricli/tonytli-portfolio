import { writable} from "svelte/store";

export const globalDataLoadingDuration = writable(Math.floor(Math.random()* (2000 - 1200 +1) + 1200))

export let mounted = writable(false)

mounted.subscribe((mounted) => console.log(mounted));

export let isExperienceMounted = writable(true)

isExperienceMounted.subscribe((isExperienceMounted)=> console.log(isExperienceMounted + " isexpe"))
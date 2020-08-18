import { writable } from 'svelte/store'


export let product =  writable([{}]);
export const cesta =  writable(0);	
export let qty = writable(0);
export let tot = writable(0);
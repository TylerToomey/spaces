import { readable, writable } from 'svelte/store'
const PLACEHOLDERS = ["яблоко","молоко","книга","диван","машина"];

export const placeholders = readable(PLACEHOLDERS, function start(set){
    set(PLACEHOLDERS);
    return function stop(){}
})

export const searchTerm = writable("");


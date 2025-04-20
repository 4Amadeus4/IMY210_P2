<!--Amadeus Fidos u22526162-->
<template>
    <button id="incr" @click="store.increment()" :disabled="store.getCount == store.maxCap">Increment</button>
</template>

<script>
import { counterStore } from '../stores/counter';
export default {
    setup() {
        const store = counterStore();
        return { store };
    }
}
</script>

<style>
#incr:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

#incr:active {
    background-color: green;
}

#incr:disabled {
    background-color: gray;
}
</style>
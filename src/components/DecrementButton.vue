<!--Amadeus Fidos u22526162-->
<template>
    <button id="decr" @click="store.decrement()" :disabled="store.getCount == 0">Decrement</button>
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
#decr:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

#decr:active {
    background-color: red;
}

#decr:disabled {
    background-color: gray;
}
</style>
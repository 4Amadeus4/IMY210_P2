<!--Amadeus Fidos u22526162-->
<template id="Counter">
    <div class="counterContainer">
    <h2>Number of students in venue:</h2>
    <h1>{{ store.getCount }}</h1>
    <p v-if="store.getCount == store.maxCap">Venue is at max capacity</p>
    </div>
</template>

<script>
import { counterStore } from '@/stores/counter.js';
export default {
    setup() {
        const store = counterStore();
        return { store };
    }
}
</script>

<style scoped>
.counterContainer {
  text-align: center;
}
</style>
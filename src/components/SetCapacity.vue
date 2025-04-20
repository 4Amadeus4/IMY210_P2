<!--Amadeus Fidos u22526162-->
<template>
    <div class="inputContainer">
        <label for="capacityInput">Enter Capacity:</label>
        <input id="capacityInput" v-model="maxValue" :disabled="store.getCount > 0" type="number" value="10" min="0">
        <button type="submit" @click="updateVenueSize" :disabled="store.getCount > 0">Update Capacity</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import { counterStore } from '@/stores/counter.js';

export default {
   setup() {
    const store = counterStore();
    const maxValue = ref(10);
    const updateVenueSize = () => {
      store.setMax(maxValue.value);
    };
    return {
      store,
      maxValue,
      updateVenueSize
    };
   } 
}
</script>

<style scoped>
.inputContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
}

.inputContainer button {
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.inputContainer button:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.inputContainer button:active {
  transform: translateY(0);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
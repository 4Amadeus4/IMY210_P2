<!--Amadeus Fidos u22526162-->

<template>
  <div class="pageContainer">
    <div class="centerContainer">
      <h1>VENUE CAPACITY COUNTER</h1>
      <div>
        <SetCapacity/>  
      </div>
      <div class="countHolder">
        <Counter/>
      </div>
      <div class="buttonHolder">
        <DecrementButton /> <IncrementButton />
      </div>
    </div>
  </div>
</template>

<script>
import { counterStore } from '@/stores/counter.js';
import Counter from '@/components/Counter.vue';
import IncrementButton from '@/components/IncrementButton.vue';
import DecrementButton from '@/components/DecrementButton.vue';
import SetCapacity from '@/components/SetCapacity.vue';

export default {
  components: {
    Counter,
    SetCapacity,
    IncrementButton,
    DecrementButton
  }
}
</script>

<style>
.pageContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.centerContainer {
  max-width: 600px;
  width: 100%;
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  border: 2px solid #3498db;
}

h1 {
  color: #2c3e50;
  font-size: 3rem;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}


.buttonHolder {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}

.set-capacity {
  margin-bottom: 30px;
  text-align: center;
}

.buttonHolder button {
  padding: 15px 30px;
  border: none;
  border-radius: 10px; /* rounded corners */
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* shadow */
}

@media (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }

  .buttonHolder button {
    padding: 10px 20px;
    font-size: 1rem;
  }
}
</style>
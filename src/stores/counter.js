// Amadeus Fidos u22526162
import { defineStore } from "pinia";

export const counterStore = defineStore('counter', {
    state: () => ({
      maxCap : 10,
      count: 0      
    }),
    getters: {
      getCount(state) {
        return state.count;
      }
    },
    actions: {
      setMax(value) {
        this.maxCap = value;
      },
      increment() {
        if (this.count < this.maxCap) {
          this.count+=1;
        }
      },
      decrement() {
        if (this.count > 0) {
          this.count-=1;
        }
      }
    }
  })
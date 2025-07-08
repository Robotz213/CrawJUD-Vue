import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("message", () => {
  const message = ref("");

  return { message };
});

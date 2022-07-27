import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    counter: 0
  }),
  getters: {
    
  },
  actions: {
    send_message(message:any) {
      console.log(message)
    }
  }
})

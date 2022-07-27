import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    plan: 'free'
  }),
  getters: {
    
  },
  actions: {
    send_message(message:any) {
      console.log(message)
    }
  }
})

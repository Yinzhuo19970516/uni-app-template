import { defineStore } from 'pinia'

interface UserState {
  name?: string | number
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    name: 'yz',
  }),
  getters: {},
  actions: {
    changeName() {
      this.name = 'yinzhuo'
    },
  },
})

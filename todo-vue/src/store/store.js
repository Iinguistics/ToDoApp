import Vue from 'vue'

import Vuex from 'vuex'



Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        filter:'all',
        todos: [
            {
                
                    id: 1,
                    title: "Todo One",
                    completed: false
                  },
                  {
                    id: 2,
                    title: "Todo Two",
                    completed: true
                  },
            
        ]
    },

  getters: {
      remaining
  }
})

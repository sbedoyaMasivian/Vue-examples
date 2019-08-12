import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {
        nombre: 'Manzana',
        cantidad: 0
      },
      {
        nombre: 'Pera',
        cantidad: 0
      },
      {
        nombre: 'Naranja',
        cantidad: 0
      },
    ]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad+=1
    }, 
    reiniciar(state){
      state.frutas.forEach(frutas =>{
        frutas.cantidad = 0
      })
    }

  },
  actions: {

  }
})

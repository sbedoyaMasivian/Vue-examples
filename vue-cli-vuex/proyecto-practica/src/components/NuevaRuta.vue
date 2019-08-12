<template>
    <div class="container">
        <h1>El componente se renderiza</h1>
        <ul class="list-group">
            <li v-for="(fruta, index) in ordenado" :key="fruta.id" @click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
                {{fruta.nombre}}
                <span class="badge badge-primary badge-pill">{{fruta.cantidad}}</span>
            </li>
        </ul>
        <button type="button" class="btn btn-danger mt-4" @click="reiniciar">Reiniciar</button>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';
export default {
    name: 'NuevaRuta',
    computed:{
        ...mapState(['frutas']),
        ordenado(){
            return this.frutas.sort((a,b)=>b.cantidad - a.cantidad)
        }
    },
    methods:{
        ...mapMutations(['aumentar', 'reiniciar'])
    }
}
</script>


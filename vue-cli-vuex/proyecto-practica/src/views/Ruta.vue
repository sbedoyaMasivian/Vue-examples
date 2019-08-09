<template>
    <div class="Ruta">
        <h1>HOLA!</h1>
        <NuevaRuta msj='Soy componente Ruta'></NuevaRuta>
    </div>
</template>
<script>
import  NuevaRuta  from "@/components/NuevaRuta.vue"; 
export default {
    name: 'Ruta',
    components:{
        NuevaRuta
    }
}
</script>



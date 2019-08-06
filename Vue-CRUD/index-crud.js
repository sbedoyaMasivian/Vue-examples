new Vue({
    el: '#app',
    data:{
        mensaje: "Bienvenido a App-Vue",
        nombre: '',
        edad: Number,
        personas:[],
        bandera: true,
        nombreActualizar: '',
        edadActualizar:Number
    },
    methods:{
        crearPersona: function(){
            this.personas.push({
                nombre: this.nombre,
                edad: this.edad
            }),
            this.nombre = '',
            this.edad = ''
        },
        eliminarPersona: function(index){
            this.personas.splice(index);
        },
        actualizarPersona: function(index){
            this.personas[index].nombre = this.nombreActualizar,
            this.personas[index].edad = this.edadActualizar
            this.bandera = true;
        },
        cambiarBandera: function(){
            this.bandera = !this.bandera
        } 
    }
})
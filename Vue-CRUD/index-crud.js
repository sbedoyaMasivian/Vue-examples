new Vue({
    el: '#app',
    data:{
        mensaje: "Bienvenido a App-Vue",
        nombre: '',
        edad: Number,
        personas:[],
        bandera: false
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
        }
    }
})
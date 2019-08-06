new Vue({
    el: '#app',
    data:{
        mensaje: "Bienvenido a App-Vue",
        nombre: '',
        edad: 0,
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
        }
    }
})
new Vue({
    el: '#app',
    data:{
        mensaje: "Bienvenido a App-Vue",
        nombre: '',
        edad: Number,
        id: 0,
        personas:[],
        bandera: false,
        nombreActualizar: '',
        edadActualizar:Number,
        index:Number,
        banderaTabla: false
    },
    methods:{
        crearPersona: function(){
            this.personas.push({
                id: this.id+=1,
                nombre: this.nombre,
                edad: this.edad,
            }),
            this.nombre = '',
            this.edad = '',
            this.banderaTabla = true
        },
        eliminarPersona: function(index){
            console.log(index);
            this.personas.splice(index,1);
        },
        actualizarPersona: function(index){
            this.personas[index].nombre = this.nombreActualizar,
            this.personas[index].edad = this.edadActualizar
            this.bandera = false;
        },
        formularioPersona: function(index){
            this.nombreActualizar = this.personas[index].nombre,
            this.edadActualizar = this.personas[index].edad,
            this.index=index,
            this.bandera = true; 
        },
        cambiarBandera: function(){
            this.bandera = !this.bandera
        } 
    }
})
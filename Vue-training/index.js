const app = new Vue({
    el: '#app',
    data: {
        title: 'Hola Vue'
    }
});

const mgs = new Vue({
    el: '#msg',
    data: {
        name : ' '
    }
})

const btn = new Vue({
    el: '#btn',
    data:{
        flag: true
    },
    methods: {
        bandera: function() {
            this.flag= !this.flag;
        }
    }
})

const count = new Vue({
    el:'#count',
    data:{
        count: 0
    },
    watch: {
        count: function(value) {
            if (value === 5) {
                setTimeout(() => {
                this.count = 0;
                }, 300);
            }
        }
    }
})

const ciclo= new Vue({
    el:'#ciclo',
    data: {
        personas:[
            {name: 'santiago'},
            {name: 'juan'},
            {name: 'Andrea'},
            {name: 'luis'},
            {name: 'juanita'}
        ]
    },
})

const fore= new Vue({
    el:'#for',
    data: {
       n: Number
    },
})
Vue.component('my-component', {
    template: '<span>{{ message }}</span>',
    data: () =>{
        return{
            message: 'hello'
        }
    }
})

new Vue({
    el: '#example'
  })

//----------------------------COMPONENTE-------------------------------
Vue.component("child", {
    props:['mensaje'],
    template: '<p>{{mensaje}}</p>'
})

const parent = new Vue({

    el: '#padre',
    data:{
        mensaje: 'Soy mensaje '
    },
   
})
//-------------------------------------------------------------
const pc = new Vue({
    el: '#pc',
    data: {
        message:"Hello"
    },
    computed: {
        reverseMessage: function(){
            return this.message.split('').reverse('').join('')
        }
    }
})

const condicional = new Vue({
    el: '#conif',
    data:{
        mostrar:false,
        banderas: [
            {bandera:'No soy bandera'},
            {bandera:'Soy bandera'},
            {bandera:'No soy bandera'}
        ]     
    },
    methods: {
        show: function() {
            this.mostrar= !this.mostrar;
        }
    }
})

//----------------------Filtros----------
const nombreM = new Vue({
    el: '#nombreM',
    data:{
        name: ''
    },
    filters:{
        uppercase: function(nombre){
            return nombre.toUpperCase()
        }
    }

})
//-----------------------------------------Componentes 2----------

Vue.component('tabla', {
    props:['myPersona'],
    template: '<td>{{myPersona.name}}</td>'
})

const tabla= new Vue({
    el: '#table',
    data:{
        personas:[
            {name: 'Pedro'},
            {name: 'Luisa'},
            {name: 'Jose'},
            {name: 'Ana'},
            {name: 'Camilo'},
            {name: 'Antonia'},
        ]
    }

})
----------------------------------------------------------------------
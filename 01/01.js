const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Agrega tu deporte favorito aquí',
        deportes: [
            {nombre: 'Futbol', cantidad: '7'}, 
            {nombre: 'Baloncesto', cantidad: '5'},
            {nombre: 'Batminton', cantidad: '3'},
            {nombre: 'Natación', cantidad: '5'}
        ],
        otroDeporte: '',
        total: 0
    },
    methods: {
        agregarDeporte(){
            this.deportes.push({
                nombre: this.otroDeporte, cantidad: this.otroDeporte
            });
            this.otroDeporte = ''
        }
    },

    computed:{
        sumarCantidadDeportes(){
            this.total = 0;
            for(deporte of this.deportes){
                this.total = this.total + deporte.cantidad
            }
            return this.total
        }
    }
})
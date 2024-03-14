const propiedadComputada = new Vue({
    el: '#propiedadComputada',
    data:{
        mensaje: 'Esto es un mensaje normal',
    },
    computed:{
        mensajePropiedadComputada: function(){
            return this.mensaje.split('').reverse().join('');
        }
    }
    
});
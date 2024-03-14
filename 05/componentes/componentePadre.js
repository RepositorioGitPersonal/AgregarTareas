Vue.component('padre',{
    template: // html
    `
    <div class="p-5 bg-dark text-white">
        <h3>Componente Padre: {{numeroPadre}}</h3>
        <button class="btn btn-primary" @click="numeroPadre++">+</button>
        <h5>{{nombrePadre}}</h5>
        <hijo :numero="numeroPadre" @nombreHijo = "nombrePadre = $event"></hijo>
    </div>
    
    `,
    data(){
        return{
            numeroPadre: 0,
            nombrePadre: ''
        }
    }
});


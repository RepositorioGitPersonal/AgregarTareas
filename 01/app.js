const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Agregar Materias con Vue JS',
        materias:[],
        nuevaMateria: ''
    },
    methods:{
        agregarMateria(){
            this.materias.push({
                nombre: this.nuevaMateria,
                estado: false
            });
            this.nuevaMateria = '';
            localStorage.setItem('mat-Vue', JSON.stringify(this.materias));
        },
        editarMateria(index){
            this.materias[index].estado = true;
            localStorage.setItem('mat-Vue', JSON.stringify(this.materias));
        },

        eliminarMateria(index){
            if(confirm("¿Estas seguro de que quieres eliminar esta materia?")){
                this.materias.splice(index, 1);
            }else{
                alert("Ok")
            }
            localStorage.setItem('mat-Vue', JSON.stringify(this.materias));
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('mat-Vue'));
        if (datosDB === null){
            this.materias = [];
        }else{
            this.materias = datosDB;
        }
    }
});
const { createApp } = Vue;

createApp({
  data() {
    return {
      currentTab: 'notas',
      nota1: null,
      nota2: null,
      nota3: null,
      asistencia: null,
      resultado: null,
      registro: {
        nombre: '',
        correo: '',
        pass: '',
        repetirPass: ''
      }
    };
  },
  computed: {
    passwordsIguales() {
      return this.registro.pass === this.registro.repetirPass;
    }
  },
  methods: {
    validarNota(nota) {
      return nota >= 10 && nota <= 70;
    },
    validarAsistencia(val) {
      return val >= 0 && val <= 100;
    },
    calcularPromedio() {
      if (
        this.validarNota(this.nota1) &&
        this.validarNota(this.nota2) &&
        this.validarNota(this.nota3) &&
        this.validarAsistencia(this.asistencia)
      ) {
        const promedio = (this.nota1 * 0.35) + (this.nota2 * 0.35) + (this.nota3 * 0.30);
        const aprobado = promedio >= 40 && this.asistencia >= 80;
        this.resultado = { promedio: promedio.toFixed(2), aprobado };
      } else {
        this.resultado = null;
        alert('Corrige los campos inválidos');
      }
    },
    validarCorreo(correo) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(correo);
    },
    enviarFormulario() {
      if (
        this.registro.nombre !== '' &&
        this.validarCorreo(this.registro.correo) &&
        this.passwordsIguales &&
        this.registro.pass !== ''
      ) {
        alert('El registro se ha realizado correctamente');

        // Limpia formulario
        this.registro = { nombre: '', correo: '', pass: '', repetirPass: '' };
      } else {
        alert('Por favor corrige los errores en el formulario');
      }
    }
  }
}).mount('#app');

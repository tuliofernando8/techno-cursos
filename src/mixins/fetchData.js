export default {
  data() {
    return {
      loading: true,
      api: null
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.api = null;
      fetch(`http://localhost:3000${url}`) // deixar sem o barra aqui pra pssoa ter que digitar com o barra na hora da pesquisa
        .then(r => r.json())
        .then(r => {
          setTimeout(() => {
            this.api = r;
            this.loading = false;
          }, 1500);
        });
    }
  }
}
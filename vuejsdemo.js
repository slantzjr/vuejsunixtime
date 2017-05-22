const app7 = new Vue({
  el: '#unixtime-convert',
  data: {
    unixtime: '',
  },
  computed: {
    convertedTime: function () {
      const date = new Date(this.unixtime*1000);

      return date.toDateString() + " " + date.toTimeString();
    }
  }
});
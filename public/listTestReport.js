var app = Vue.createApp({
  data() {
    let data = {
      testReports: [
        {
          testReportId: 0,
          testReportCd: "testcode",
          name: "a"
        },
        {
          testReportId: 1,
          testReportCd: "testcode1",
          name: "b"
        }
      ]
    };

    return data;
  },
  methods: {
    edit(testReport) {
      
    }
  },
  computed: {
  }
});
app.config.isCustomElement = (tag) => { return tag === "contents"; };
window.app = app.mount("#app");


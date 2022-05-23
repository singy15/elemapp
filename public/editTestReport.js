var app = Vue.createApp({
  data() {
    let data = {
      testReport: {
        testReportCd: "testrpe",
        testReportId: 0,
        name: "name",
        pages: [
          { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAABNCAYAAABno8zbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE0SURBVHhe7dgxLgVRGEDhyx6UEoSGfWiU+qexBaVClAqxBPZgA3rtK0goLMECCJnCCRK1+b5m8t/6ZO7Mv7Kxuf02/uD56XFsbu1ME//V6vSET4Igfglifxwvr8bZ8nwcHk1HzML3II4W42S5Nx52b8fLdMR8fA/i+mZc7F6Ou2lkXnxDEIIgBEEIgvhhU/nxy3kw1qfp0+v9WKyd2lTOgNU14cogBEH8+cpgHrwhCEEQgiAEQQiCEAQhCEIQhCAIQRCCIARBCIIQBCEIQhCEIAhBEIIgBEEIghAEIQhCEIQgCEEQgiAEQQiCEAQhCEIQhCAIQRCCIARBCIIQBCEIQhCEIAhBEIIgBEEIghAEIQhCEIQgCEEQgiAEQQiCEAQhCEIQhCAIQRCCIARBCIIQBF+M8Q64BB3ci+HWKwAAAABJRU5ErkJggg==", comment: "comment1" },
          { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAABNCAYAAABno8zbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE0SURBVHhe7dgxLgVRGEDhyx6UEoSGfWiU+qexBaVClAqxBPZgA3rtK0goLMECCJnCCRK1+b5m8t/6ZO7Mv7Kxuf02/uD56XFsbu1ME//V6vSET4Igfglifxwvr8bZ8nwcHk1HzML3II4W42S5Nx52b8fLdMR8fA/i+mZc7F6Ou2lkXnxDEIIgBEEIgvhhU/nxy3kw1qfp0+v9WKyd2lTOgNU14cogBEH8+cpgHrwhCEEQgiAEQQiCEAQhCEIQhCAIQRCCIARBCIIQBCEIQhCEIAhBEIIgBEEIghAEIQhCEIQgCEEQgiAEQQiCEAQhCEIQhCAIQRCCIARBCIIQBCEIQhCEIAhBEIIgBEEIghAEIQhCEIQgCEEQgiAEQQiCEAQhCEIQhCAIQRCCIARBCIIQBF+M8Q64BB3ci+HWKwAAAABJRU5ErkJggg==", comment: "comment2" },
          { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAABNCAYAAABno8zbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE0SURBVHhe7dgxLgVRGEDhyx6UEoSGfWiU+qexBaVClAqxBPZgA3rtK0goLMECCJnCCRK1+b5m8t/6ZO7Mv7Kxuf02/uD56XFsbu1ME//V6vSET4Igfglifxwvr8bZ8nwcHk1HzML3II4W42S5Nx52b8fLdMR8fA/i+mZc7F6Ou2lkXnxDEIIgBEEIgvhhU/nxy3kw1qfp0+v9WKyd2lTOgNU14cogBEH8+cpgHrwhCEEQgiAEQQiCEAQhCEIQhCAIQRCCIARBCIIQBCEIQhCEIAhBEIIgBEEIghAEIQhCEIQgCEEQgiAEQQiCEAQhCEIQhCAIQRCCIARBCIIQBCEIQhCEIAhBEIIgBEEIghAEIQhCEIQgCEEQgiAEQQiCEAQhCEIQhCAIQRCCIARBCIIQBF+M8Q64BB3ci+HWKwAAAABJRU5ErkJggg==", comment: "comment3" },
        ]
      },
      currentPage: 0
    };

    data.page = data.testReport.pages[0];

    return data;
  },
  methods: {
    pasteImage(event) {
      const items = (event.clipboardData || window.clipboardData).items;
      let file = null;

      if(! items || items.length ===0) {
        this.$message.error("Current browser does not support local");
        return;
      }
      // Search for clipboard items
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") != (-1)) {
          file = items[i].getAsFile();
          break; }}if(! file) {this.$message.error("Pasting content is not a picture");
        return;
      }
      // File is the image object in our clipboard
      // If you need a preview, you can execute the following code
      const reader = new FileReader();
      reader.onload = event => {
        this.page.image = event.target.result;
      };
      reader.readAsDataURL(file);
      // this.file = file;
    },
    prevCurrentPage() {
      this.setCurrentPageIndex(this.currentPage - 1);
    },
    nextCurrentPage() {
      this.setCurrentPageIndex(this.currentPage + 1);
    },
    setCurrentPageIndex(index) {
      if(index >= 0 && index < this.testReport.pages.length) {
        this.currentPage = index;
        this.page = this.testReport.pages[this.currentPage];
      }
    },
    changeCurrentPage() {
      this.setCurrentPageIndex(this.currentPage);
    },
    addPage() {
      let page = this.newPage();
      this.testReport.pages.push(page);
      this.setCurrentPageIndex(this.testReport.pages.indexOf(page));
    },
    insertPage() {
      let page = this.newPage();
      this.testReport.pages.splice(this.currentPage, 0, page);
      this.setCurrentPageIndex(this.testReport.pages.indexOf(page));
    },
    deletePage() {
      this.testReport.pages.splice(this.currentPage, 1);
      if(this.testReport.pages.length === 0) {
        let page = this.newPage();
        this.testReport.pages.push(page);
      }
      this.setCurrentPageIndex(this.currentPage - 1);
    },
    newPage() {
      let page = { image: null, comment: "" };
      return page;
    },
    movePageNext() {
      let page = this.testReport.pages.splice(this.currentPage, 1)[0];
      this.testReport.pages.splice(this.currentPage + 1, 0, page);
      this.setCurrentPageIndex(this.currentPage + 1);
    },
    movePageBack() {
      let page = this.testReport.pages.splice(this.currentPage, 1)[0];
      this.testReport.pages.splice(this.currentPage - 1, 0, page);
      this.setCurrentPageIndex(this.currentPage - 1);
    }

  },
  computed: {
  }
});
window.app = app.mount("#app");


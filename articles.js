var article = {title: "What is Vue.js?", body: "Vue.js is The Progressive JavaScript Framework"}

function init() {
    var articleList = new Vue({
        el: '#list',
        data: article
    });
}
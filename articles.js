var articles = [
    {title: "What is Vue.js?", body: "Vue.js is The Progressive JavaScript Framework"},
    {title: "Approachable", body: "Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!"},
    {title: "Versatile", body: "An incrementally adoptable ecosystem that scales between a library and a full-featured framework."},
]

function init() {
    var articleInput = new Vue({
        el: '#input',
        data: {
            title: null,
            body: null
        },
        methods: {
            submitArticle: function() {
                articles.push({title: this.title, body: this.body});
            }
        }
    });

    var articleList = new Vue({
        el: '#list',
        data: {
            articles: articles
        },
        methods: {
            displayArticle: function(index) {
                articleInput.title = articles[index].title;
                articleInput.body = articles[index].body;
            }
        }
    });
}
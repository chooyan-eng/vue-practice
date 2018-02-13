var articles = [
    {title: "What is Vue.js?", body: "Vue.js is The Progressive JavaScript Framework"},
    {title: "Approachable", body: "Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!"},
    {title: "Versatile", body: "An incrementally adoptable ecosystem that scales between a library and a full-featured framework."},
]

function init() {
    var bus = new Vue();

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
        },
        created: function() {
            bus.$on('item-selected', function(index) {
                articleInput.title = articles[index].title;
                articleInput.body = articles[index].body;
            })
        }
    });

    var ArticleItem = {
        props: ['article', 'index'],
        template: '<a href="javascript:void(0)" @click="displayArticle(index)">{{ article.title }}</a>',
        methods: {
            displayArticle: function(index) {
                bus.$emit('item-selected', index);          
            }
        },
    }

    var articleList = new Vue({
        el: '#list',
        data: {
            articles: articles
        },
        components: {
            'article-item': ArticleItem
        }
    });
}
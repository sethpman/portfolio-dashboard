define(
    [
        'keel/BaseView',
        'app/widgets/navbar/NavBarWidget',
        'text!app/pages/home/HomePageTemplate.html'
    ],
    function(BaseView, NavBarWidget, HomePageTemplate) {
        'use strict';

        return BaseView.extend({
            tagName: 'section',
            id: 'home-page',

            template: {
                name: 'HomePageTemplate',
                source: HomePageTemplate
            },
            
            postRender: function() {
                this.addChildren([
                    {
                        id: 'NavBarWidget',
                        viewClass: NavBarWidget,
                        parentElement: this.$el
                    }
                ]);
            }
        });
    }
);
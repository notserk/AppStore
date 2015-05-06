/**
 * Created by kshirley on 1/23/15.
 */
app.factory('AppService', function(){
    return{
        apps: [
            {
                name: "News Feed",
                date: "9/12/14",
                thumbnail: "images/USAID-News-App-Icon.png",
                description: "This app aggregates all of the news currated by USAID",
                href: {
                    ios : "itms-services://?action=download-manifest&url=https://dectest.usaid.gov/appstore/news.plist",
                    android: "USAIDNewsApp.apk",
                    itunes: ""
                },
                screenshots: [
                    {
                        src: "images/screenshots/news-screen-1.png"
                    },
                    {
                        src: "images/screenshots/news-screen-2.png"
                    }
                ]
            },
            {
                name: "DEC Evaluations",
                date: "9/12/14",
                thumbnail: "images/DEC-Evaluations-Icon.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.",
                href: {
                    ios : "",
                    android: "",
                    itunes: "http://itunes.apple.com/us/app/selected-usaid-evaluations/id530184752?mt=8"
                },
                screenshots: [
                    {
                        src: "images/screenshots/eval-screen-1.png"
                    },
                    {
                        src: "images/screenshots/eval-screen-2.png"
                    }
                ]
            },
            {
                name: "Portfolio Map",
                date: "9/12/14",
                thumbnail: "images/PortfolioMap.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.",
                href: {
                    ios : "",
                    android: "",
                    itunes: "https://itunes.apple.com/us/app/usaid-portfolio-map/id532192236?mt=8"
                },
                screenshots: [
                    {
                        src: "http://placehold.it/174x310"
                    },
                    {
                        src: "http://placehold.it/174x310"
                    }
                ]
            },
            {
                name: "Aid Tracker",
                date: "9/12/14",
                thumbnail: "images/AIDtracker-323.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.",
                href: {
                    ios : "",
                    android: "",
                    itunes: "https://sites.google.com/a/usaid.gov/aidtracker/"
                },
                screenshots: [
                    {
                        src: "http://placehold.it/174x310"
                    },
                    {
                        src: "http://placehold.it/174x310"
                    }
                ]
            }
        ]
    };
});
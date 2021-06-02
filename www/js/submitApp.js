new Vue({
    el: '#page-wrap',
    data: {
        FIOParents: ""
    },
    methods: {
        submit(){
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PUT',
                body: JSON.stringify({
                    id: 1,
                    title: 'hui',
                    body: 'bar',
                    userId: 1,
                    FIOParents: this.FIOParents,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    if(json.FIOParents === "hui")
                        alert("Внимание! Хуи обноружены.");
                });
                // .then((anyName) => {
                //     if (anyName.json())
                // } alert("Саня-лох"));
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PUT',
                body: JSON.stringify({
                    id: 1,
                    title: 'hui',
                    body: 'bar',
                    userId: 1,
                    FIOParents: this.FIOParents,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    // if(json.FIOParents === "hui")
                        alert("Внимание! Хуи НЕ обноружены.");
                });
            // .then((anyName) => {
            //     if (anyName.json())
            // } alert("Саня-лох"));
        })
    }
})
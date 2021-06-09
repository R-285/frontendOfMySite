new Vue({

    el: '#page-wrap',
    data: {
        info: "asdf",
    },
    mounted() {
        fetch('0.0.0.0:8080/login', {

            method: 'GET',
            body: JSON.stringify({
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => this.info = json)
    }
})
;
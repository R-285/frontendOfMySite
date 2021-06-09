new Vue({
    el: '#page-wrap',
    data: {
        login: "",
    },
    methods: {
        logAsParent(){
            if(this.login == "")
                alert("Введите логин")
            else {
                fetch('https://jsonplaceholder.typicode.com/posts/1', {
                    /*0.0.0.0:8080/{userId}/request/add*/
                    method: 'POST',
                    body: JSON.stringify({
                        login: this.login,
                        role: "0"
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => {
                        if (json.error == "Invalid code")
                            alert("Invalid code");
                    });
            }
        },
        logAsAngle(){
            if(this.login == "")
                alert("Введите логин")
            else {
                fetch('https://jsonplaceholder.typicode.com/posts/1', {
                    /*0.0.0.0:8080/{userId}/request/add*/
                    method: 'POST',
                    body: JSON.stringify({
                        login: this.login,
                        role: "1"
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => {
                        if (json.error == "Invalid code")
                            alert("Invalid code");
                    });
            }
        }
    }
})
new Vue({
    el: '#page-wrap',
    data: {
        showAuth: true,
        login: "",
        password: "",
        name: "",
        eMail: "",
        phone: "",
    },
    methods: {
        changeTrue () {
            this.showAuth = true
        },
        changeFalse () {
            this.showAuth = false
        },
        logInAcc() {
            if ((this.login == "") || (this.password == "")) {
                alert("Для входа в свой аккаунт все поля должны быть заполнены");
            } else {

                fetch('https://jsonplaceholder.typicode.com/posts/1', {
                    method: 'PUT',
                    body: JSON.stringify({
                        login: this.login,
                        password: this.password
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json());
            }
        },
        regNewAcc(){
            if ((this.name == "") || (this.eMail == "") || (this.password == "")) {
                alert("Для регистрации все поля должны быть заполнены");
            } else {
                fetch('https://jsonplaceholder.typicode.com/posts/1', {
                    method: 'PUT',
                    body: JSON.stringify({
                        name: this.name,
                        eMail: this.eMail,
                        phone: this.phone,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json());
            }
        }
    }
})
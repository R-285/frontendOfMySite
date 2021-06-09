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
        changeTrue() {
            this.showAuth = true
        },
        changeFalse() {
            this.showAuth = false
        },
        logInAcc() {

            if ((this.login == "") || (this.password == "")) {
                alert("Для входа в свой аккаунт все поля должны быть заполнены");
            } else {

                fetch('0.0.0.0:8080/login', {

                    method: 'POST',
                    body: JSON.stringify({
                        login: this.login,
                        password: this.password
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => {
                        if (json.error == "Invalid login") {
                            alert("Invalid login");
                            return 0
                        }
                        if (json.error == "No access") {
                            alert("No access");
                            return 0
                        }

                    });

            }
        },
        regNewAcc() {
            if ((this.name == "") || (this.eMail == "") || (this.phone == "")) {
                alert("Для регистрации все поля должны быть заполнены");
            } else {
                fetch('https://jsonplaceholder.typicode.com/posts/1', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: this.name,
                        email: this.eMail,
                        phone: this.phone,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => {
                        if (json.error == "Invalid name") {
                            alert("Invalid name");
                            return 0;
                        }
                        if (json.error == "Invalid email") {
                            alert("Invalid email");
                            return 0;
                        }
                        if (json.error == "Use email") {
                            alert("Use email");
                            return 0;
                        }
                        if (json.error == "Invalid phone") {
                            alert("Invalid phone");
                            return 0;
                        }
                        if (json.error == "Use phone") {
                            alert("Use phone");
                            return 0;
                        }
                        alert("Ваша почта: " + json.rEmail + "\nПароль: " + json.rCode)
                    })
            }
        }
    }
})
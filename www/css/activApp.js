new Vue({
    el: '#page-wrap',
    data: {
        chileName: "",
        alterName: "",
        sexChiled: "",
        linkMed: "",
        linkPas: "",
        linkAnother: "",
        expAngel: "",
        expSkills: "",
        comments: "",
    },
    methods: {
        submit(){
            if(this.chileName == "" || this.alterName == "" || this.sexChiled == "" || this.linkMed == "" || this.linkPas == "" || this.linkAnother == "" || this.expAngel == "" ||
                this.expSkills == "" || this.comments == "" )
                alert("Не все поля заполнены")
            else {
                fetch('https://jsonplaceholder.typicode.com/posts/1', {
                    method: 'PUT',
                    body: JSON.stringify({
                        chileName: this.chileName,
                        alterName: this.alterName,
                        sexChiled: this.sexChiled,
                        linkMed: this.linkMed,
                        linkPas: this.linkPas,
                        linkAnother: this.linkAnother,
                        expAngel: this.expAngel,
                        expSkills: this.expSkills,
                        comments: this.comments,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => {
                        if (json.chileName === "hui")
                            alert("Внимание! Хуи обноружены.");

                    });
            }
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
                    if(json.chileName === "hui")
                        alert("Внимание! Хуи НЕ обноружены.");
                    this.comments = "Чё, пацаны, аниме?";
                });
            // .then((anyName) => {
            //     if (anyName.json())
            // } alert("Саня-лох"));
        })
    }
})
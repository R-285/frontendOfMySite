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
            if(this.chileName == "" || this.sexChiled == "" || this.linkMed == "" || this.linkPas == "" )
                alert("Не все поля заполнены")
            else {
                fetch('https://jsonplaceholder.typicode.com/posts/1', {
                    /*0.0.0.0:8080/{userId}/request/add*/
                    method: 'PUT',
                    body: JSON.stringify({
                        childName: this.chileName,
                        alternativeChildName: this.alterName,
                        sex: this.sexChiled,
                        medicalCertificate: this.linkMed,
                        passport: this.linkPas,
                        otherDocuments: this.linkAnother,
                        expectations: this.expAngel,
                        abilities: this.expSkills,
                        comment: this.comments,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => {
                        if (json.error == "Invalid childName")
                            alert("Invalid childName");
                        if (json.error == "Invalid medicalCertificate")
                            alert("Invalid medicalCertificate");
                        if (json.error == "Invalid passport")
                            alert("Invalid passport");
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
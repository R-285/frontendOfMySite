new Vue({
    el: '#log_reg_zone',
    data: {
        showAuth: true,
        title: "pizda"
    },
    methods: {
        changeTrue () {
            this.showAuth = true
        },
        changeFalse () {
            this.showAuth = false
        }
    }
})
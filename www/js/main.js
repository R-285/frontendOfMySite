new Vue({
    el: '#log_reg_zone',
    data: {
        showAuth: true,
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
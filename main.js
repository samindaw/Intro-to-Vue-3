const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id);
        },
        removeFromCart(id){
            i = this.cart.indexOf(id);
            if (i>-1){
                this.cart.splice(i, 1);
            }
        }
    }
})

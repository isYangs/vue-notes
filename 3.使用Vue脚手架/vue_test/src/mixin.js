const mixin = {
    methods: {
        showName() {
            alert(this.name);
        },
    },
    mounted() {
        console.log('Hello mixin');
    },
};

const mixin2 = {
    data() {
        return {
            x: 200,
            y: 100,
        };
    },
};

export { mixin, mixin2 };

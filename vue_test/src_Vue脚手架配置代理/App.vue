<template>
    <div>
        <button @click="getStudents">获取学生信息</button>
        <button @click="getCars">获取汽车信息</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'App',
    methods: {
        getStudents() {
            axios.get('http://localhost:8080/api/students').then(response => {
                console.log(response.data);
            }, error => {
                console.log(error.message);
            })
        },
        getCars() {
            axios.get('http://localhost:8080/demo/cars').then(response => {
                console.log(response.data);
            }, error => {
                console.log(error.message);
            })
        }
    },
};
</script>

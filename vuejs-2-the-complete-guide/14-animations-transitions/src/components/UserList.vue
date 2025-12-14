<template>
    <transition-group tag="ul" name="user-list">
        <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
    </transition-group>
    <div>
        <input type="text" ref="userNameInput">
        <button @click="addUser()">Add User</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                users: ['Max', 'Manuel', 'Julie', 'Angela', 'Michael']
            };
        },
        methods: {
            addUser() {
                const enteredUserName = this.$refs.userNameInput.value;
                this.users.unshift(enteredUserName)
            },
            removeUser(user) {
                this.users = this.users.filter(ust => ust !== user);
            }
        }
    };
</script>

<style scoped>
    ul {
        margin: 1rem 0;
        padding: 0;
        list-style: none;
    }

    li {
        padding: 1rem;
        border: 1px solid #ccc;
        text-align: center;
    }

    .user-list-enter-from {
        opacity: 0;
        transform: translateX(-30px)
    }

    .user-list-enter-to,
    .user-list-leave-from {
        opacity: 1;
        transform: translateX(0)
        
    }

    .user-list-enter-active {
        transition: all 0.3s ease-out;
    }

    .user-list-leave-active {
        position: absolute;
        transition: all 0.3s ease-in;
    }

    .user-list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    .user-list-move {
        transition: all 0.8s ease;
    }
</style>
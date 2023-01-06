<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FriendsView from './FriendsView.vue'
import RoomsView from './RoomsView.vue'
import FriendsRoomsFooterView from './FriendsRoomsFooterView.vue'
</script>

<template>
    <FriendsView v-if="temp === 'person'"/>
    <RoomsView v-if="temp === 'chat'"/>

    <FriendsRoomsFooterView @childs-event="parentsMethod" />
</template>

<script>
export default{
    data(){
        return {
            temp : 'person'
        }
    },
    methods: {
        parentsMethod(msg) {
            this.temp = msg;
        }
    }
};
</script>
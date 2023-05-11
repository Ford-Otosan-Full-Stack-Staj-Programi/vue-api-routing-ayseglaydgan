<!-- Details.vue -->
<template>
    <div>
        <img :src="character.image" alt="Character">
        <h2>{{ character.name }}</h2>
        <p>Status: {{ character.status }}</p>
        <p>Species: {{ character.species }}</p>
        <p>Gender: {{ character.gender }}</p>
        <!-- Add other properties you want to display -->
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            character: {}
        };
    },
    mounted() {
        this.fetchCharacter();
    },
    methods: {
        async fetchCharacter() {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character/${this.$route.params.id}`);
                this.character = response.data;
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
  
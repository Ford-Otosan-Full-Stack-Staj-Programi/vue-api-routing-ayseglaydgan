<!-- Home.vue -->
<template>
    <div class="top">
        <div class="buttonContainer">
            <button @click="decrementCounter">Previous Page</button>
            <button @click="incrementCounter">Next Page</button>
        </div>
        <p id="pageCount">Page: {{ counter }}</p>
    </div>
    <div>
        <div id="image-blok" v-for="character in characters" :key="character.id" @click="showDetails(character.id)">
            <img id="image-frame" :src="character.image" alt="Character">
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            characters: [],
            counter: 3,
        };
    },
    mounted() {
        this.fetchCharacters();
    },
    methods: {
        async fetchCharacters() {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${this.counter}`);
                this.characters = response.data.results;
            } catch (error) {
                console.error(error);
            }
        },
        showDetails(id) {
            this.$router.push(`/details/${id}`);
        },
        incrementCounter() {
            this.counter += 1;
            this.fetchCharacters();
        },
        decrementCounter() {
            this.counter -= 1;
            if (this.counter < 1) {
                this.counter = 1;
            }
            this.fetchCharacters();
        }
    }
};
</script>
  
<style>
#image-blok {
    background-color: rgb(208, 208, 66);
    padding: 10px;
    display: inline-block;
    border-radius: 20px;
}

#image-frame {
    background-color: rgb(20, 159, 223);
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 20px;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.buttonContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

#pageCount {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}
</style>
<template>
    <div class="game-list">
        <div class="game-card" v-for="game in games" :key="game.id">
            <img :src="game.background_image" :alt="game.name" class="game-image" />
            <h2 class="game-title">{{ game.name }}</h2>
            <p class="game-info">Classificação: {{ game.rating }}</p>
            <p class="game-info">Lançamento: {{ game.released }}</p>
            <span 
                class="favorite-icon" 
                :class="{ favorited: game.isFavorite }" 
                @click="toggleFavorite(game)"
            >
                {{ game.isFavorite ? '★' : '☆' }}
            </span>
        </div>
    </div>
</template>

<script>
import { getGames } from '../services/HttpService';

export default {
    name: "Games",
    data() {
        return {
            games: [],
        };
    },
    async created() {
        await this.loadGames();
        this.loadFavorites();
    },
    methods: {
        async loadGames() {
            try {
                const response = await getGames();
                this.games = response.data.results.map(game => ({
                    ...game,
                    isFavorite: false 
                }));
                console.log('Jogos carregados:', this.games);
            } catch (error) {
                console.error("Erro ao buscar jogos: ", error);
            }
        },
        loadFavorites() {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            favorites.forEach(fav => {
                const game = this.games.find(g => g.id === fav.id);
                if (game) {
                    game.isFavorite = true; 
                }
            });
            console.log('Favoritos carregados:', favorites);
        },
        toggleFavorite(game) {
            game.isFavorite = !game.isFavorite;
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            if (game.isFavorite) {
                favorites.push(game); 
            } else {
                favorites = favorites.filter(fav => fav.id !== game.id);
            }

            localStorage.setItem('favorites', JSON.stringify(favorites)); 
            console.log('Favoritos atuais:', favorites);
        }
    },
}
</script>

<style scoped>
.game-list {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    justify-content: center;
    padding: 120px 40px 40px;
}
.game-card {
    background-color: #1a1a1a;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    padding: 30px;
    width: 350px;
    color: #e0e0e0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
}
.favorite-icon {
    font-size: 30px;
    color: #ccc;
    cursor: pointer;
    transition: color 0.3s ease;
    position: absolute;
    bottom: 5px;
    right: 15px;
}
.favorite-icon.favorited {
    color: #ffd700; 
}
.game-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
}
.game-image {
    border-radius: 12px;
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: opacity 0.3s;
}
.game-title {
    font-size: 22px;
    font-weight: bold;
    margin: 15px 0 10px;
    text-align: center;
    color: #ffcc00;
}
.game-info {
    font-size: 16px;
    margin: 5px 0;
    color: #ccc;
}
</style>

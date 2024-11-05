<template>
    <div class="game-list">
        <div class="game-card" v-for="game in favorites" :key="game.id">
            <img :src="game.background_image" :alt="game.name" class="game-image" />
            <h2 class="game-title">{{ game.name }}</h2>
            <p class="game-info">Classificação: {{ game.rating }}</p>
            <p class="game-info">Lançamento: {{ game.released }}</p>
            <span 
                class="favorite-icon favorited" 
                @click="toggleFavorite(game)" 
            >
                ★
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Favorites",
    data() {
        return {
            favorites: [] 
        };
    },
    created() {
        this.loadFavorites(); 
    },
    methods: {
        loadFavorites() {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            this.favorites = favorites; // Carrega todos os jogos favoritos
            console.log('Favoritos carregados:', this.favorites); 
        },
        toggleFavorite(game) {
            // Remove o jogo da lista de favoritos
            this.favorites = this.favorites.filter(fav => fav.id !== game.id);
            // Atualiza o localStorage
            localStorage.setItem('favorites', JSON.stringify(this.favorites)); 
            console.log('Favoritos após desfavoritar:', this.favorites);
        }
    }
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
.no-favorites {
    text-align: center;
    font-size: 1.2em;
    color: #ccc;
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
    color: #ffd700; 
    cursor: pointer;
    transition: color 0.3s ease;
    position: absolute;
    bottom: 5px;
    right: 15px;
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

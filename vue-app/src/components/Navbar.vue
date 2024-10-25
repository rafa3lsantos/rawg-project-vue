<template>
    <div id="nav">
        <div class="nav-brand">Game Explorer by Dinao</div>
        <div class="nav-links">
            <RouterLink to="/" class="nav-link" active-class="active">HOME</RouterLink>
            <RouterLink to="/games" class="nav-link" active-class="active">GAMES</RouterLink>
            <RouterLink to="/favorites" class="nav-link" active-class="active">FAVORITES</RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

#nav {
    background-color: #181818;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    z-index: 1000;
    font-family: 'Arial', sans-serif;
}

.nav-brand {
    font-size: 24px;
    font-weight: bold;
    color: #ffcc00;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: color 0.3s ease;
}

.nav-brand:hover {
    color: #ffffff;
}

.nav-links {
    display: flex;
    gap: 25px;
}

.nav-link {
    font-size: 18px;
    color: #ffcc00;
    text-decoration: none;
    position: relative;
    padding: 8px 0;
    transition: color 0.3s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #ffcc00;
    opacity: 0;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.nav-link:hover {
    color: #ffffff;
}

.nav-link:hover::after,
.nav-link.active::after {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: left;
}

.nav-link.active {
    color: #444442; /* Cor mais clara para o link ativo */
}
</style>

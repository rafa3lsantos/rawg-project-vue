<template>
    <footer class="footer">
        <p>DINAO BAGUA &copy; 2024</p>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
html, body {
    height: 100%; /* Certifica-se de que o html e o body ocupam 100% da altura */
    margin: 0;
}

#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* O #app ocupa toda a altura da janela */
}

main {
    flex-grow: 1; /* O conteúdo principal cresce para empurrar o footer */
}

.footer {
    background-color: #1a1a1a;
    color: #f5f5f5;
    text-align: center;
    padding: 20px 0;
    font-size: 1em;
    font-weight: 300;
    border-top: 2px solid #ffcc00; 
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
    font-family: 'Arial', sans-serif;
    margin-top: auto; /* Garante que o footer fique na parte inferior */
}

.footer p {
    margin: 0;
    letter-spacing: 0.05em;
    opacity: 0.8;
    transition: opacity 0.3s ease;
}

.footer p:hover {
    opacity: 1;
    color: #ffcc00; 
    cursor: default;
}
</style>

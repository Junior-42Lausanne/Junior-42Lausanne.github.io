<script>
    export let text = "JE 42 Lausanne";
</script>

<style>
    .title {
        @media (max-width: 768px) {
            font-size: 6rem; /* smaller screens */
        }
        @media (min-width: 769px) {
            font-size: 20rem; /* larger screens */
        }
    }
</style>

<h1 class="h1">
    <span class="gradient-heading title">{text}</span>
</h1>

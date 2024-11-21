<script>
  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";

</script>
<aside class=
    "
        flex flex-col self-start border-l border-r border-zinc-800 rounded-md
        p-5 gap-10 w-72
    "
>
    <Menu titulo="Navegação">
        <MenuItem texto="Início" href="/" />
        <MenuItem texto="Personagens" href="/" />
        <MenuItem texto="Autores" href="/autores" />
        <MenuItem texto="Séries" href="/" />
    </Menu>

    <Menu titulo="Principais Autores">
        <MenuItem texto="Rick Riordan" href="/autores" />
        <MenuItem texto="J.R.R. Tolkien" href="/autores" />
        <MenuItem texto="George Martin" href="/autores/george-martin" />
    </Menu>

    <Menu titulo="Outras Categorias">
        <MenuItem texto="Últimas Notícias" href="/" />
        <MenuItem texto="Séries Populares" href="/" />
        <MenuItem texto="Facebook" href="/" />
        <MenuItem texto="Instagram" href="/" />

    </Menu>
</aside>
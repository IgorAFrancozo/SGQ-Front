<script setup>
import { RouterLink } from "vue-router";

</script>

<template>
    <header>

        <nav class="navbar rounded-top " id="cabecalho">
            <div class="container-fluid conteudo">
                <div>
                    <a href="" id="botao-menu"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                            fill="currentColor" class="bi bi-list" viewBox="0 0 15 15">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg> </a>
                    <a class="navbar-brand" id="nome"><strong>SGQ</strong></a>
                </div>
                <form class="d-flex" role="search" id="pesquisa">
                    <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" id="campo-pesquisa">
                    <button class="btn" type="submit" id="botao-pesquisa"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                            height="16" id="icone-pesquisa" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg></button>
                </form>
            </div>
        </nav>
    </header>
</template>

<style>

#botao-menu svg {
    fill: #000000;
    position: relative;
    z-index: 999;
}

#icons {
    fill: black;
}

#nome {
    margin-left: 10px;
    color: rgb(255, 255, 255);
	
}

#nome strong {
    font-weight: 600;
    font-family: sans-serif;
    font-size: 25px;
}

#cabecalho {
    width: 100%;
    background: #0065fd;
    margin-top: 3px;
    border-radius: 3px;
}

nav {
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    --bs-navbar-brand-padding-y: 0;
}

.conteudo {
    align-items: center;
    display: flex;
    justify-content: space-between;
	padding: 10px;

}

#pesquisa {
    transition: all 0.4s ease;
    border-radius: 100px 10px 30px 50px;
    color: #fff;
}

#pesquisa input {
    margin-right: 10px;
}

#icone-pesquisa {
    margin-bottom: 5px;
    margin-top: 6px;
}

#campo-pesquisa {
    width: 150px;
    vertical-align: super;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #00000055;
}

#botao-pesquisa {
    border-radius: 50%;
    background: #000000;
    border: none;
    width: 45px;
    height: 45px;
}

#botao-pesquisa svg {
    fill: white;
}

.rounded-bottom {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

/* --bs-border-radius: 0rem; */
</style>
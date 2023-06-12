<template>
	<nav id="cabecalho" class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a class="navbar-brand" id="nomeBranco">
				<span v-if="isMenuOpen" class="text-center">SGQ</span>
				<span v-else>SGQ</span>
			</a>
			<button id="button-menu" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="toggleMenu">
				<span class="sr-only">Toggle navigation</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="menu-icon"
					class="bi bi-list" viewBox="0 0 16 16">
					<path fill-rule="evenodd"
						d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
				</svg>
			</button>
			<div class="conteudo collapse navbar-collapse" :class="{ show: isMenuOpen }" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link to="/" id="nomeBranco" class="nav-link active" @click="closeMenu">Catálogo</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/admin" id="nomeBranco" class="nav-link active" @click="closeMenu">Admin</router-link>
					</li>
				</ul>
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search">
					<button class="btn btn-outline-dark" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="18"
							height="18" id="iconePesquisa" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
							<path
								d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
						</svg></button>
				</form>
			</div>
		</div>
	</nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
	components: {
		RouterLink
	},
	data() {
		return {
			isMenuOpen: false
		};
	},
	methods: {
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen;
		},
		closeMenu() {
			this.isMenuOpen = false;
		}
	}
};
</script>

<style>
#nomeBranco {
	margin-left: 10px;
	color: rgb(255, 255, 255);
}

#iconePesquisa {
	margin-bottom: 3px;
}

#nome strong {
	font-weight: 600;
	font-family: sans-serif;
	font-size: 25px;
}

#cabecalho {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: auto;
	z-index: 999;
	background: #0084FF; 
}

#menu-icon {
	width: 40px;
	height: 40px;
	fill: white;
}

#button-menu {
	background: transparent;
	border: 0;
	padding: 0;
}

nav {
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	--bs-navbar-brand-padding-y: 0;
}

@media (min-width: 992px) {
	#button-menu {
		display: none;
	}
}

@media (max-width: 991.98px) {
	.conteudo.collapse.navbar-collapse:not(.show) {
		display: none !important;
	}
}
</style>

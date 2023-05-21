<template>
	<nav id="cabecalho" class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a class="navbar-brand" id="nomeBranco">SGQ</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="conteudo collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link to="/" id="nomeBranco" class="nav-link active">Catálogo</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/admin" id="nomeBranco" class="nav-link active">Admin</router-link>
					</li>
				</ul>
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-dark" type="submit">Search</button>
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
};

</script>
<style>
#nomeBranco {
	margin-left: 10px;
	color: rgb(255, 255, 255);

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
	height: 70px;
	z-index: 999;
	background: linear-gradient(135deg, #000000, #43CBFF, #000000, #43CBFF);
}

nav {
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	--bs-navbar-brand-padding-y: 0;
}
</style>
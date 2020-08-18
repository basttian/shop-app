<script>
   import NAV from "./nav.svelte"
	import { Router, Route, Link } from 'yrv';
	export let router = {};
	let id = null;
	$: {
	    id = router.params ? router.params.id : null;
	}

import {products} from "../product.js";
import { product, cesta, qty, tot } from "../store/store.js";
import _ from 'lodash';
import { get } from 'svelte/store';
const arr = get(product);

let cantidad = [];
let precio = [];

const addProductToCart = async(producto, precio, cantidad) => {
	if(arr.findIndex(x => x.producto === producto) === -1 ){
	await arr.push({producto:producto,precio:precio,cantidad:cantidad,total:(cantidad*precio) });
	await cesta.update(n => n + 1);
	await product.update( u => arr );
	await qty.set(_.sumBy(arr, function(c) { return c.cantidad; }));
    await tot.set(_.sumBy(arr, function(t) { return t.total; }));
	    UIkit.notification({
			message: `<span uk-icon="icon: cart"></span> Articulo agregado a la cesta de compras.`,
			status: 'primary',
			pos: 'top-center',
			timeout: 2000
			});
	}else if( arr.findIndex(x => x.producto === producto) > -1 ){
        UIkit.notification({
            message: `<span uk-icon="icon: warning"></span> ${producto}, ya se encuentra en la cesta de compras.`,
            status: 'danger',
            pos: 'top-center',
            timeout: 2000
        });
    }
}


</script>

<svelte:head>
<title>{id}</title>
</svelte:head>

<NAV/>
<div class="uk-container">
	<div class="uk-inline uk-margin">

		<h1>Page {id}</h1>
		<div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid>
		{#each products as { id, cod, name, price, description }, i}
		<div>
			<div class="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
			    <div class="uk-card-badge uk-label">{cod}</div>
			    <h3 class="uk-card-title">{name}  ${precio[i] === void 0 ? price : precio[i]}</h3>
			    <p>{description}</p>
			    <button class="uk-button uk-button-default" on:click={()=>{
			    	addProductToCart(cod+" "+name,price,Number(cantidad[i].value))
			    }}>Comprar</button>
		        <input class="uk-input uk-form-width-xsmall" type="number" min="1" 
		        value={1} bind:this={cantidad[i]}
		        on:change={({ target: { value } }) => {precio[i]=value*price} } >
			</div>
		</div>
		{/each}
		</div>

	</div>
</div>
<script>
import { Router, Route, Link, router } from 'yrv';
router.subscribe(e => {
  if (!e.initial) console.log(e);
});
import home from './component/home.svelte';
import page from './component/page.svelte';
import ShoppingCart32 from "carbon-icons-svelte/lib/ShoppingCart32";
import { product, cesta, qty, tot } from "./store/store.js";
import _ from 'lodash';


  async function removeItemFromCart(item) {
    var i = $product.indexOf(item);
    if (i !== -1) {
      await $product.splice(i, 1);
      await product.update(u => u);
      await cesta.update(n => n - 1);
      await qty.update(u=>_.sumBy( $product, function(o) { return o.cantidad; }));
      await tot.update(u=>_.sumBy( $product, function(o) { return o.total; }));
        UIkit.notification({
            message: `<span uk-icon="icon: warning"></span> ${item.producto}, retirado de la cesta.`,
            status: 'danger',
            pos: 'top-center',
            timeout: 2000
        });
    }
  }


</script>


<Router>
    <Route exact component={home}/>
    <Route exact path="/component/home" component={home}/>
    <Route exact path="/component/page/:id" component={page}/>
</Router> 

<div class="uk-position-small uk-position-bottom-right uk-overlay uk-overlay-default uk-position-fixed bkg-button-cart uk-border-circle">
	<a href="#modal-full" uk-toggle >	
	    <ShoppingCart32 /> <span class="uk-position-absolute">{$qty === void 0 ? 0 : $qty}</span>
	</a>
</div>


<div id="modal-full" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-grid-collapse uk-child-width-1-1@s uk-flex-middle" uk-grid>
            <div class="uk-padding-large">
                <h1><span  uk-icon="icon: cart; ratio: 2"></span> Carro</h1>

<ul class="uk-nav uk-dropdown-nav">
          {#if $cesta > 0}
            {#each $product as value, i}
              {#if i != 0}
                <li>
                  <div class="uk-grid-small" uk-grid>
                      <div class="uk-width-expand" uk-leader="media: @s"><span uk-icon="icon: check"></span> {value.cantidad} {value.producto} x ${value.precio} = ${(value.precio * value.cantidad).toFixed(2)}</div>
                      <div><a class="uk-margin" href="javascript:void(0)" on:click={() => removeItemFromCart(value)} uk-icon="icon: trash"> </a></div>
                  </div>
                </li>
              {/if}
            {/each}
            <li class="uk-nav-divider" />
            <li class="uk-text-right" >Cantidad de articulos: {$qty}, Total ${Number($tot).toFixed(2)}</li>
            <li class="uk-nav-divider" />
            <li>
			    <button class="uk-button uk-button-primary uk-button-small" on:click={()=>{console.log("Pagado")}} >Pagar ${Number($tot).toFixed(2)}</button>
            </li>
          {:else}
            <li>
              <span uk-icon="icon: info" />
              El carrito esta vacio.
            </li>
          {/if}
        </ul>

            </div>
        </div>
    </div>
</div>
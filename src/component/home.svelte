<script>
    import { Router, Route, Link } from 'yrv';

</script>

<svelte:head>
<title>Home</title>
</svelte:head>

<div class="uk-container">
<div class="uk-inline uk-margin">

<div class="uk-child-width-1-3@m" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true">
    <div>
        <Link class="uk-link-reset" href="/component/page/1">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-padding uk-box-shadow-hover-medium hand">
            <div class="uk-animation-toggle" tabindex="0">
            <div class="uk-transform-origin-top-center uk-animation-scale-up">
            <h3 class="uk-card-title">Bottom</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
        </div>
        </Link>
    </div>
    <div>
        <Link class="uk-link-reset" href="/component/page/2">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-padding uk-box-shadow-hover-medium hand">
            <div class="uk-animation-toggle" tabindex="0">
            <div class="uk-transform-origin-top-center uk-animation-scale-up">
            <h3 class="uk-card-title">Bottom</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
        </div>
        </Link>
    </div>
    <div>
        <Link class="uk-link-reset" href="/component/page/3">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-padding uk-box-shadow-hover-medium hand">
            <div class="uk-animation-toggle" tabindex="0">
            <div class="uk-transform-origin-top-center uk-animation-scale-up">
            <h3 class="uk-card-title">Bottom</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
        </div>
        </Link>
    </div>
    <div>
        <Link class="uk-link-reset" href="/component/page/4">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-padding uk-box-shadow-hover-medium hand">
            <div class="uk-animation-toggle" tabindex="0">
            <div class="uk-transform-origin-top-center uk-animation-scale-up">
            <h3 class="uk-card-title">Bottom</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
        </div>
        </Link>
    </div>
</div>

</div>
</div>
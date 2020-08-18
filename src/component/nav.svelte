<script>
    import { Router, Route, Link } from 'yrv';
</script>



<div class="uk-section-primary uk-preserve-color">
<div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
<nav class="uk-navbar-container" uk-navbar>
   
<div class="uk-navbar-left">
    <Link class="uk-navbar-item uk-logo" href="/">
        <span class="uk-margin-small-right" uk-icon="icon: arrow-left; ratio: 2"></span>
    </Link>
    <ul class="uk-navbar-nav">
        <li class="uk-active"><a href=""></a></li>
        <li class="uk-parent"><a href=""></a></li>
        <li><a href=""></a></li>
    </ul>
</div>
<div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
            <li>
                <a href="#">Parent</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li class="uk-nav-header">Header</li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li class="uk-nav-divider"></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</nav>
 </div> 
  </div> 
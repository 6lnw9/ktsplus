class KtsProductCategories extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<div class="container">
				<div class="row">
	                <div class="col-sm-12 section-description wow fadeIn">
	                	<h2>Product Categories</h2>
	                    <div class="divider-1 wow fadeInUp"><span></span></div>
	                    <!-- <p>
	                    	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
	                    	labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
	                    </p> -->
	                </div>
	            </div>
        		<div class="row">
	            	<div class="col-sm-12">
						<div class="row container">
							<div class="col-xs-12 col-sm-4 what-we-do-box">
								<a href="table_lamp.html">
									<img src="assets/img/catalogs/table_lamp.jpg" alt="" data-at2x="assets/img/catalogs/table_lamp.jpg">
								</a>
							</div>
							<div class="col-xs-12 col-sm-4 what-we-do-box">
								<a href="led_menu.html">
									<img src="assets/img/catalogs/led_menu.jpg" alt="" data-at2x="assets/img/catalogs/led_menu.jpg">
								</a>
							</div>
							<div class="col-xs-12 col-sm-4 what-we-do-box">
								<a href="salt_pepper_blender.html">
									<img src="assets/img/catalogs/salt_pepper_blender.jpg" alt="" data-at2x="assets/img/catalogs/salt_pepper_blender.jpg">
								</a>
							</div>
						</div>
						<div class="row container">
							<div class="col-xs-12 col-sm-4 what-we-do-box">
								<a href="tablewares.html">
									<img src="assets/img/catalogs/tablewares.jpg" alt="" data-at2x="assets/img/catalogs/tablewares.jpg">
								</a>
							</div>
						</div>
	                </div>
	            </div>
        	</div>
		`;
	}
}

// Define the custom element
customElements.define('kts-product-categories', KtsProductCategories);
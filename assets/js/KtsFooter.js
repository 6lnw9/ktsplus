class KtsFooter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<footer>
			<div class="container">
				<div class="row">
					<div class="col-sm-12 footer-copyright">
						&copy; KTS PLUS CO.,LTD. - <span class="small">Template by Azmind.</span>
					</div>
					<div class="col-sm-12 footer-address">
						30/7 Soi Lat Phrao 81 (Thitiphon), Lat Phrao Road, Khlong Chao Khun Sing Subdistrict Wang Thonglang District Bangkok 10310
					</div>
					
					<!-- <div class="col-sm-5 footer-social">
						<a href="#"><i class="fa fa-facebook"></i></a>
						<a href="#"><i class="fa fa-dribbble"></i></a>
						<a href="#"><i class="fa fa-twitter"></i></a>
						<a href="#"><i class="fa fa-google-plus"></i></a>
						<a href="#"><i class="fa fa-pinterest"></i></a>
					</div> -->
				</div>
			</div>
		</footer>
		`;
	}
}

// Define the custom element
customElements.define('kts-footer', KtsFooter);
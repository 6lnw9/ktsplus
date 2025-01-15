class SliderImage extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const jsonData = this.getAttribute('data-json');
		const data = JSON.parse(jsonData);

		this.innerHTML = `
			<div class="slider-wrapper">
				<div class="slider-title">${data.title}</div>
				<button class="slider-arrow slider-arrow-left" onclick="this.parentElement.querySelector('.slider-images').scrollBy({ left: -this.parentElement.querySelector('.slider-images img').clientWidth, behavior: 'smooth' })"><</button>
				<div class="slider-images">
					${data.image.map((img, index) => `<img src="${img.url}" alt="${img.alt}" data-index="${index}">`).join('')}
				</div>
				<button class="slider-arrow slider-arrow-right" onclick="this.parentElement.querySelector('.slider-images').scrollBy({ left: this.parentElement.querySelector('.slider-images img').clientWidth, behavior: 'smooth' })">></button>
				<div class="slider-indicator"></div>
			</div>
		`;

		const indicator = this.querySelector('.slider-indicator');

		data.image.forEach((_, index) => {
			const dot = document.createElement('div');
			dot.classList.add('slider-indicator-dot');
			dot.addEventListener('click', () => this.slideTo(index));
			indicator.appendChild(dot);
		});

		this.updateIndicator();
		this.attachEvents();
	}

	attachEvents() {
		const slider = this.querySelector('.slider-images');
		slider.addEventListener('scroll', this.updateIndicator.bind(this));
	}

	updateIndicator() {
		const slider = this.querySelector('.slider-images');
		const indicator = this.querySelector('.slider-indicator');
		const dots = indicator.getElementsByClassName('slider-indicator-dot');
		// console.log(dots)
		if(dots.length !== 0) {
			const currentIndex = Math.round(slider.scrollLeft / slider.clientWidth) || 0;
			// console.log(currentIndex)
			dots[currentIndex].classList.add('active');
	
			for (let i = 0; i < dots.length; i++) {
				if (i !== currentIndex) {
					dots[i].classList.remove('active');
				}
			}
		}
	}

	slideTo(index) {
		const slider = this.querySelector('.slider-images');
		slider.scrollTo({
			left: index * slider.clientWidth,
			behavior: 'smooth'
		});
	}
}

// Define the custom element
customElements.define('slider-image', SliderImage);
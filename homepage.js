var Webflow = Webflow || [];
Webflow.push(function () {
	window.addEventListener('resize', function () {
		window.Webflow.require('lottie').lottie.resize();
	});

	if (window.innerWidth > 991) {
		const section = document.createElement('section');
		section.classList.add('section_creators-and-fans');
		section.classList.add('wf-section');
		section.setAttribute('id', 'exploreZoop');
		section.setAttribute('data-w-id', '7f5755a0-aa45-0b06-08be-9749e0dc4524');

		const div1 = document.createElement('div');
		div1.classList.add('sidescroll-camera');
		section.appendChild(div1);
		const div2 = document.createElement('div');
		section.appendChild(div2);
		div2.classList.add('sidescroll-frame');

		div1.appendChild(div2);

		const div3 = document.createElement('div');
		div3.classList.add('sidescroll-img-w');
		div2.appendChild(div3);
		const img1 = document.createElement('img');
		img1.setAttribute(
			'src',
			'https://uploads-ssl.webflow.com/640529b41dc5457b7da3eb69/641c175290d4cc1b796ca88d_sidescroll-back.webp'
		);
		img1.setAttribute('loading', 'lazy');
		img1.setAttribute('alt', '');
		img1.classList.add('sidescroll-sky');
		const img3 = document.createElement('img');
		img3.setAttribute(
			'src',
			'https://global-uploads.webflow.com/640529b41dc5457b7da3eb69/641bfaa95ee80a5ffdc5d30f_side-front.webp'
		);
		img3.setAttribute('loading', 'lazy');
		img3.setAttribute('alt', '');
		img3.classList.add('sidescroll-img-1');
		const charDiv = document.createElement('div');
		charDiv.setAttribute('id', 'lottieCharacter');
		charDiv.classList.add('character');
		div3.appendChild(charDiv);
		div3.appendChild(img1);
		div3.appendChild(img3);

		const div4 = document.createElement('div');
		div4.classList.add('sidescroll-screen-w');
		div2.appendChild(div4);
		const div5 = document.createElement('div');
		div5.classList.add('container');
		const h2 = document.createElement('h2');
		h2.classList.add('sidescroll-title');
		h2.innerText = 'Explore ZOOP';
		div5.appendChild(h2);
		div4.appendChild(div5);

		const div6 = document.createElement('div');
		div6.classList.add('sidescroll-screen-w');
		div2.appendChild(div6);
		const div7 = document.createElement('div');
		div7.classList.add('container');
		div7.classList.add('full-width');
		const div8 = document.createElement('div');
		div8.classList.add('sidescroll-content-box');
		const h3 = document.createElement('h3');
		h3.classList.add('sidescroll-content-title');
		h3.innerText = 'Explore and Follow';
		const p = document.createElement('p');
		p.classList.add('p-big');
		p.innerText =
			'Dive into our super inclusive party of celebrities and creators. Follow your favorites to unlock exclusive feeds with awesome content available on Zoop only! Connect with comments, likes, and replies.';
		div8.appendChild(h3);
		div8.appendChild(p);
		div7.appendChild(div8);
		div6.appendChild(div7);
		div2.appendChild(div6);
		const div9 = document.createElement('div');
		div9.classList.add('sidescroll-screen-w');
		const div10 = document.createElement('div');
		div10.classList.add('container');
		div10.classList.add('full-width');
		const div11 = document.createElement('div');
		div11.classList.add('sidescroll-content-box');
		const h31 = document.createElement('h3');
		h31.classList.add('sidescroll-content-title');
		h31.innerText = 'Explore and Follow';
		const p1 = document.createElement('p');
		p1.classList.add('p-big');
		p1.innerText =
			'Dive into our super inclusive party of celebrities and creators. Follow your favorites to unlock exclusive feeds with awesome content available on Zoop only! Connect with comments, likes, and replies.';
		div11.appendChild(h31);
		div11.appendChild(p1);
		div10.appendChild(div11);
		div9.appendChild(div10);
		div2.appendChild(div9);
		const div12 = document.createElement('div');
		div12.classList.add('sidescroll-screen-w');
		const div13 = document.createElement('div');
		div13.classList.add('container');
		div13.classList.add('full-width');
		const div14 = document.createElement('div');
		div14.classList.add('sidescroll-content-box');
		const h32 = document.createElement('h3');
		h32.classList.add('sidescroll-content-title');
		h32.innerText = 'Explore and Follow';
		const p2 = document.createElement('p');
		p2.classList.add('p-big');
		p2.innerText =
			'Dive into our super inclusive party of celebrities and creators. Follow your favorites to unlock exclusive feeds with awesome content available on Zoop only! Connect with comments, likes, and replies.';
		div14.appendChild(h32);
		div14.appendChild(p2);
		div13.appendChild(div14);
		div12.appendChild(div13);
		div2.appendChild(div12);
		const div15 = document.createElement('div');
		div15.classList.add('sidescroll-screen-w');
		const div16 = document.createElement('div');
		div16.classList.add('container');
		div16.classList.add('full-width');
		const div17 = document.createElement('div');
		div17.classList.add('sidescroll-content-box');
		const h33 = document.createElement('h3');
		h33.classList.add('sidescroll-content-title');
		h33.innerText = 'Explore and Follow';
		const p3 = document.createElement('p');
		p3.classList.add('p-big');
		p3.innerText =
			'Dive into our super inclusive party of celebrities and creators. Follow your favorites to unlock exclusive feeds with awesome content available on Zoop only! Connect with comments, likes, and replies.';
		div17.appendChild(h33);
		div17.appendChild(p3);
		div16.appendChild(div17);
		div15.appendChild(div16);
		div2.appendChild(div15);

		document.querySelector('.sidescroll-append').appendChild(section);
		Webflow.require('ix2').init();

		let lottie = Webflow.require('lottie').lottie;
		function LottieScrollTrigger(vars) {
			let playhead = { frame: 0 },
				target = gsap.utils.toArray(vars.target)[0],
				speeds = { slow: '+=2000', medium: '+=1000', fast: '+=500' },
				scrollTarget = gsap.utils.toArray(vars.scrollTarget)[0],
				st = {
					trigger: scrollTarget,
					start: '0',
				},
				animation = lottie.loadAnimation({
					container: target,
					renderer: vars.renderer || 'svg',
					loop: false,
					autoplay: false,
					path: vars.path,
				});
			for (let p in vars) {
				// let users override the ScrollTrigger defaults
				st[p] = vars[p];
			}

			animation.addEventListener('DOMLoaded', function () {
				let wrap = gsap.utils.wrap(0, animation.totalFrames - 1);
				gsap.to(playhead, {
					frame: (animation.totalFrames - 1) * 5,
					ease: 'none',
					onUpdate: () => animation.goToAndStop(wrap(playhead.frame), true),
					scrollTrigger: st,
				});
			});
		}
		LottieScrollTrigger({
			target: '#lottieCharacter',
			path: 'https://uploads-ssl.webflow.com/640529b41dc5457b7da3eb69/641c56242dc6061a40246115_loopingAnimation.json',
			speed: 'slow',
			scrollTarget: '#creators-and-rewards',
			scrub: 0.1, // seconds it takes for the playhead to "catch up"
			// you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
		});
	}
});

const swiper = new Swiper('.swiper', {
	speed: 600,
	loop: true,
	autoHeight: false,
	centeredSlides: true,
	followFinger: true,
	freeMode: false,
	slideToClickedSlide: false,
	slidesPerView: 'auto',
	spaceBetween: 32,
	rewind: false,
	mousewheel: {
		forceToAxis: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	navigation: {
		nextEl: '.slide_next',
		prevEl: '.slide_prev',
	},
	breakpoints: {
		// mobile landscape
		0: {
			slidesPerView: 'auto',
			spaceBetween: 16,
			centeredSlides: false,
		},
		// tablet
		768: {
			slidesPerView: 'auto',
			spaceBetween: 16,
			centeredSlides: false,
		},
		// desktop
		992: {
			slidesPerView: 'auto',
		},
	},

	slideActiveClass: 'is-active',
	slideDuplicateActiveClass: 'is-active',
});

const slides = document.querySelectorAll('.swiper-slide');
for (let i = 0; i < slides.length; i++) {
	const realImage = slides[i].querySelector('.creator-real-image');
	const digitalImage = slides[i].querySelector('.creator-digital-image');
	if (i % 2 === 0) {
		realImage.classList.add('hidden');
		digitalImage.classList.remove('hidden');
	} else {
		realImage.classList.remove('hidden');
		digitalImage.classList.add('hidden');
	}
}
slides.forEach((s) => {
	s.addEventListener('mouseenter', (e) => {
		const realImage = e.target.querySelector('.creator-real-image');
		const digitalImage = e.target.querySelector('.creator-digital-image');
		realImage.classList.toggle('hidden');
		digitalImage.classList.toggle('hidden');
	});
	s.addEventListener('mouseleave', (e) => {
		const realImage = e.target.querySelector('.creator-real-image');
		const digitalImage = e.target.querySelector('.creator-digital-image');
		realImage.classList.toggle('hidden');
		digitalImage.classList.toggle('hidden');
	});
});

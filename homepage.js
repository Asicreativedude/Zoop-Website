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

		const divCamera = document.createElement('div');
		divCamera.classList.add('sidescroll-camera');
		section.appendChild(divCamera);
		const divFrame = document.createElement('div');
		section.appendChild(divFrame);
		divFrame.classList.add('sidescroll-frame');
		divCamera.appendChild(divFrame);

		const divImgW = document.createElement('div');
		divImgW.classList.add('sidescroll-img-w');
		divFrame.appendChild(divImgW);
		const bgImg = document.createElement('img');
		bgImg.setAttribute(
			'src',
			'https://uploads-ssl.webflow.com/640529b41dc5457b7da3eb69/641dc590ad39aec6dd55bb06_bg2.webp'
		);
		bgImg.setAttribute('loading', 'lazy');
		bgImg.setAttribute('alt', '');
		bgImg.classList.add('sidescroll-sky');
		const frontImg = document.createElement('img');
		frontImg.setAttribute(
			'src',
			'https://global-uploads.webflow.com/640529b41dc5457b7da3eb69/641bfaa95ee80a5ffdc5d30f_side-front.webp'
		);
		frontImg.setAttribute('loading', 'lazy');
		frontImg.setAttribute('alt', '');
		frontImg.classList.add('sidescroll-img-1');
		const charDiv = document.createElement('div');
		charDiv.setAttribute('id', 'lottieCharacter');
		charDiv.classList.add('character');
		divImgW.appendChild(charDiv);
		divImgW.appendChild(bgImg);
		divImgW.appendChild(frontImg);

		const sideScroll1 = document.createElement('div');
		sideScroll1.classList.add('sidescroll-screen-w');
		divFrame.appendChild(sideScroll1);
		const sideScroll1Container = document.createElement('div');
		sideScroll1Container.classList.add('container');
		sideScroll1Container.classList.add('first-sidescroll-container');
		const sideScroll1Title = document.createElement('h2');
		sideScroll1Title.classList.add('sidescroll-title');
		sideScroll1Title.innerText = 'Explore Zoop';
		sideScroll1Container.appendChild(sideScroll1Title);
		const firstBox = document.createElement('div');
		firstBox.classList.add('sidescroll-content-first-box');
		const firstBoxP = document.createElement('p');
		firstBoxP.classList.add('p-big');
		firstBoxP.innerText =
			'Collect Cards every Season and get more chances to win. From a personalized shout-out to a real-life meet and greet - the opportunities to create an unforgettable connection are limitless!';
		firstBox.appendChild(firstBoxP);
		const firstBoxTitle = document.createElement('h3');
		firstBoxTitle.classList.add('sidescroll-content-title');
		firstBoxTitle.innerText = 'It’s not just a Card - it’s an experience';
		firstBox.appendChild(firstBoxTitle);
		sideScroll1Container.appendChild(firstBox);

		const sideScroll1BG = document.createElement('div');
		sideScroll1BG.classList.add('sidescroll-screen-w');
		sideScroll1BG.appendChild(sideScroll1Container);
		divImgW.appendChild(sideScroll1BG);

		const sideScroll2 = document.createElement('div');
		sideScroll2.classList.add('sidescroll-screen-w');
		sideScroll2.classList.add('z-index-5');
		divFrame.appendChild(sideScroll2);
		const sideScroll2Container = document.createElement('div');
		sideScroll2Container.classList.add('container');
		sideScroll2Container.classList.add('sidescroll-container');
		const contentBox = document.createElement('div');
		contentBox.classList.add('sidescroll-content-box');
		const contentBoxTitle = document.createElement('h3');
		contentBoxTitle.classList.add('sidescroll-content-title');
		contentBoxTitle.innerText = 'Discover and Follow';
		const p = document.createElement('p');
		p.classList.add('p-big');
		p.innerText =
			'Dive into our super inclusive party of celebrities and creators. Follow your favorites to unlock exclusive feeds with awesome content available on Zoop only! Connect with comments, likes, and replies.';
		contentBox.appendChild(contentBoxTitle);
		contentBox.appendChild(p);
		sideScroll2Container.appendChild(contentBox);
		sideScroll2.appendChild(sideScroll2Container);
		divFrame.appendChild(sideScroll2);
		const sideScroll3 = document.createElement('div');
		sideScroll3.classList.add('sidescroll-screen-w');
		sideScroll3.classList.add('z-index-5');
		const sideScroll3Container = document.createElement('div');
		sideScroll3Container.classList.add('container');
		sideScroll3Container.classList.add('sidescroll-container');
		const contentBox2 = document.createElement('div');
		contentBox2.classList.add('sidescroll-content-box');
		const contentBox2Title = document.createElement('h3');
		contentBox2Title.classList.add('sidescroll-content-title');
		contentBox2Title.innerText = 'Collect Cards';
		const p1 = document.createElement('p');
		p1.classList.add('p-big');
		p1.innerText =
			'Start collecting Cards to take it to the next level. Cards come out in Seasons. Collect at least 6 Cards in a Season! Trade, buy, and sell cards to become a member of a unique community of fans.';
		const screenImage = document.createElement('img');
		screenImage.setAttribute(
			'src',
			'https://uploads-ssl.webflow.com/640529b41dc5457b7da3eb69/64204d297a77c6da3faba95c_cards2.webp'
		);
		screenImage.setAttribute('loading', 'lazy');
		screenImage.setAttribute('alt', 'cards');
		screenImage.classList.add('sidescroll-content-img');

		contentBox2.appendChild(contentBox2Title);
		contentBox2.appendChild(p1);
		sideScroll3Container.appendChild(contentBox2);
		sideScroll3Container.appendChild(screenImage);
		sideScroll3.appendChild(sideScroll3Container);
		divFrame.appendChild(sideScroll3);
		const sideScroll4 = document.createElement('div');
		sideScroll4.classList.add('sidescroll-screen-w');
		sideScroll4.classList.add('z-index-5');
		const sideScroll4Container = document.createElement('div');
		sideScroll4Container.classList.add('container');
		sideScroll4Container.classList.add('sidescroll-container');
		const contentBox3 = document.createElement('div');
		contentBox3.classList.add('sidescroll-content-box');
		const contentBox3Title = document.createElement('h3');
		contentBox3Title.classList.add('sidescroll-content-title');
		contentBox3Title.innerText = 'Win Rewards';
		const p2 = document.createElement('p');
		p2.classList.add('p-big');
		p2.innerText =
			'Keep collecting and connecting to get a chance to win personalized rewards from Your Favorite Celebrities & Creators!';
		const screenImage2 = document.createElement('img');
		screenImage2.setAttribute(
			'src',
			'https://uploads-ssl.webflow.com/640529b41dc5457b7da3eb69/64204ce83e9344069810087e_rewards.webp'
		);
		screenImage2.setAttribute('loading', 'lazy');
		screenImage2.setAttribute('alt', 'rewards');
		screenImage2.classList.add('sidescroll-content-img');

		contentBox3.appendChild(contentBox3Title);
		contentBox3.appendChild(p2);
		sideScroll4Container.appendChild(contentBox3);
		sideScroll4Container.appendChild(screenImage2);
		sideScroll4.appendChild(sideScroll4Container);
		divFrame.appendChild(sideScroll4);
		const sideScroll5 = document.createElement('div');
		sideScroll5.classList.add('sidescroll-screen-w');
		sideScroll5.classList.add('z-index-5');
		const sideScroll5Container = document.createElement('div');
		sideScroll5Container.classList.add('container');
		sideScroll5Container.classList.add('sidescroll-container');
		const contentBox4 = document.createElement('div');
		contentBox4.classList.add('sidescroll-content-box');
		contentBox4.classList.add('cta-box');
		const contentBox4Title = document.createElement('h3');
		contentBox4Title.classList.add('sidescroll-content-title');
		contentBox4Title.innerText = 'Join Zoop';
		const p3 = document.createElement('p');
		p3.classList.add('p-big');
		p3.classList.add('margin-0');
		p3.innerText = `Zoop is free and easy to use! All you need is an email.
		Isn’t that zooper cool?`;
		const ctaBtn = document.createElement('button');
		ctaBtn.classList.add('main-button');
		ctaBtn.classList.add('is--invert-button');
		ctaBtn.innerHTML = 'Explore Free Now';

		contentBox4.appendChild(contentBox4Title);
		contentBox4.appendChild(p3);
		contentBox4.appendChild(ctaBtn);
		sideScroll5Container.appendChild(contentBox4);
		sideScroll5.appendChild(sideScroll5Container);
		divFrame.appendChild(sideScroll5);

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
					start: 'top top',
					end: '78% bottom',
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
			path: 'https://uploads-ssl.webflow.com/640529b41dc5457b7da3eb69/641c6d795beffaa2bf1f9378_loopingAnimation-2.json',
			scrollTarget: '#creators-and-rewards',
			scrub: 0.001,
		});
	}
});

const swiper = new Swiper('.swiper', {
	speed: 5000,
	loop: true,
	autoplay: {
		delay: 1,
		disableOnInteraction: false,
	},
	autoHeight: false,
	centeredSlides: true,
	followFinger: true,
	freeMode: {
		enabled: true,
		sticky: false,
		momentum: true,
	},
	slidesPerView: 'auto',
	spaceBetween: 32,
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

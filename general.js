window.addEventListener('DOMContentLoaded', (event) => {
	// Split text into spans
	let typeSplit = new SplitType('[text-split]', {
		types: 'words, chars',
		tagName: 'span',
	});

	// // Link timelines to scroll position
	// function createScrollTrigger(triggerElement, timeline) {
	// 	// Reset tl when scroll out of view past bottom of screen
	// 	ScrollTrigger.create({
	// 		trigger: triggerElement,
	// 		start: 'top bottom',
	// 		onLeaveBack: () => {
	// 			timeline.progress(0);
	// 			timeline.pause();
	// 		},
	// 	});
	// 	// Play tl when scrolled into view (60% from top of screen)
	// 	ScrollTrigger.create({
	// 		trigger: triggerElement,
	// 		start: 'top 60%',
	// 		onEnter: () => timeline.play(),
	// 	});
	// }

	// $('[slideUpLetters]').each(function (index) {
	// 	// let element = $(this);
	// 	let tl = gsap.timeline({ paused: true });
	// 	tl.from('.char', {
	// 		opacity: 0,
	// 		yPercent: 100,
	// 		duration: 0.5,
	// 		ease: 'ease.out(2)',
	// 		stagger: { amount: 1 },
	// 		ScrollTrigger: {
	// 			trigger: $(this),
	// 			start: 'top 60%',
	// 			onEnter: () => tl.play(),
	// 		},
	// 	});
	// 	// createScrollTrigger($(this), tl);
	// });
	let titles = gsap.utils.toArray('[slideUpLetters]');
	titles.forEach((element) => {
		let tl = gsap.timeline({ paused: true });
		tl.from('.char', {
			opacity: 0,
			yPercent: 100,
			duration: 1,
			ease: 'back.out(2)',
			stagger: { amount: 2 },
		});
		ScrollTrigger.create({
			trigger: element,
			start: 'top 30%',
			onEnter: () => tl.play(),
		});
	});

	$('[cd-animated]').each(function (index) {
		let tl = gsap.timeline({ paused: true });
		tl.from('[slideUp]', {
			opacity: 0,
			yPercent: 100,
			duration: 1,
			ease: 'back.out(2)',
			stagger: { amount: 2 },
		});
		// createScrollTrigger($(this), tl);
	});

	gsap.set('[text-split], [slideUp]', { opacity: 1 });
});

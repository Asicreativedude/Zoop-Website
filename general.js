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
	let animatedContainers = gsap.utils.toArray('[cd-animated]');

	animatedContainers.forEach((element) => {
		let titles = gsap.utils.toArray('[slideUpLetters]');
		let object = element.querySelectorAll('[slideup]');
		let tl = gsap.timeline({ paused: true });
		titles.forEach((element) => {
			let char = element.querySelectorAll('.char');
			tl.from(char, {
				opacity: 0,
				yPercent: 100,
				duration: 0.5,
				ease: 'back.out(2)',
				stagger: { amount: 2 },
			});
			ScrollTrigger.create({
				trigger: element,
				start: 'top 60%',
				onEnter: () => tl.play(),
			});
		});

		tl.from(object, {
			opacity: 0,
			yPercent: 100,
			duration: 1,
			ease: 'back.out(2)',
		});
		ScrollTrigger.create({
			trigger: element,
			start: 'top 60%',
			onEnter: () => tl.play(),
		});
	});
	gsap.set('[text-split]', { opacity: 1 });
});

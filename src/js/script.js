document.addEventListener("DOMContentLoaded", () => {
	animate();
});

function animate() {
	gsap.registerPlugin(ScrollTrigger);

	gsap.set(".about__bg", {
		yPercent: 20,
	});
	gsap.set(".about__wrap", {
		yPercent: 200,
	});

	const tlPromo = gsap.timeline({
		scrollTrigger: {
			trigger: ".about",
			start: "top top",
			end: "bottom+=100%",
			scrub: 1,
			pin: true,
		},
	});

	tlPromo
		.to(".about__bg", {
			yPercent: 0,
		})
		.to(
			".about__inner",
			{
				width: "100%",
				height: "100%",
			},
			"<"
		)
		.to(
			".about__decor",
			{
				opacity: 0,
			},
			"<"
		)
		.to(
			".about__wrap",
			{
				yPercent: 0,
			},
			"<"
		);

	const tlAim = gsap.timeline({
		ease: "power1.out",
		scrollTrigger: {
			trigger: ".aim",
			start: "top top",
			end: "bottom+=130%",
			pin: true,
			scrub: 1,
		},
	});

	tlAim
		.to(
			".aim__first",
			{
				xPercent: -100,
			},
			"0.4"
		)
		.to(
			".aim__second",
			{
				xPercent: -100,
			},
			"<"
		)
		.from(".aim__text", {
			autoAlpha: 0,
			yPercent: 0,
		})
		.from(".experience__item", {
			autoAlpha: 0,
			stagger: 0.2,
		})
		.to(".experience__border", {
			width: "100%",
		});

	const texts = [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
	];
	const sections = document.querySelectorAll("section");
	sections.forEach((section, idx) => {
		ScrollTrigger.create({
			trigger: section,
			start: "top center",
			end: "bottom center",
			onEnter: () => {
				gsap.set(".fix", {
					innerText: texts[idx],
					// for image URL
					// attr: {src: texts[idx]}
				});
			},
			onEnterBack: () => {
				gsap.set(".fix", {
					innerText: texts[idx],
				});
			},
		});
	});
}

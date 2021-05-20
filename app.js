// jshint esversion:6

const smallCups = document.querySelectorAll('.cup-small');
const remained = document.getElementById('.remained');
const liters = document.getElementById('.liters');
const percentage = document.getElementById('.percentage');

const highLightCup = (idx) => {
	smallCups.forEach((cup, idx2) => {
		if (idx2 <= idx) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});
};

smallCups.forEach((cup, idx) => {
	cup.addEventListener('click', () => highLightCup(idx));
});

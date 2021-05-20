// jshint esversion:6

const smallCups = document.querySelectorAll('.cup-small');
const liters = document.querySelector('#liters');
const remained = document.querySelector('#remained');
const percentage = document.querySelector('#percentage');

const updateBigCup = () => {
	const fullCup = document.querySelectorAll('.cup-small.full').length;
	const totalCups = smallCups.length;

	if (fullCup === 0) {
		percentage.style.opacity = 0;
		percentage.style.height = 0;
	} else {
		percentage.style.opacity = '1';
		percentage.style.height = `${(fullCup / totalCups) * 30}rem`;
		percentage.innerText = `${(fullCup / totalCups) * 100}%`;
	}

	if (fullCup === totalCups) {
		remained.style.opacity = '0';
		remained.style.height = '0';
	} else {
		remained.style.opacity = '1';
		liters.innerText = `${2 - (250 * fullCup) / 1000}L`;
	}
};

const highLightCup = (idx) => {
	if (
		smallCups[idx].classList.contains('full') &&
		!smallCups[idx].nextElementSibling?.classList.contains('full')
	) {
		idx--;
	}

	smallCups.forEach((cup, idx2) => {
		if (idx2 <= idx) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});

	updateBigCup();
};

updateBigCup();

smallCups.forEach((cup, idx) => {
	cup.addEventListener('click', () => highLightCup(idx));
});

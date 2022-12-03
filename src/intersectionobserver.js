const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("viewport-visible");
        } else {
            entry.target.classList.remove("viewport-visible");
        }
    })
});

export const init = () => {
    let animationElements = document.querySelectorAll('.viewport-animation');
    animationElements.forEach((animationElement) => intersectionObserver.observe(animationElement));
}
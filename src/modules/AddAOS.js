const addAOS = (selectors, duration = '500') => {
    const matches = document.querySelectorAll(selectors);
    matches.forEach(res => {
        res.classList.add('aos-init');
        res.classList.add('aos-animate');
        res.setAttribute('data-aos', "fade-up");
        res.setAttribute('data-aos-duration', duration);
    });
}
export default addAOS;
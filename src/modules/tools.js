function scrollToElement(elem, offset = -100) {

    const yOffset = offset; 
    const element = document.getElementById(elem);

    if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        console.log(element);
    }else{
        console.error('element not found',element);
    }
}
export {scrollToElement}
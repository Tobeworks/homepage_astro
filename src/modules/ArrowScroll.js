import anime from "animejs";
/**
 *  Scroll Arrow
 */
const arrowScroller = () => {

    const arrows = document.getElementsByClassName('title-arrow-down');
    const scrollToElement = document.getElementById('contentStart');

    anime({
        targets: '.title-arrow-down',
        translateY: [-100, 0],
        delay: 500,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutBounce'
    });


    if (arrows.length > 0 || scrollToElement != null) {
        arrows[0].onclick = e => {
            e.preventDefault();
            scrollToFunc(scrollToElement.id, 60);
        }
    } else {
        if (arrows[0] != null) {
            arrows[0].style.display = 'none';
            //debug
            console.error('scrollToElement not found');
        }
    }


    /**
     *  Scroll Function
     */
    const scrollToFunc = (id, offset = 60) => {
        const element = document.getElementById(id);
        const headerOffset = offset;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        document.documentElement.scrollTop = offsetPosition;
        document.body.scrollTop = offsetPosition; // For Safari
    };
}
export default arrowScroller;
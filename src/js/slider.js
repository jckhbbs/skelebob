import { tns } from "tiny-slider/src/tiny-slider";

export let Slider = () => {
    if (document.querySelector(".my-slider")) {
        console.log('found slider');
        let Slider = tns({
            container: '.my-slider',
            items: 3,
            mouseDrag: true,
            slideBy: "page",
            swipeAngle: false,
            speed: 400
        });
    }
}



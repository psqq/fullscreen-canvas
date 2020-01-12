
export default class FullscreenCanvas {
    constructor() {
        this.el = document.createElement("canvas");
    }
    makeFullscreen() {
        const can = this.el;
        can.width = window.innerWidth;
        can.height = window.innerHeight;
    }
    makeAlwaysFullscreen() {
        this.makeFullscreen();
        window.addEventListener('resize', () => {
            this.makeFullscreen();
        });
    }
}

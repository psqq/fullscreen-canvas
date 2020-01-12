# Install

```
yarn add fullscreen-canvas
```

or

```
npm i fullscreen-canvas
```

# How to use

```javascript
import FullscreenCanvas from "fullscreen-canvas";

const fscan = new FullscreenCanvas();
const can = fscan.el;
const ctx = can.getContext("2d");
document.body.appendChild(fscan.el);
fscan.makeAlwaysFullscreen();

function go() {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(can.width, can.height);
    ctx.moveTo(can.width, 0);
    ctx.lineTo(0, can.height);
    ctx.stroke();
    requestAnimationFrame(go);
}

requestAnimationFrame(go);
```

# Recommended styles for body (for hide scroll bars)

```css
body {
    margin: 0;
    overflow: hidden;
}
```

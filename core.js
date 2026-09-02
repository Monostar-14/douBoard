(function () {
    const icons = {
        "pen": function (color) {
            return `<svg width="100%" height="100%" viewBox="0 0 50 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"><g id="pen"><rect id="pen-3" x="7.023" y="52.496" width="35.972" height="30.504" style="fill:${color};stroke:#000;stroke-width:1.58px"/><path id="pen-2" d="M42.977,52.496l-35.954,0c0,0 -0.958,-18.792 10.917,-38.792l14.12,0c11.875,20 10.917,38.792 10.917,38.792Z" style="fill:#e6e6e6;stroke:#000;stroke-width:1.58px"/><path id="pen-1" d="M18.657,13.704c0,0 4.234,-12.578 6.343,-12.578c2.109,0 6.311,12.578 6.311,12.578l-12.654,0Z" style="fill:${color};stroke:#000;stroke-width:1.58px"/></g><g id="light"><rect x="16.257" y="14.552" width="17.455" height="37.144" style="fill:url(#_Linear1)"/><rect x="10.773" y="53.352" width="28.423" height="29.648" style="fill:url(#_Linear2)"/></g><defs><linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(17.4548,0,0,37.1437,16.2566,33.1241)"><stop offset="0" style="stop-color:#fff;stop-opacity:0"/><stop offset="0.5" style="stop-color:#fff;stop-opacity:1"/><stop offset="1" style="stop-color:#fff;stop-opacity:0"/></linearGradient><linearGradient id="_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(28.4227,0,0,29.6477,10.7727,68.1761)"><stop offset="0" style="stop-color:#fff;stop-opacity:0"/><stop offset="0.5" style="stop-color:#fff;stop-opacity:.53"/><stop offset="1" style="stop-color:#fff;stop-opacity:0"/></linearGradient></defs></svg>`;
        },
        "eraser": function () {
            return `<svg width="100%" height="100%" viewBox="0 0 50 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="eraser-3" x="8.277" y="54.92" width="33.447" height="28.08" style="fill:#ffc114;stroke:#000;stroke-width:1.58px;"/><rect id="eraser-2" x="8.277" y="23.447" width="33.447" height="31.473" style="fill:#e6e6e6;stroke:#000;stroke-width:1.6px;"/><path id="eraser-1" d="M9.949,23.447l0,-14.399c0,-1.378 0.548,-2.7 1.523,-3.675c0.975,-0.974 2.297,-1.522 3.675,-1.522c5.518,0 14.188,0 19.706,0c1.378,0 2.7,0.548 3.675,1.522c0.975,0.975 1.523,2.297 1.523,3.675c0,5.806 0,14.399 0,14.399l-30.102,0Z" style="fill:#ed99c9;stroke:#000;stroke-width:1.6px;"/><g id="light"><rect x="13.257" y="24.452" width="23.455" height="29.644" style="fill:url(#_Linear1);"/><rect x="11.373" y="55.852" width="27.223" height="29.648" style="fill:url(#_Linear2);"/></g><defs><linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(23.4548,0,0,29.6437,13.2566,39.2741)"><stop offset="0" style="stop-color:#fff;stop-opacity:0"/><stop offset="0.5" style="stop-color:#fff;stop-opacity:1"/><stop offset="1" style="stop-color:#fff;stop-opacity:0"/></linearGradient><linearGradient id="_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(27.2227,0,0,29.6477,11.3727,70.6761)"><stop offset="0" style="stop-color:#fff;stop-opacity:0"/><stop offset="0.5" style="stop-color:#fff;stop-opacity:0.63"/><stop offset="1" style="stop-color:#fff;stop-opacity:0"/></linearGradient></defs></svg>`;
        },
        "width-1": function (color) {
            return `<svg width="100%" height="100%" viewBox="0 0 50 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><circle cx="25" cy="2.135" r="2.135" style="fill:${color};" /><circle cx="25" cy="199.529" r="0.471" style="fill:${color};" /><path style="fill:${color};" d="M22.865,2.135l4.27,0l-1.664,197.394l-0.942,0l-1.664,-197.394Z"/></svg>`;
        },
        "width-2": function (color) {
            return `<svg width="100%" height="100%" viewBox="0 0 50 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><circle cx="25" cy="3.085" r="3.085" style="fill:${color};" /><circle cx="25" cy="199.529" r="0.471" style="fill:${color};" /><path d="M21.915,3.085l6.17,0l-2.614,196.444l-0.942,0l-2.614,-196.444Z" style="fill:${color};" /></svg>`;
        },
        "width-3": function (color) {
            return `<svg width="100%" height="100%" viewBox="0 0 50 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><circle cx="25" cy="4.185" r="4.185" style="fill:${color};" /><circle cx="25" cy="199.529" r="0.471" style="fill:${color};" /><path d="M20.815,4.185l8.37,0l-3.714,195.344l-0.942,0l-3.714,-195.344Z" style="fill:${color};" /></svg>`;
        },
        "width-4": function (color) {
            return `<svg width="100%" height="100%" viewBox="0 0 50 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><circle cx="25" cy="5.699" r="5.699" style="fill:${color};" /><circle cx="25" cy="199.529" r="0.471" style="fill:${color};" /><path d="M19.301,5.699l11.398,0l-5.228,193.83l-0.942,0l-5.228,-193.83Z" style="fill:${color};" /></svg>`;
        },
    }
    let canvas = document.querySelector("#mainCanvas");
    let ctx = canvas.getContext("2d");

    let offCanvas = document.createElement("canvas");
    let offCtx = offCanvas.getContext("2d");

    let toolbarPen = document.querySelector(".toolbar-pen");
    let toolbarEraser = document.querySelector(".toolbar-eraser");
    let toolbarPenOnly = document.querySelector(".toolbar-penonly");
    let toolbarPenMenu = document.querySelector(".toolbarmenu-pen");
    let toolbarEraserMenu = document.querySelector(".toolbarmenu-eraser");
    let widthViewer = document.querySelector(".width-viewer");
    let penWidthSlider = document.querySelector(".pen-width-range");
    let penWidthValue = document.querySelector(".toolbarmenu-pen .slider-value");
    let eraserSizeSlider = document.querySelector(".eraser-size-range");
    let eraserSizeValue = document.querySelector(".toolbarmenu-eraser .slider-value");

    let eraser = document.querySelector(".eraser");
    let isPenOnly = false;
    for (i in document.images) document.images[i].ondragstart = function () { return false; };

    window.onresize = function () {
        offCanvas.width = canvas.width;
        offCanvas.height = canvas.height;
        offCtx.drawImage(canvas, 0, 0);

        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;

        let width = canvas.width, height = canvas.height;
        if (window.devicePixelRatio) {
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";
            canvas.height = height * window.devicePixelRatio;
            canvas.width = width * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        }
        ctx.drawImage(offCanvas, 0, 0);
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
    }

    window.onresize();

    canDraw = false;
    let baseLineList = [6, 10, 15, 25];
    let baseLineMode = 0;
    let baseLineWidth = 6; // 笔标称宽度(满压时),预设/滑杆共用
    let eraserWidth = 60; // 橡皮直径,默认 60
    let lineColorList = ["#000", "#5B2D90", "#0069BF", "#F6630C", "#AB228B", "#B7B7B7", "#E3E3E3", "#E71224", "#D20078", "#02A556", "#C09E66", "#FFC114"]; //线条颜色列表
    let lineColorMode = 0;
    let history = [];
    let priviousDraw = 0;
    let priviousPressure = 0;

    for (let i = 0; i < 4; i++) {
        document.querySelector(`.width-switcher-${i + 1}`).onpointerup = function () { setPenWidth(i) }
    }

    for (let i = 0; i < 12; i++) {
        let child = document.createElement("div");
        child.classList.add("color-switcher");
        child.style.backgroundColor = lineColorList[i];
        child.onpointerup = function () {
            setPenColor(i)
        }
        if (i == 0) {
            child.classList.add("active");
        }
        document.querySelector(`.switcher-container[type="color"]`).appendChild(child)
    }

    // 自选颜色:第 13 个色块,点击弹出系统取色器
    lineColorList[12] = "#000";
    let customColorInput = document.createElement("input");
    customColorInput.type = "color";
    customColorInput.value = lineColorList[12];
    customColorInput.classList.add("color-switcher", "custom");
    customColorInput.onpointerup = function () { setPenColor(12); };
    customColorInput.oninput = function () {
        lineColorList[12] = this.value;
        setPenColor(12);
    };
    document.querySelector(`.switcher-container[type="color"]`).appendChild(customColorInput);

    // 渲染笔图标右下角大小点 + 菜单宽度预览点
    function renderWidthPreview() {
        const color = lineColorList[lineColorMode];
        const d = Math.min(34, Math.max(3, baseLineWidth));
        widthViewer.innerHTML = `<span style="width:${d}px;height:${d}px;background:${color}"></span>`;
        const dot = Math.min(22, Math.max(3, baseLineWidth));
        toolbarPen.innerHTML = icons.pen(color) + `<span style="width:${dot}px;height:${dot}px;background:${color}"></span>`;
    }

    function setPenWidth(mode) {
        baseLineMode = mode;
        baseLineWidth = baseLineList[mode];
        penWidthSlider.value = baseLineWidth;
        penWidthValue.textContent = baseLineWidth;
        document.querySelector(`.switcher-container[type="width"] .active`).classList.remove("active");
        document.querySelector(`.width-switcher-${mode + 1}`).classList.add("active");
        renderWidthPreview();
    }

    // 粗细滑杆:连续调节,取消档位高亮
    penWidthSlider.oninput = function () {
        baseLineWidth = +this.value;
        penWidthValue.textContent = this.value;
        const cur = document.querySelector(`.switcher-container[type="width"] .active`);
        if (cur) cur.classList.remove("active");
        renderWidthPreview();
    };

    setPenWidth(0);

    function setPenColor(mode) {
        lineColorMode = mode;
        renderWidthPreview();
        let all = document.querySelectorAll(`.color-switcher`);
        for (let i = 0; i < all.length; i++) {
            all[i].classList.remove("active");
        }
        all[mode].classList.add("active");
    }

    setPenColor(0);


    let points = [];
    let beginPoint = null;

    const drawMode = {
        "down": function (e) {
            if (isPenOnly && e.pointerType != "pen") return;
            setToolbarStatus(false);
            // writeHistory();
            canDraw = true;
            ctx.globalCompositeOperation = "source-over";
            ctx.strokeStyle = lineColorList[lineColorMode];
            const { x, y, pressure } = getPos(e);
            priviousPressure = pressure;
            points.push({ x, y });
            beginPoint = { x, y };
        },
        "up": function (e) {
            if (!canDraw) return;
            if (isPenOnly && e.pointerType != "pen") return;
            setToolbarStatus(true);
            const { x, y, pressure } = getPos(e);

            points.push({ x, y });

            if (points.length > 3) {
                const lastTwoPoints = points.slice(-2);
                const controlPoint = lastTwoPoints[0];
                const endPoint = lastTwoPoints[1];
                usePen(beginPoint, controlPoint, endPoint, (priviousPressure + pressure) / 2 * baseLineWidth);
            } else {
                priviousPressure = pressure;
            }
            beginPoint = null;
            canDraw = false;
            points = [];
        },
        "move": function (e) {
            if (isPenOnly && e.pointerType != "pen") return;
            if (!canDraw) return;
            const { x, y, pressure } = getPos(e);
            points.push({ x, y });

            if (points.length > 3) {
                const lastTwoPoints = points.slice(-2);
                const controlPoint = lastTwoPoints[0];
                const endPoint = {
                    x: (lastTwoPoints[0].x + lastTwoPoints[1].x) / 2,
                    y: (lastTwoPoints[0].y + lastTwoPoints[1].y) / 2,
                }
                usePen(beginPoint, controlPoint, endPoint, pressure * baseLineWidth);
                beginPoint = endPoint;
            }
        }
    }

    const eraserMode = {
        "down": function (e) {
            setToolbarStatus(false);
            // writeHistory();
            canDraw = true;
            ctx.strokeStyle = "rgba(0,0,0,1)";
            ctx.globalCompositeOperation = "destination-out";
            const { x, y } = getPos(e);
            eraser.style.width = `${eraserWidth}px`;
            eraser.style.height = `${eraserWidth}px`;
            eraser.style.top = `${y - eraserWidth / 2}px`;
            eraser.style.left = `${x - eraserWidth / 2}px`;
            eraser.style.display = "block";
            points.push({ x, y });
            beginPoint = { x, y };
        },
        "up": function (e) {
            if (!canDraw) return;
            setToolbarStatus(true);
            const { x, y } = getPos(e);

            points.push({ x, y });

            if (points.length > 3) {
                const lastTwoPoints = points.slice(-2);
                const controlPoint = lastTwoPoints[0];
                const endPoint = lastTwoPoints[1];
                useEraser(beginPoint, controlPoint, endPoint, eraserWidth);
            }
            beginPoint = null;
            canDraw = false;
            eraser.style.display = "none";
            points = [];
        },
        "move": function (e) {
            if (!canDraw) return;
            const { x, y } = getPos(e);
            points.push({ x, y });

            if (points.length > 3) {
                const lastTwoPoints = points.slice(-2);
                const controlPoint = lastTwoPoints[0];
                const endPoint = {
                    x: (lastTwoPoints[0].x + lastTwoPoints[1].x) / 2,
                    y: (lastTwoPoints[0].y + lastTwoPoints[1].y) / 2,
                }
                eraser.style.top = `${y - eraserWidth / 2}px`;
                eraser.style.left = `${x - eraserWidth / 2}px`;
                useEraser(beginPoint, controlPoint, endPoint, eraserWidth);
                beginPoint = endPoint;
            }
        }
    }

    canvas.addEventListener("pointerdown", drawMode["down"], { passive: true })
    canvas.addEventListener("pointerup", drawMode["up"], { passive: true })
    canvas.addEventListener("pointermove", drawMode["move"], { passive: true })

    function getPos(evt) {
        return {
            x: evt.clientX,
            y: evt.clientY,
            pressure: evt.pressure
        }
    }
    function usePen(beginPoint, controlPoint, endPoint, width) {
        ctx.beginPath();
        ctx.moveTo(beginPoint.x, beginPoint.y);
        ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
        ctx.lineWidth = width;
        ctx.stroke();
        ctx.closePath();
    }

    function useEraser(beginPoint, controlPoint, endPoint, width) {
        ctx.beginPath();
        ctx.moveTo(beginPoint.x, beginPoint.y);
        ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
        ctx.lineWidth = width;
        ctx.stroke();
    }

    toolbarEraser.innerHTML = icons.eraser();

    document.querySelector(".clearAll").onpointerup = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        toolbarEraserMenu.classList.remove("active");
    }
    document.querySelector(".toolbar-export").onpointerup = function () {
        toolbarPenMenu.classList.remove("active");
        toolbarEraserMenu.classList.remove("active");
        exportCanvas();
    }

    // 橡皮大小滑杆
    eraserSizeSlider.oninput = function () {
        eraserWidth = +this.value;
        eraserSizeValue.textContent = this.value;
        if (eraser.style.display !== "none") {
            eraser.style.width = `${eraserWidth}px`;
            eraser.style.height = `${eraserWidth}px`;
        }
    }
    toolbarPen.onpointerup = function () {
        toolbarEraserMenu.classList.remove("active");
        if (toolbarPen.classList.contains("active")) {
            toolbarPenMenu.classList.toggle("active");
        }
        toolbarPen.classList.add("active");
        toolbarEraser.classList.remove("active");
        canvas.removeEventListener("pointerdown", eraserMode["down"], { passive: true })
        canvas.removeEventListener("pointerup", eraserMode["up"], { passive: true })
        canvas.removeEventListener("pointermove", eraserMode["move"], { passive: true })
        canvas.removeEventListener("pointerdown", drawMode["down"], { passive: true })
        canvas.removeEventListener("pointerup", drawMode["up"], { passive: true })
        canvas.removeEventListener("pointermove", drawMode["move"], { passive: true })
        canvas.addEventListener("pointerdown", drawMode["down"], { passive: true })
        canvas.addEventListener("pointerup", drawMode["up"], { passive: true })
        canvas.addEventListener("pointermove", drawMode["move"], { passive: true })
    }
    toolbarEraser.onpointerup = function () {
        toolbarPenMenu.classList.remove("active");
        if (toolbarEraser.classList.contains("active")) {
            toolbarEraserMenu.classList.toggle("active");
        }
        toolbarEraser.classList.add("active");
        toolbarPen.classList.remove("active");
        canvas.removeEventListener("pointerdown", eraserMode["down"], { passive: true })
        canvas.removeEventListener("pointerup", eraserMode["up"], { passive: true })
        canvas.removeEventListener("pointermove", eraserMode["move"], { passive: true })
        canvas.removeEventListener("pointerdown", drawMode["down"], { passive: true })
        canvas.removeEventListener("pointerup", drawMode["up"], { passive: true })
        canvas.removeEventListener("pointermove", drawMode["move"], { passive: true })
        canvas.addEventListener("pointerdown", eraserMode["down"], { passive: true })
        canvas.addEventListener("pointerup", eraserMode["up"], { passive: true })
        canvas.addEventListener("pointermove", eraserMode["move"], { passive: true })
    }

    toolbarPenOnly.onpointerup = function () {
        isPenOnly = !isPenOnly;
        if (isPenOnly) {
            toolbarPenOnly.classList.add("enabled");
        } else {
            toolbarPenOnly.classList.remove("enabled");
        }
    }


    window.onkeyup = function (e) {
        if (e.ctrlKey == true && e.keyCode == 83) { //Ctrl+S 导出图片
            e.preventDefault();
            e.returnvalue = false;
            exportCanvas();
        }
        if (e.keyCode == 69) { //E 橡皮擦
            e.returnvalue = false;
            toolbarEraser.onpointerup();
        }
        if (e.keyCode == 66) { //B 笔
            e.returnvalue = false;
            toolbarPen.onpointerup();
        }
        if (e.ctrlKey == true && e.keyCode == 90) { //Ctrl+Z 撤销
            e.returnvalue = false;
            e.preventDefault();
            let content = popHistory();
            if (content) {
                ctx.putImageData(content, 0, 0);
            }
        }
    }

    function writeHistory() {
        if (history.length > 15) {
            history.shift()
        }
        if (priviousDraw == 0) {
            priviousDraw = new Date().getTime();
            history.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        } else {
            if (new Date().getTime() - priviousDraw > 1000) {
                history.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            }
        }
    }

    function popHistory() {
        if (history.length == 0) {
            return false;
        } else {
            return history.pop(history);
        }
    }

    function exportCanvas() {
        // 一键导出:白底合成 → 整块画布全尺寸下载(与屏幕分辨率一致,不裁剪)
        const w = canvas.width, h = canvas.height;
        const out = document.createElement("canvas");
        out.width = w;
        out.height = h;
        const octx = out.getContext("2d");
        octx.fillStyle = "#fff";
        octx.fillRect(0, 0, w, h);
        octx.drawImage(canvas, 0, 0);

        const link = document.createElement("a");
        link.download = `DouBoard(${exportStamp()}).png`;
        link.onclick = function () { link.remove(); };
        out.toBlob(function (blob) {
            const objURL = URL.createObjectURL(blob);
            link.href = objURL;
            link.click();
            setTimeout(function () { URL.revokeObjectURL(objURL); }, 5000);
        }, "image/png");
    }

    function exportStamp() {
        const d = new Date();
        const p = function (n) { return (n < 10 ? "0" : "") + n; };
        return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}_${p(d.getHours())}-${p(d.getMinutes())}-${p(d.getSeconds())}`;
    }

    function setToolbarStatus(status) {
        let toolbarContainer = document.querySelector("#toolbar-container");
        if (!status) {
            toolbarContainer.classList.add("untouchable");
        } else {
            toolbarContainer.classList.remove("untouchable");
        }
    }
})()


document.addEventListener("touchstart", function (e) {
    e.preventDefault();
}, { passive: false });
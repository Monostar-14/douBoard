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

    // ---- 画布即世界:笔迹全部存在离屏 worldCanvas,主画布只是「视口」----
    // 视口 = 屏幕左上角对应的世界坐标(viewX/viewY,CSS px)。抓手工具拖动视口;
    // 笔迹画到屏幕之外时 worldCanvas 自动向右/下扩展,导出会包含屏外内容。
    let worldCanvas = document.createElement("canvas");
    let wctx = worldCanvas.getContext("2d");
    let viewX = 0, viewY = 0;   // 视口左上角(世界坐标, CSS px)
    let panning = false;        // 抓手拖动进行中
    let panLast = null;         // 上一帧指针位置

    let toolbarPen = document.querySelector(".toolbar-pen");
    let toolbarEraser = document.querySelector(".toolbar-eraser");
    let toolbarPan = document.querySelector(".toolbar-pan");
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

    // 世界画布扩容(只增不减):旧内容 1:1 原样搬入,保持世界坐标不变
    function growWorld(cssW, cssH) {
        const dpr = window.devicePixelRatio || 1;
        const nw = Math.max(Math.round(cssW * dpr), worldCanvas.width);
        const nh = Math.max(Math.round(cssH * dpr), worldCanvas.height);
        if (nw === worldCanvas.width && nh === worldCanvas.height) return;
        // 新 context 会重置一切绘图状态,先记下正在进行的笔迹状态(换 canvas 后原样恢复)
        const style = wctx.strokeStyle;
        const op = wctx.globalCompositeOperation;
        const width = wctx.lineWidth;
        const fill = wctx.fillStyle;
        const old = worldCanvas;
        worldCanvas = document.createElement("canvas");
        worldCanvas.width = nw;
        worldCanvas.height = nh;
        wctx = worldCanvas.getContext("2d");
        wctx.setTransform(1, 0, 0, 1, 0, 0);
        wctx.drawImage(old, 0, 0);
        wctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        wctx.strokeStyle = style;
        wctx.globalCompositeOperation = op;
        wctx.lineWidth = width;
        wctx.fillStyle = fill;
        wctx.lineJoin = "round";
        wctx.lineCap = "round";
    }

    // 把视口区域从世界画布刷到主画布(主画布 = 纯 framebuffer,恒为 identity 变换)
    // 只绘制世界∩视口的交集,1:1 对齐;越界部分留白,防止源矩形越界被拉伸变形
    function paintViewport() {
        const dpr = window.devicePixelRatio || 1;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        const cw = canvas.width, ch = canvas.height;
        ctx.clearRect(0, 0, cw, ch);
        const sx0 = Math.round(viewX * dpr), sy0 = Math.round(viewY * dpr);
        const ix0 = Math.max(0, sx0), iy0 = Math.max(0, sy0);
        const ix1 = Math.min(worldCanvas.width, sx0 + cw), iy1 = Math.min(worldCanvas.height, sy0 + ch);
        if (ix1 > ix0 && iy1 > iy0) {
            ctx.drawImage(worldCanvas, ix0, iy0, ix1 - ix0, iy1 - iy0, ix0 - sx0, iy0 - sy0, ix1 - ix0, iy1 - iy0);
        }
    }

    function resizeScreen() {
        const dpr = window.devicePixelRatio || 1;
        const cw = document.documentElement.clientWidth;
        const ch = document.documentElement.clientHeight;
        canvas.width = Math.round(cw * dpr);
        canvas.height = Math.round(ch * dpr);
        canvas.style.width = cw + "px";
        canvas.style.height = ch + "px";
        // 世界至少与视口一样大:新开页面时世界 = 一屏,之后随笔迹向右/下扩展
        growWorld(cw, ch);
        paintViewport();
    }

    window.onresize = resizeScreen;

    resizeScreen();

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
            wctx.globalCompositeOperation = "source-over";
            wctx.strokeStyle = lineColorList[lineColorMode];
            const { x, y, pressure } = getPos(e);
            priviousPressure = pressure;
            points.push({ x: x + viewX, y: y + viewY, pressure });
            beginPoint = { x: x + viewX, y: y + viewY };
        },
        "up": function (e) {
            if (!canDraw) return;
            if (isPenOnly && e.pointerType != "pen") return;
            setToolbarStatus(true);
            const { x, y, pressure } = getPos(e);

            points.push({ x: x + viewX, y: y + viewY, pressure });

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
            points.push({ x: x + viewX, y: y + viewY, pressure });

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
            wctx.strokeStyle = "rgba(0,0,0,1)";
            wctx.globalCompositeOperation = "destination-out";
            const { x, y } = getPos(e);
            eraser.style.width = `${eraserWidth}px`;
            eraser.style.height = `${eraserWidth}px`;
            eraser.style.top = `${y - eraserWidth / 2}px`;
            eraser.style.left = `${x - eraserWidth / 2}px`;
            eraser.style.display = "block";
            points.push({ x: x + viewX, y: y + viewY });
            beginPoint = { x: x + viewX, y: y + viewY };
        },
        "up": function (e) {
            if (!canDraw) return;
            setToolbarStatus(true);
            const { x, y } = getPos(e);

            points.push({ x: x + viewX, y: y + viewY });

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
            points.push({ x: x + viewX, y: y + viewY });

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

    // 抓手工具:拖动改变视口(viewX/viewY),内容随指针方向移动
    const panMode = {
        "down": function (e) {
            setToolbarStatus(false);
            panning = true;
            panLast = { x: e.clientX, y: e.clientY };
            canvas.style.cursor = "grabbing";
        },
        "up": function (e) {
            if (!panning) return;
            panning = false;
            panLast = null;
            setToolbarStatus(true);
            canvas.style.cursor = "grab";
        },
        "move": function (e) {
            if (!panning || !panLast) return;
            const dx = e.clientX - panLast.x, dy = e.clientY - panLast.y;
            panLast = { x: e.clientX, y: e.clientY };
            if (!dx && !dy) return;
            // 世界原点 = 初始屏幕左上角;拖到左上以外不越界(纸张从原点开始)
            viewX = Math.max(0, viewX - dx);
            viewY = Math.max(0, viewY - dy);
            paintViewport();
        }
    }

    canvas.addEventListener("pointerdown", drawMode["down"], { passive: true });

    function getPos(evt) {
        return {
            x: evt.clientX,
            y: evt.clientY,
            pressure: evt.pressure
        }
    }

    // 笔迹画到世界边缘外时自动扩展世界画布(留出余量,避免频繁扩容)
    function ensureWorldCovers(wx, wy, width) {
        const pad = width / 2 + 8;
        growWorld(wx + pad, wy + pad);
    }

    function usePen(beginPoint, controlPoint, endPoint, width) {
        const hx = Math.max(beginPoint.x, controlPoint.x, endPoint.x);
        const hy = Math.max(beginPoint.y, controlPoint.y, endPoint.y);
        ensureWorldCovers(hx, hy, width);
        wctx.beginPath();
        wctx.moveTo(beginPoint.x, beginPoint.y);
        wctx.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
        wctx.lineWidth = width;
        wctx.stroke();
        wctx.closePath();
        paintViewport();
    }

    function useEraser(beginPoint, controlPoint, endPoint, width) {
        const hx = Math.max(beginPoint.x, controlPoint.x, endPoint.x);
        const hy = Math.max(beginPoint.y, controlPoint.y, endPoint.y);
        ensureWorldCovers(hx, hy, width);
        wctx.beginPath();
        wctx.moveTo(beginPoint.x, beginPoint.y);
        wctx.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
        wctx.lineWidth = width;
        wctx.stroke();
        paintViewport();
    }

    // 工具切换:三种模式(笔/橡皮/抓手)互斥,统一摘除/挂载指针监听
    function detachToolListeners() {
        canvas.removeEventListener("pointerdown", drawMode["down"], { passive: true });
        canvas.removeEventListener("pointerup", drawMode["up"], { passive: true });
        canvas.removeEventListener("pointermove", drawMode["move"], { passive: true });
        canvas.removeEventListener("pointerdown", eraserMode["down"], { passive: true });
        canvas.removeEventListener("pointerup", eraserMode["up"], { passive: true });
        canvas.removeEventListener("pointermove", eraserMode["move"], { passive: true });
        canvas.removeEventListener("pointerdown", panMode["down"], { passive: true });
        canvas.removeEventListener("pointerup", panMode["up"], { passive: true });
        canvas.removeEventListener("pointermove", panMode["move"], { passive: true });
    }

    function attachToolListeners(mode) {
        canvas.addEventListener("pointerdown", mode["down"], { passive: true });
        canvas.addEventListener("pointerup", mode["up"], { passive: true });
        canvas.addEventListener("pointermove", mode["move"], { passive: true });
    }

    canvas.addEventListener("pointerdown", drawMode["down"], { passive: true });
    canvas.addEventListener("pointerup", drawMode["up"], { passive: true });
    canvas.addEventListener("pointermove", drawMode["move"], { passive: true });

    toolbarEraser.innerHTML = icons.eraser();

    let confirmMask = document.querySelector(".confirm-mask");
    let confirmOk = document.querySelector("#confirmOk");
    let confirmCancel = document.querySelector("#confirmCancel");

    function showConfirm() {
        confirmMask.classList.add("show");
    }

    function hideConfirm() {
        confirmMask.classList.remove("show");
    }

    confirmOk.onclick = function () {
        hideConfirm();
        toolbarEraserMenu.classList.remove("active");
        burstDissolve();
    };
    confirmCancel.onclick = hideConfirm;
    confirmMask.onpointerup = function (e) {
        if (e.target === confirmMask) hideConfirm();
    };

    // ---- 清空粒子消散特效(确认后笔迹绽开成碎屑飘散,Telegram 删消息风格) ----
    // fx 层浮在笔迹之上、工具栏之下,不拦截指针;主画布立即清空,碎屑在此层播放
    let fxCanvas = document.createElement("canvas");
    fxCanvas.id = "fxCanvas";
    fxCanvas.style.cssText = "position:fixed;top:0;left:0;z-index:9;pointer-events:none;touch-action:none;";
    document.body.insertBefore(fxCanvas, canvas.nextSibling);
    let fxCtx = fxCanvas.getContext("2d");
    let fxBurst = null; // 运行中的爆散动画

    function burstDissolve() {
        const w = canvas.width, h = canvas.height;
        let img = null;
        try { img = ctx.getImageData(0, 0, w, h); } catch (e) { }
        // 清空整个世界(屏外笔迹一并消失),视口与 fx 层留作碎屑播报
        wctx.setTransform(1, 0, 0, 1, 0, 0);
        wctx.clearRect(0, 0, worldCanvas.width, worldCanvas.height);
        wctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, w, h); // 主画布立即清空,笔迹碎屑交给 fx 层
        if (fxBurst) { cancelAnimationFrame(fxBurst.raf); fxBurst = null; }
        fxCtx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
        if (!img) return;
        const dpr = window.devicePixelRatio || 1;
        const data = img.data;

        // 统计笔迹像素并求形心(爆散以形心为原点向四周绽开)
        let count = 0, sx = 0, sy = 0;
        for (let y = 0; y < h; y++) {
            const row = y * w;
            for (let x = 0; x < w; x++) {
                if (data[(row + x) * 4 + 3] > 96) { count++; sx += x; sy += y; }
            }
        }
        if (!count) return;
        const cxc = sx / count, cyc = sy / count;

        // 像素过多时按步长抽稀,碎屑数封顶 ~5200,满屏也能流畅
        const step = Math.max(1, Math.ceil(count / 5200));
        const sizes = [1.05, 1.4, 1.75, 2.3]; // 设备像素,颗粒有大有小
        const parts = [];
        let n = 0;
        for (let y = 0; y < h; y++) {
            const row = y * w;
            for (let x = 0; x < w; x++) {
                const off = (row + x) * 4;
                const a = data[off + 3];
                if (a <= 96) continue;
                if (++n % step) continue;
                let r = data[off], g = data[off + 1], b = data[off + 2];
                if (a < 255) { // 去预乘,抗锯齿边缘取真实笔色
                    const k = 255 / a;
                    r = Math.min(255, Math.round(r * k));
                    g = Math.min(255, Math.round(g * k));
                    b = Math.min(255, Math.round(b * k));
                }
                const dx = x - cxc, dy = y - cyc;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                const spread = 0.45 + 0.55 * Math.min(1, dist / (300 * dpr)); // 离形心越远飞得越快
                const speed = (120 + 330 * Math.random()) * spread * dpr; // 设备 px/s
                const ang = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.15; // 径向 + 切向抖动
                parts.push({
                    x: x, y: y,
                    vx: Math.cos(ang) * speed,
                    vy: Math.sin(ang) * speed,
                    s: Math.max(1, Math.round(sizes[(Math.random() * sizes.length) | 0] * dpr)),
                    color: "rgb(" + r + "," + g + "," + b + ")",
                    delay: Math.random() * 110, // 错峰起爆,更像碎屑逐粒脱离
                    a0: 0.78 + Math.random() * 0.22
                });
            }
        }
        if (!parts.length) return;
        fxCanvas.width = w;
        fxCanvas.height = h;
        fxCanvas.style.width = canvas.style.width;
        fxCanvas.style.height = canvas.style.height;

        const dur = 1050;             // 单粒可见时长 ms
        const damp = Math.exp(-4.2 / 60); // 速度指数衰减(60fps 基准,按实际 dt 换算)
        const grav = 26 * dpr;        // 轻微下坠,自然飘散
        fxBurst = { t0: performance.now(), last: 0, parts, raf: 0 };
        const tick = function (ts) {
            const b = fxBurst;
            if (!b) return;
            const dt = Math.min(0.05, b.last ? (ts - b.last) / 1000 : 1 / 60);
            b.last = ts;
            const age = ts - b.t0;
            const dampDt = Math.pow(damp, dt * 60);
            fxCtx.clearRect(0, 0, w, h);
            let alive = false;
            for (let i = 0; i < b.parts.length; i++) {
                const p = b.parts[i];
                const t = age - p.delay;
                if (t <= 0) { alive = true; continue; }
                if (t > dur) continue;
                alive = true;
                p.x += p.vx * dt;
                p.y += p.vy * dt;
                p.vy += grav * dt;
                p.vx *= dampDt;
                p.vy *= dampDt;
                const k = t / dur;
                fxCtx.globalAlpha = p.a0 * (1 - Math.pow(k, 1.55)); // 先慢后快的淡出
                fxCtx.fillStyle = p.color;
                fxCtx.fillRect(p.x - p.s / 2, p.y - p.s / 2, p.s, p.s);
            }
            if (alive) {
                b.raf = requestAnimationFrame(tick);
            } else {
                fxCtx.clearRect(0, 0, w, h);
                fxBurst = null;
            }
        };
        fxBurst.raf = requestAnimationFrame(tick);
    }

    document.querySelector(".clearAll").onpointerup = function () {
        showConfirm();
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
        toolbarPan.classList.remove("active");
        canvas.style.cursor = "";
        detachToolListeners();
        attachToolListeners(drawMode);
    }
    toolbarEraser.onpointerup = function () {
        toolbarPenMenu.classList.remove("active");
        if (toolbarEraser.classList.contains("active")) {
            toolbarEraserMenu.classList.toggle("active");
        }
        toolbarEraser.classList.add("active");
        toolbarPen.classList.remove("active");
        toolbarPan.classList.remove("active");
        canvas.style.cursor = "";
        detachToolListeners();
        attachToolListeners(eraserMode);
    }
    toolbarPan.onpointerup = function () {
        toolbarPenMenu.classList.remove("active");
        toolbarEraserMenu.classList.remove("active");
        toolbarPan.classList.add("active");
        toolbarPen.classList.remove("active");
        toolbarEraser.classList.remove("active");
        canvas.style.cursor = "grab";
        detachToolListeners();
        attachToolListeners(panMode);
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
        if (e.keyCode == 72) { //H 拖动画布
            e.returnvalue = false;
            toolbarPan.onpointerup();
        }
        if (e.ctrlKey == true && e.keyCode == 90) { //Ctrl+Z 撤销
            e.returnvalue = false;
            e.preventDefault();
            let content = popHistory();
            if (content) {
                ctx.putImageData(content, 0, 0);
            }
        }
        if (e.keyCode == 27) { //Esc 关闭确认弹窗
            hideConfirm();
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
        // 一键导出:白底合成。导出范围 = 当前屏幕所见 ∪ 全部笔迹,
        // 因此最小是一屏(所见即所得),最大是包含所有图案的大小(屏外笔迹不丢)。
        const dpr = window.devicePixelRatio || 1;
        const vw = canvas.width, vh = canvas.height; // 视口(device px)
        let rx0 = Math.floor(viewX * dpr), ry0 = Math.floor(viewY * dpr);
        let rx1 = Math.ceil((viewX * dpr) + vw), ry1 = Math.ceil((viewY * dpr) + vh);

        // 扫描整个世界画布,找笔迹边界(空画布时仅导出视口)
        const ww = worldCanvas.width, wh = worldCanvas.height;
        let data = null;
        try { data = wctx.getImageData(0, 0, ww, wh).data; } catch (e) { }
        if (data) {
            let minX = ww, minY = wh, maxX = -1, maxY = -1;
            for (let y = 0; y < wh; y++) {
                const row = y * ww;
                for (let x = 0; x < ww; x++) {
                    if (data[(row + x) * 4 + 3] > 0) {
                        if (x < minX) minX = x;
                        if (x > maxX) maxX = x;
                        if (y < minY) minY = y;
                        if (y > maxY) maxY = y;
                    }
                }
            }
            if (maxX >= 0) {
                rx0 = Math.floor(Math.min(rx0, minX));
                ry0 = Math.floor(Math.min(ry0, minY));
                rx1 = Math.ceil(Math.max(rx1, maxX + 1));
                ry1 = Math.ceil(Math.max(ry1, maxY + 1));
            }
        }
        const W = Math.max(1, rx1 - rx0), H = Math.max(1, ry1 - ry0);
        const out = document.createElement("canvas");
        out.width = W;
        out.height = H;
        const octx = out.getContext("2d");
        octx.fillStyle = "#fff";
        octx.fillRect(0, 0, W, H);
        octx.drawImage(worldCanvas, rx0, ry0, W, H, 0, 0, W, H);

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

    // 本机联调用:暴露视口状态给 E2E(线上站点不暴露)
    if (location.hostname === "127.0.0.1" || location.hostname === "localhost") {
        window.__douboard = {
            get view() {
                return { x: viewX, y: viewY, worldW: worldCanvas.width, worldH: worldCanvas.height, dpr: window.devicePixelRatio || 1 };
            },
            worldInk: function () {
                const w = worldCanvas.width, h = worldCanvas.height;
                const d = wctx.getImageData(0, 0, w, h).data;
                let n = 0, mnX = 1e9, mxX = -1, mnY = 1e9, mxY = -1;
                for (let y = 0; y < h; y++) {
                    const row = y * w;
                    for (let x = 0; x < w; x++) {
                        if (d[(row + x) * 4 + 3] > 0) {
                            n++;
                            if (x < mnX) mnX = x;
                            if (x > mxX) mxX = x;
                            if (y < mnY) mnY = y;
                            if (y > mxY) mxY = y;
                        }
                    }
                }
                return { n, box: n ? [mnX, mnY, mxX, mxY] : null };
            },
            repaint: function () { paintViewport(); }
        };
    }
})()


document.addEventListener("touchstart", function (e) {
    e.preventDefault();
}, { passive: false });
var loadingSpinner = document.querySelector("#loading-text");
var container = document.querySelector("#unity-container");
var canvas = document.querySelector("#unity-canvas");
var buildUrl = "Build";
var loaderUrl = buildUrl + "/Build.loader.js";
var config = {
    dataUrl: buildUrl + "/325887acc025b65191156c10f85d56c9.data",
    frameworkUrl: buildUrl + "/ac21e3352023cb1f18249ad953f29eb3.js",
    codeUrl: buildUrl + "/dbe551edd8a1b78b2d618105db7f0388.wasm",
streamingAssetsUrl: "StreamingAssets",
    companyName: "Quantum Frontier",
    productName: "Quantum Frontier",
    productVersion: "1.0"
};

var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
    }).then((unityInstance) => {
        loadingSpinner.classList.add("hidden");
    });
};
document.body.appendChild(script);

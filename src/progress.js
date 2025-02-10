
import { Camera } from './components/camera/camera.js';

document.addEventListener("DOMContentLoaded", function () {

    const progressBar = document.getElementById("progress-bar");

    let width = 0;

    const interval = setInterval(function () {

        if (width >= 100) {

            clearInterval(interval);

            document.getElementById("progress-bar-container").style.display = "none";

            const scene = document.querySelector("a-scene");
            scene.style.display = "block";
            scene.setAttribute("cursor", "rayOrigin: mouse; ");



            setTimeout(function () {
                Camera.moveCamera(8000, [0, 2.2, 0], [1.237, 3, -35.03326]);
            }, 500);


        } else {

            width++;

            progressBar.style.width = width + "%";

        }

    }, 10); // 10ms interval for smoother progress


});
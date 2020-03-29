// postprocessing

composer = new EffectComposer(renderer);

var renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
composer.addPass(outlinePass);

var onLoad = function (texture) {

    outlinePass.patternTexture = texture;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

};

// var loader = new THREE.TextureLoader();

// loader.load('textures/tri_pattern.jpg', onLoad);

// effectFXAA = new ShaderPass(FXAAShader);
// effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);
// composer.addPass(effectFXAA);

window.addEventListener('resize', onWindowResize, false);

// window.addEventListener('mousemove', onTouchMove);
// window.addEventListener('touchmove', onTouchMove);

// function onTouchMove(event) {

//     var x, y;

//     if (event.changedTouches) {

//         x = event.changedTouches[0].pageX;
//         y = event.changedTouches[0].pageY;

//     } else {

//         x = event.clientX;
//         y = event.clientY;

//     }

//     mouse.x = (x / window.innerWidth) * 2 - 1;
//     mouse.y = - (y / window.innerHeight) * 2 + 1;

//     checkIntersection();

// }

// function addSelectedObject(object) {

//     selectedObjects = [];
//     selectedObjects.push(object);

// }

// function checkIntersection() {

//     raycaster.setFromCamera(mouse, camera);

//     var intersects = raycaster.intersectObjects([scene], true);

//     if (intersects.length > 0) {

//         var selectedObject = intersects[0].object;
//         addSelectedObject(selectedObject);
//         outlinePass.selectedObjects = selectedObjects;

//     } else {

//         // outlinePass.selectedObjects = [];

//     }

// }

// }

function onWindowResize() {

    var width = window.innerWidth;
    var height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    composer.setSize(width, height);

    // effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);

}

function animate() {

    requestAnimationFrame(animate);

    // stats.begin();

    // var timer = performance.now();

    // if (params.rotate) {

    //     group.rotation.y = timer * 0.0001;

    // }

    // controls.update();

    composer.render();

    // stats.end();



    //-------------------------------trimmed code copied from above----------------------------------------------


    // postprocessing

    composer = new EffectComposer(renderer);

    var renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
    composer.addPass(outlinePass);

    var onLoad = function (texture) {

        outlinePass.patternTexture = texture;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;

    };

    // var loader = new THREE.TextureLoader();

    // loader.load('textures/tri_pattern.jpg', onLoad);


    window.addEventListener('resize', onWindowResize, false);


    function onWindowResize() {
        var width = window.innerWidth;
        var height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
        composer.setSize(width, height);
    }

    function animate() {

        requestAnimationFrame(animate);

        composer.render();
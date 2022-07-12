import { VFC, useEffect } from 'react';
import * as BABYLON from 'babylonjs';
// import "babylonjs=loaders";
import c from './index.less';

console.log(BABYLON);

const Babylon: VFC = () => {
    useEffect(() => {
        // Get the canvas DOM element
        const canvas = document.getElementById('renderCanvas');
        // Load the 3D engine
        const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
        // CreateScene function that creates and return the scene
        const createScene = function () {
            // Create a basic BJS Scene object
            const scene = new BABYLON.Scene(engine);
            // Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}
            const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
            // Target the camera to scene origin
            camera.setTarget(BABYLON.Vector3.Zero());
            // Attach the camera to the canvas
            camera.attachControl(canvas, false);
            // Create a basic light, aiming 0, 1, 0 - meaning, to the sky
            const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
            // Create a built-in "sphere" shape using the SphereBuilder
            const sphere = BABYLON.MeshBuilder.CreateSphere(
                'sphere1',
                { segments: 16, diameter: 2, sideOrientation: BABYLON.Mesh.FRONTSIDE },
                scene
            );
            // Move the sphere upward 1/2 of its height
            sphere.position.y = 1;
            // Create a built-in "ground" shape;
            const ground = BABYLON.MeshBuilder.CreateGround(
                'ground1',
                { width: 6, height: 6, subdivisions: 2, updatable: false },
                scene
            );
            // Return the created scene
            return scene;
        };
        // call the createScene function
        const scene = createScene();
        // run the render loop
        engine.runRenderLoop(() => {
            scene.render();
        });
        // the canvas/window resize event handler
        window.addEventListener('resize', () => {
            engine.resize();
        });
    }, []);

    return (
        <div className={c.root}>
            <h1>Babylon跑起来了</h1>
            <canvas id="renderCanvas" style={{ width: '800px', height: '600px' }}></canvas>
        </div>
    );
};

export default Babylon;

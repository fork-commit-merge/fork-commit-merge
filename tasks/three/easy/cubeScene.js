// Three - Easy

// TODO: Implement a scene with a cube that rotates on the y-axis
// cubeScene.js

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Create a cube with a basic material
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// Position the cube and add it to the scene
cube.position.set(0, 0, -5);
scene.add(cube);

// Set up the camera position
camera.position.z = 5;

// Set up the renderer and add it to the document
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a simple animation loop
const animate = function () {
    requestAnimationFrame(animate);

    // Rotate the cube on the y-axis
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

// Handle window resize
window.addEventListener('resize', function () {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});

// Start the animation loop
animate();

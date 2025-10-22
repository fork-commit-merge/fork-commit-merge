// Three - Easy

// TODO: Implement a scene with a cube that rotates on the y-axis
import * as THREE from 'three';

// Create scene
const scene = new THREE.Scene();    
scene.background = new THREE.Color(0xeeeeee);

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01; // Rotate cube on y-axis
    renderer.render(scene, camera);
}

animate();
// Handle window resize










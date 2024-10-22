const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth/window.innerHeight,
    0.1,
    500
);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry(2, 2, 2);
var material = new THREE.MeshBasicMaterial({
    color: 0xfffff,
    wireframe: true,
});
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.04;
    cube.rotation.x += 0.07;
    renderer.render(scene, camera);
};

animate();

document.body.appendChild(renderer.domElement);
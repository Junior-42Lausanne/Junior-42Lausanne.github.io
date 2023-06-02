<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let el;
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
	const geometry = new THREE.BoxGeometry();
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	const cube = new THREE.Mesh(geometry, material);
	let renderer;
	scene.add(cube);
	camera.position.z = 5;

	const animate = () => {
		requestAnimationFrame(animate);
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		renderer.render(scene, camera);
	};

	const resize = () => {
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
	};

	const createScene = (el) => {
		renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
		resize();
		animate();
	};

	window.addEventListener('resize', resize);

	onMount(() => {
		createScene(el);
	});
</script>

<canvas
	bind:this={el}
	class="h-full w-full"
	style="position: absolute; top: 0; left: 0; z-index: -1;"
/>

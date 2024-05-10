import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useTheme } from "../../../context/ThemeContext";

export default function Scene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDarkmode } = useTheme();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const scene = new THREE.Scene();
    let geometry;

    // Adjust geometry based on window size
    if (innerWidth > 600) {
      geometry = new THREE.SphereGeometry(3, 46, 46);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      geometry = new THREE.SphereGeometry(2, 21, 21);
    }

    // Create material for the lit sphere
    const materialLit = new THREE.MeshPhysicalMaterial({
      roughness: 0.06,
      metalness: 0.8,
      transparent: true,
      transmission: 0.1,
      opacity: 0.2,
    });

    // Create and add the lit sphere to the scene
    const meshLit = new THREE.Mesh(geometry, materialLit);
    scene.add(meshLit);

    // Create material for shaded sphere
    const materialShadow = new THREE.MeshStandardMaterial({
      roughness: 0.8,
      metalness: 1,
      transparent: true,
      opacity: 0.5,
    });

    // Create and add the shaded sphere to the scene
    const meshLight = new THREE.Mesh(geometry, materialShadow);
    scene.add(meshLight);

    // Create a point light
    const smallLight = new THREE.PointLight(0xffffff, 1500, 100);
    smallLight.position.set(19, 8, 20);
    scene.add(smallLight);

    // Sizes to handle responsive behavior
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height);
    camera.position.z = 20;

    // Get the reference to the canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create a WebGL renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2);
    renderer.render(scene, camera);

    // Create and configure controls for camera movement
    const controls = new OrbitControls(camera, renderer.domElement);
    // Turn on damping for interaction on non-mobile devices
    controls.enableDamping = isMobile ? false : true;
    // Turn on controls depending on device type
    controls.enabled = isMobile ? false : true;
    controls.enableZoom = false;
    controls.enableRotate = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    // Number of circles and their positions
    const numCircles = 5;
    const circlePositions = [
      { x: -9, y: 0, z: 0 },
      { x: 5, y: -2, z: 2 },
      { x: -7, y: -4, z: -2 },
      { x: 3, y: 6, z: 0 },
      { x: 10, y: -1, z: -5 },
    ];

    // Create and place circles in the scene
    for (let i = 0; i < numCircles; i++) {
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshStandardMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      material.opacity = 0.7;
      material.roughness = 0.4;
      material.transparent = true;

      // Place circles based on predefined positions
      mesh.position.set(
        circlePositions[i].x,
        circlePositions[i].y,
        circlePositions[i].z
      );

      scene.add(mesh, meshLight, meshLight);
    }

    // Function to handle window size changes
    const handleResize = () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      setIsMobile(window.innerWidth <= 600);

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      renderer.setSize(sizes.width, sizes.height);
      camera.updateProjectionMatrix();
    };

    // Function for animation loop
    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
      controls.update();
    };

    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDarkmode, isMobile]);

  return <canvas ref={canvasRef} />;
}

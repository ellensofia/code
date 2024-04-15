import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useTheme } from "../../../context/ThemeContext";

export default function Scene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDarkmode } = useTheme();

  useEffect(() => {
    const scene = new THREE.Scene();
    const geometry = new THREE.SphereGeometry(3, 64, 64);

    const circles = [];
    const numCircles = 5;

    const materialLit = new THREE.MeshPhysicalMaterial({
      color: isDarkmode ? 0xffffff : "skyblue",
      roughness: 0.01,
      metalness: 0.9,
      transparent: true,
      opacity: 0.5,
    });

    const meshLit = new THREE.Mesh(geometry, materialLit);
    scene.add(meshLit);

    const materialShadow = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 2,
      metalness: 0.9,
      transparent: true,
      opacity: isDarkmode ? 0.2 : 0.8,
    });

    const meshLight = new THREE.Mesh(geometry, materialShadow);
    scene.add(meshLight);

    const light = new THREE.PointLight(0xffffff, 173, 100);
    scene.add(light);
    light.position.set(6, 4, 10);

    const sizes = {
      width: window.innerWidth,
      height: window.innerWidth,
    };

    const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height);
    camera.position.z = 20;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2);

    materialLit.roughness = 0;
    materialLit.transparent = true;
    materialLit.opacity = 0.2;
    materialLit.alphaMap;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enableRotate = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 3;

    renderer.render(scene, camera);

    for (let i = 0; i < numCircles; i++) {
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshStandardMaterial();
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = Math.random() * 20 - 10;
      mesh.position.y = Math.random() * 20 - 10;
      mesh.position.z = Math.random() * 20 - 10;

      scene.add(mesh);
      circles.push(mesh);
    }

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDarkmode]);

  return <canvas ref={canvasRef} className="webgl" />;
}

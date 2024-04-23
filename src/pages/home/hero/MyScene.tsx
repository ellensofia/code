import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useTheme } from "../../../context/ThemeContext";

export default function Scene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDarkmode } = useTheme();

  useEffect(() => {
    const scene = new THREE.Scene();
    let geometry;
    if (innerWidth > 600) {
      geometry = new THREE.SphereGeometry(3, 64, 64);
    } else {
      geometry = new THREE.SphereGeometry(1, 21, 21);
    }

    const materialLit = new THREE.MeshPhysicalMaterial({
      color: isDarkmode ? "white" : "skyblue",
      roughness: 0.01,
      metalness: 0.9,
      transparent: true,
      opacity: isDarkmode ? 0.5 : 1,
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

    const smallLight = new THREE.PointLight(0xffffff, 200, 100);
    smallLight.position.set(6, 10, 1);
    scene.add(smallLight);

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height);
    camera.position.z = 20;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2);
    renderer.render(scene, camera);

    materialLit.roughness = 0;
    materialLit.transparent = true;
    materialLit.opacity = 0.2;
    materialLit.alphaMap;
    materialLit.envMapIntensity = 1.2;
    materialLit.transmission = 1;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enableRotate = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    const numCircles = 5;

    for (let i = 0; i < numCircles; i++) {
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshPhysicalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      material.opacity = 0.6;
      material.roughness = 0.4;
      material.transparent = true;
      material.emissive = new THREE.Color(0x000000);

      mesh.position.x = Math.random() * 20 - 10;
      mesh.position.y = Math.random() * 20 - 10;
      mesh.position.z = Math.random() * 20 - 10;

      scene.add(mesh, meshLight, meshLight);
    }

    const handleResize = () => {
      // update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // update camera
      camera.aspect = sizes.width / sizes.height;
      renderer.setSize(sizes.width, sizes.height);
      camera.updateProjectionMatrix();
    };

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
  }, [isDarkmode]);

  return <canvas ref={canvasRef} className="webgl" />;
}

"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isPowered, setIsPowered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [glitchStage, setGlitchStage] = useState<0 | 1 | 2>(0);
  const [transformationSweep, setTransformationSweep] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // ── 1. Realistic Deep Space Starfield, Nebula, Spiral Galaxy & Shooting Stars ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const cx = width / 2;
    const cy = height / 2;

    // ── 1A. Rich Dense Realistic Starfield (600–800 Stars) ──
    interface Star {
      x: number;
      y: number;
      radius: number;
      baseAlpha: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      vx: number;
      vy: number;
      color: string;
      hasFlare: boolean;
      flareSize: number;
    }

    const stars: Star[] = [];
    const STAR_COUNT = Math.min(750, Math.floor((width * height) / 1600));
    const starColors = [
      "#ffffff",
      "#f8fafc",
      "#f1f5f9",
      "#e2e8f0",
      "#cbd5e1",
      "#dcfce7",
      "#bbf7d0",
      "#86efac",
    ];

    for (let i = 0; i < STAR_COUNT; i++) {
      const isHero = Math.random() < 0.04;
      const isMid = Math.random() < 0.25;

      let radius = 0.35 + Math.random() * 0.45;
      if (isMid) radius = 0.75 + Math.random() * 0.45;
      if (isHero) radius = 1.3 + Math.random() * 0.7;

      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        baseAlpha: isHero ? 0.95 : isMid ? 0.55 : 0.22 + Math.random() * 0.25,
        twinkleSpeed: 0.008 + Math.random() * 0.02,
        twinkleOffset: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * (isHero ? 0.12 : 0.04),
        vy: -0.02 - Math.random() * (isHero ? 0.14 : 0.05),
        color: isHero && Math.random() < 0.3 ? "#00D000" : starColors[Math.floor(Math.random() * starColors.length)],
        hasFlare: isHero && Math.random() < 0.6,
        flareSize: Math.random() * 8 + 6,
      });
    }

    // ── 1B. Distant Tilted Spiral Galaxy (Bottom-Right quadrant) ──
    const galaxyX = width * 0.82;
    const galaxyY = height * 0.76;
    const galaxyRadius = Math.min(width, height) * 0.22;

    interface GalaxyParticle {
      angle: number;
      dist: number;
      armOffset: number;
      radius: number;
      alpha: number;
      color: string;
      speed: number;
    }

    const galaxyStars: GalaxyParticle[] = [];
    const GALAXY_STAR_COUNT = 180;

    for (let i = 0; i < GALAXY_STAR_COUNT; i++) {
      const arm = (Math.random() < 0.5 ? 0 : Math.PI) + (Math.random() - 0.5) * 0.6;
      const d = Math.pow(Math.random(), 1.8) * galaxyRadius;
      galaxyStars.push({
        angle: arm + d * 0.04,
        dist: d,
        armOffset: arm,
        radius: 0.35 + Math.random() * 0.65,
        alpha: 0.2 + Math.random() * 0.55,
        color: Math.random() < 0.4 ? "#86efac" : "#ffffff",
        speed: 0.0004 + (1 / (d + 20)) * 0.02,
      });
    }

    // ── 1C. Occasional Shooting Stars / Meteors ──
    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      alpha: number;
      life: number;
      maxLife: number;
    }

    const shootingStars: ShootingStar[] = [];

    const spawnShootingStar = () => {
      if (shootingStars.length >= 4) return;
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.6),
        length: 40 + Math.random() * 65,
        speed: 7 + Math.random() * 6,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.35, // Diagonal ~45deg
        alpha: 0.85,
        life: 0,
        maxLife: 40 + Math.random() * 30,
      });
    };

    // Pre-populate 2 shooting stars
    spawnShootingStar();
    spawnShootingStar();

    // ── 1D. Concentric Green Energy Shockwaves ──
    interface Shockwave {
      radius: number;
      maxRadius: number;
      alpha: number;
      lineWidth: number;
      speed: number;
    }

    const shockwaves: Shockwave[] = [];

    const addShockwave = (speed: number = 7, maxRad: number = Math.max(width, height) * 0.6) => {
      shockwaves.push({
        radius: 20,
        maxRadius: maxRad,
        alpha: 0.85,
        lineWidth: 2,
        speed,
      });
    };

    let time = 0;

    const render = () => {
      time += 1;

      // Random shooting star trigger
      if (time % 85 === 0 && Math.random() < 0.6) {
        spawnShootingStar();
      }

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      // ── Layer 1: Realistic Green Emission Nebula Clouds ──
      // Left Nebula Wing
      const nebLeft = ctx.createRadialGradient(
        width * 0.18,
        height * 0.48,
        10,
        width * 0.18,
        height * 0.48,
        Math.min(width, height) * 0.45
      );
      nebLeft.addColorStop(0, "rgba(0, 220, 80, 0.08)");
      nebLeft.addColorStop(0.35, "rgba(0, 140, 50, 0.04)");
      nebLeft.addColorStop(0.7, "rgba(2, 60, 20, 0.015)");
      nebLeft.addColorStop(1, "transparent");
      ctx.fillStyle = nebLeft;
      ctx.beginPath();
      ctx.arc(width * 0.18, height * 0.48, Math.min(width, height) * 0.45, 0, Math.PI * 2);
      ctx.fill();

      // Center Core Nebula Glow
      const nebCenter = ctx.createRadialGradient(
        cx,
        cy,
        5,
        cx,
        cy,
        Math.min(width, height) * 0.38
      );
      nebCenter.addColorStop(0, "rgba(0, 230, 90, 0.10)");
      nebCenter.addColorStop(0.4, "rgba(0, 160, 60, 0.04)");
      nebCenter.addColorStop(0.8, "rgba(0, 40, 15, 0.01)");
      nebCenter.addColorStop(1, "transparent");
      ctx.fillStyle = nebCenter;
      ctx.beginPath();
      ctx.arc(cx, cy, Math.min(width, height) * 0.38, 0, Math.PI * 2);
      ctx.fill();

      // Right Nebula Cloud
      const nebRight = ctx.createRadialGradient(
        width * 0.84,
        height * 0.38,
        10,
        width * 0.84,
        height * 0.38,
        Math.min(width, height) * 0.4
      );
      nebRight.addColorStop(0, "rgba(0, 200, 70, 0.05)");
      nebRight.addColorStop(0.5, "rgba(0, 100, 35, 0.02)");
      nebRight.addColorStop(1, "transparent");
      ctx.fillStyle = nebRight;
      ctx.beginPath();
      ctx.arc(width * 0.84, height * 0.38, Math.min(width, height) * 0.4, 0, Math.PI * 2);
      ctx.fill();

      // ── Layer 2: Distant Spiral Galaxy in Bottom-Right ──
      ctx.save();
      ctx.translate(galaxyX, galaxyY);
      ctx.rotate(-0.55); // Tilted perspective
      ctx.scale(1, 0.45); // Elliptical 3D tilt

      // Galaxy Core Glow
      const galCore = ctx.createRadialGradient(0, 0, 0, 0, 0, galaxyRadius * 0.8);
      galCore.addColorStop(0, "rgba(200, 255, 220, 0.45)");
      galCore.addColorStop(0.2, "rgba(0, 220, 80, 0.2)");
      galCore.addColorStop(0.5, "rgba(0, 120, 40, 0.07)");
      galCore.addColorStop(1, "transparent");
      ctx.fillStyle = galCore;
      ctx.beginPath();
      ctx.arc(0, 0, galaxyRadius * 0.8, 0, Math.PI * 2);
      ctx.fill();

      // Galaxy Spiral Arm Stars
      galaxyStars.forEach((gs) => {
        gs.angle += gs.speed;
        const gx = Math.cos(gs.angle) * gs.dist;
        const gy = Math.sin(gs.angle) * gs.dist;

        ctx.fillStyle = gs.color;
        ctx.globalAlpha = gs.alpha;
        ctx.beginPath();
        ctx.arc(gx, gy, gs.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // ── Layer 3: Dense Realistic Stars ──
      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const currentAlpha = Math.max(0.06, Math.min(1, star.baseAlpha + twinkle * 0.28));

        ctx.save();
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = star.color;

        if (star.radius > 1.1) {
          ctx.shadowBlur = 5;
          ctx.shadowColor = star.color;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Cross diffraction spikes on prominent hero stars
        if (star.hasFlare && currentAlpha > 0.5) {
          ctx.strokeStyle = "rgba(255, 255, 255, 0.55)";
          ctx.lineWidth = 0.6;
          const fl = star.flareSize;
          ctx.beginPath();
          ctx.moveTo(star.x - fl, star.y);
          ctx.lineTo(star.x + fl, star.y);
          ctx.moveTo(star.x, star.y - fl);
          ctx.lineTo(star.x, star.y + fl);
          ctx.stroke();

          // Subtle horizontal flare sheen
          ctx.strokeStyle = "rgba(0, 255, 100, 0.25)";
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(star.x - fl * 2, star.y);
          ctx.lineTo(star.x + fl * 2, star.y);
          ctx.stroke();
        }

        ctx.restore();
      });

      // ── Layer 4: Shooting Stars / Meteors ──
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life += 1;
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;

        const fadeRatio = 1 - ss.life / ss.maxLife;

        if (fadeRatio > 0 && ss.x >= 0 && ss.x <= width && ss.y >= 0 && ss.y <= height) {
          const tailX = ss.x - Math.cos(ss.angle) * ss.length;
          const tailY = ss.y - Math.sin(ss.angle) * ss.length;

          const streakGrad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
          streakGrad.addColorStop(0, "transparent");
          streakGrad.addColorStop(0.7, "rgba(0, 220, 100, 0.4)");
          streakGrad.addColorStop(1, `rgba(255, 255, 255, ${fadeRatio * 0.9})`);

          ctx.save();
          ctx.strokeStyle = streakGrad;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(ss.x, ss.y);
          ctx.stroke();

          // Tiny head dot
          ctx.fillStyle = "#ffffff";
          ctx.shadowBlur = 6;
          ctx.shadowColor = "#00D000";
          ctx.beginPath();
          ctx.arc(ss.x, ss.y, 1.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else {
          shootingStars.splice(i, 1);
        }
      }

      // ── Layer 5: Concentric Energy Shockwave Waves ──
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const wave = shockwaves[i];
        wave.radius += wave.speed;
        wave.alpha *= 0.95;

        if (wave.alpha > 0.02 && wave.radius < wave.maxRadius) {
          ctx.save();
          ctx.globalAlpha = wave.alpha;
          ctx.strokeStyle = "rgba(0, 220, 80, 0.75)";
          ctx.lineWidth = wave.lineWidth;
          ctx.shadowBlur = 14;
          ctx.shadowColor = "#00D000";
          ctx.beginPath();
          ctx.arc(cx, cy, wave.radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        } else {
          shockwaves.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    const handleShockwave = (e: Event) => {
      const customEvent = e as CustomEvent<{ speed?: number }>;
      addShockwave(customEvent.detail?.speed || 9);
    };

    window.addEventListener("preloader-shockwave", handleShockwave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("preloader-shockwave", handleShockwave);
      cancelAnimationFrame(animId);
    };
  }, []);

  // ── 2. Cinematic Smooth Progression & 2-Time Realistic Glitch Orchestrator ──
  useEffect(() => {
    // Smooth entrance trigger on mount
    const entranceTimer = setTimeout(() => {
      setIsPowered(true);
    }, 60);

    const startTime = performance.now();
    const DURATION = 3000;
    let animFrame: number;
    let glitch1Fired = false;
    let glitch2Fired = false;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(1, elapsed / DURATION);

      // ── Realistic Glitch Burst #1: Early Calibration Sync (~30% progress, 850ms) ──
      if (elapsed >= 850 && !glitch1Fired) {
        glitch1Fired = true;
        setGlitchStage(1);
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("preloader-shockwave", { detail: { speed: 8 } })
          );
        }
        setTimeout(() => {
          setGlitchStage(0);
        }, 300);
      }

      // ── Realistic Glitch Burst #2: Phase-Lock Transformation (~78% progress, 2150ms) ──
      if (elapsed >= 2150 && !glitch2Fired) {
        glitch2Fired = true;
        setGlitchStage(2);
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("preloader-shockwave", { detail: { speed: 11 } })
          );
        }
        setTimeout(() => {
          setGlitchStage(0);
        }, 340);
      }

      // ── Ultra-Smooth Multi-Stage Easing Curve ──
      let progressRatio: number;
      if (t < 0.28) {
        progressRatio = (t / 0.28) * 0.30;
      } else if (t < 0.72) {
        const midT = (t - 0.28) / 0.44;
        progressRatio = 0.30 + midT * 0.46;
      } else if (t < 0.92) {
        const endT = (t - 0.72) / 0.20;
        progressRatio = 0.76 + endT * 0.18;
      } else {
        const finalT = (t - 0.92) / 0.08;
        progressRatio = 0.94 + Math.min(1, finalT) * 0.06;
      }

      const currentInt = Math.max(0, Math.min(100, Math.round(progressRatio * 100)));
      setProgress(currentInt);

      if (t < 1) {
        animFrame = requestAnimationFrame(updateCounter);
      } else {
        // ── 100% Completion: Transformation Event ──
        setProgress(100);
        setIsCompleted(true);
        setTransformationSweep(true);
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("preloader-shockwave", { detail: { speed: 16 } })
          );
        }

        const holdTimer = setTimeout(() => {
          setFadeOut(true);
        }, 450);

        const unmountTimer = setTimeout(() => {
          setLoading(false);
        }, 1350);

        return () => {
          clearTimeout(holdTimer);
          clearTimeout(unmountTimer);
        };
      }
    };

    animFrame = requestAnimationFrame(updateCounter);

    return () => {
      clearTimeout(entranceTimer);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  if (!loading) return null;

  // Dynamic status text tracking system transformation
  const statusText =
    progress === 100
      ? "SYSTEM READY // ACCESS GRANTED"
      : progress >= 78
      ? "CALIBRATING CORE ARCHITECTURE"
      : progress >= 30
      ? "SYNCHRONIZING NEURAL INTERFACE"
      : "INITIALIZING SYSTEM";

  // Format percentage with wide tracking digits like "0 4 3 %"
  const formattedPercent = String(progress).padStart(3, "0").split("").join(" ") + " %";

  return (
    <div
      className={`preloader-cosmic-wrapper ${fadeOut ? "fade-out" : ""}`}
      aria-hidden="true"
    >
      {/* 1. Photorealistic Deep Space Starfield & Galaxy Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* 2. Volumetric Soft Green Atmospheric Glow behind Logo */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] pointer-events-none z-[1] preloader-energy-field transform-gpu transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isPowered ? "opacity-100 translate-y-[-50%]" : "opacity-0 translate-y-[-42%]"
        } ${isCompleted ? "scale-110 brightness-125" : ""}`}
      />

      {/* 3. Dual Sci-Fi Orbital Scanning Rings */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[270px] md:h-[270px] pointer-events-none z-[2] preloader-orbital-ring-outer transform-gpu transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isPowered ? "opacity-100 translate-y-[-50%] scale-100" : "opacity-0 translate-y-[-44%] scale-90"
        } ${isCompleted ? "completed" : ""}`}
      >
        {/* Inner dashed counter-rotating ring */}
        <div className="absolute inset-3 sm:inset-4 preloader-orbital-ring-inner" />

        {/* Outer rotating photon beads */}
        <div className="absolute inset-0 preloader-orbit-spin">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#0acd00] shadow-[0_0_10px_#0acd00,0_0_18px_#0acd00]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#0acd00]" />
        </div>
      </div>

      {/* 4. Main Center Composition Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-xl w-full text-center select-none">
        
        {/* ── REAL AXTRAIT LOGO: Deep, Ultra-Smooth Liquid Cinematic Entrance ── */}
        <div
          className={`relative flex items-center justify-center transform-gpu will-change-transform transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isPowered
              ? "opacity-100 translate-y-0 scale-100 blur-0"
              : "opacity-0 translate-y-9 scale-[0.91] blur-[2px]"
          } ${
            isCompleted
              ? "scale-[1.03]"
              : ""
          }`}
        >
          {/* Subtle Horizontal Sci-Fi Lens Flare Line across Center */}
          <div className="preloader-horizontal-flare pointer-events-none" />

          {/* Logo Frame with 2-Stage Realistic Glitch & Specular Transformation Sweep */}
          <div
            className={`relative inline-flex items-center justify-center overflow-visible p-1.5 preloader-glitch-container ${
              glitchStage === 1
                ? "glitch-burst-1"
                : glitchStage === 2
                ? "glitch-burst-2"
                : ""
            }`}
          >
            {/* Main Base Logo (Razor Sharp, Pristine Glow) */}
            <img
              src="/AXTRAIT%20White%20LG.png"
              alt="AXTRAIT"
              width={200}
              height={44}
              style={{ width: "auto", height: "auto" }}
              className="w-[120px] sm:w-[150px] md:w-[175px] lg:w-[200px] max-w-[50vw] object-contain select-none pointer-events-none preloader-logo-main"
              loading="eager"
              decoding="async"
            />

            {/* Realistic RGB Split Channel 1 (Red / Magenta Channel) */}
            <img
              src="/AXTRAIT%20White%20LG.png"
              alt=""
              aria-hidden="true"
              width={200}
              height={44}
              style={{ width: "auto", height: "auto" }}
              className="preloader-glitch-layer-rgb-red select-none pointer-events-none"
            />

            {/* Realistic RGB Split Channel 2 (Neon Emerald / Cyan Channel) */}
            <img
              src="/AXTRAIT%20White%20LG.png"
              alt=""
              aria-hidden="true"
              width={200}
              height={44}
              style={{ width: "auto", height: "auto" }}
              className="preloader-glitch-layer-rgb-cyan select-none pointer-events-none"
            />

            {/* High-Tech Scanline HUD Glitch Noise Overlay */}
            <div className="preloader-scanline-overlay" />

            {/* Transformation Specular Light Sweep Beam (Fires at 100%) */}
            <div
              className={`preloader-transformation-sweep ${
                transformationSweep ? "active" : ""
              }`}
            />
          </div>
        </div>

        {/* ── LOADING UI SECTION (Below Logo) ── */}
        <div className="mt-6 sm:mt-7 flex flex-col items-center w-full">
          
          {/* Percentage Counter (0 0 0 % → 1 0 0 %) */}
          <div className="flex items-center justify-center mb-3">
            <span
              className={`font-['Montserrat'] text-xs sm:text-[13px] tracking-[0.32em] tabular-nums transition-colors duration-300 ${
                isCompleted
                  ? "text-[#0acd00] font-bold drop-shadow-[0_0_8px_rgba(10,205,0,0.8)]"
                  : "text-white/90 font-medium"
              }`}
            >
              {formattedPercent}
            </span>
          </div>

          {/* Minimalist Progress Track with Glowing Endpoint Bead */}
          <div className="w-56 sm:w-64 md:w-72 h-[3px] bg-white/[0.10] rounded-full relative overflow-visible backdrop-blur-xs">
            
            {/* Progress Fill Bar (Axtrait Green Gradient) */}
            <div
              className={`h-full rounded-full transition-[width] duration-75 ease-out relative ${
                isCompleted
                  ? "bg-[#0acd00] shadow-[0_0_18px_rgba(10,205,0,1)]"
                  : "bg-gradient-to-r from-[#005000] via-[#0acd00] to-[#4ade80] shadow-[0_0_12px_rgba(10,205,0,0.8)]"
              }`}
              style={{ width: `${progress}%` }}
            >
              {/* Glowing Green/White Endpoint Orb */}
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#0acd00,0_0_20px_#0acd00,0_0_4px_#ffffff]"
                style={{ opacity: progress > 0 ? 1 : 0 }}
              />
            </div>
          </div>

          {/* Subtitle with dynamic status evolution */}
          <div className="mt-3.5 flex items-center justify-center gap-2 text-[9.5px] sm:text-[10.5px] tracking-[0.38em] font-['Montserrat'] uppercase transition-colors duration-300 font-medium">
            <span
              className={`text-[11px] transition-colors duration-300 ${
                isCompleted ? "text-[#0acd00]" : "text-[#0acd00]"
              }`}
            >
              ✦
            </span>
            <span
              className={
                isCompleted
                  ? "text-[#0acd00] font-bold drop-shadow-[0_0_8px_rgba(10,205,0,0.8)]"
                  : "text-zinc-400 preloader-text-pulse"
              }
            >
              {statusText}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}





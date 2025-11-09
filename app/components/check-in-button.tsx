"use client";

import { useEffect, useState } from "react";

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  emoji?: string;
}

export function CheckInButton() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInCount, setCheckInCount] = useState(0);
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // 从 localStorage 读取签到数据
    const today = new Date().toDateString();
    const lastCheckIn = localStorage.getItem("lastCheckIn");
    const count = parseInt(localStorage.getItem("checkInCount") || "0");

    if (lastCheckIn === today) {
      setIsCheckedIn(true);
    }
    setCheckInCount(count);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setConfetti((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.speedX,
            y: p.y + p.speedY,
            rotation: p.rotation + p.rotationSpeed,
            speedY: p.speedY + 0.3, // 重力效果
          }))
          .filter((p) => p.y < 120) // 移除屏幕外的粒子
      );
    }, 30);

    return () => clearInterval(interval);
  }, [isAnimating]);

  function createConfetti() {
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#FFA07A",
      "#98D8C8",
      "#F7DC6F",
      "#BB8FCE",
      "#85C1E2",
      "#F8B500",
      "#FF1493",
    ];
    const emojis = ["🎉", "✨", "🎊", "⭐", "💫", "🌟", "🎈", "🎁", "🔥", "💝"];

    const newConfetti: ConfettiParticle[] = [];

    // 创建彩色纸屑
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: Date.now() + i,
        x: 50 + (Math.random() - 0.5) * 20,
        y: 10,
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 6,
        speedY: Math.random() * -8 - 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // 创建 emoji 粒子
    for (let i = 0; i < 20; i++) {
      newConfetti.push({
        id: Date.now() + 50 + i,
        x: 50 + (Math.random() - 0.5) * 25,
        y: 10,
        size: Math.random() * 15 + 20,
        speedX: (Math.random() - 0.5) * 5,
        speedY: Math.random() * -7 - 3,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 10,
        color: "",
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      });
    }

    return newConfetti;
  }

  function handleCheckIn() {
    if (isCheckedIn) return;

    const today = new Date().toDateString();
    const newCount = checkInCount + 1;

    // 保存到 localStorage
    localStorage.setItem("lastCheckIn", today);
    localStorage.setItem("checkInCount", newCount.toString());

    setIsCheckedIn(true);
    setCheckInCount(newCount);
    setIsAnimating(true);

    // 创建撒花效果
    const newConfetti = createConfetti();
    setConfetti(newConfetti);

    // 3秒后停止动画
    setTimeout(() => {
      setIsAnimating(false);
      setConfetti([]);
    }, 3000);
  }

  return (
    <>
      {/* 撒花动效 */}
      {isAnimating && (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
          {confetti.map((particle) => (
            <div
              key={particle.id}
              className="absolute"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                transform: `rotate(${particle.rotation}deg)`,
                transition: "all 0.03s linear",
              }}
            >
              {particle.emoji ? (
                <span style={{ fontSize: `${particle.size}px` }}>
                  {particle.emoji}
                </span>
              ) : (
                <div
                  style={{
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: particle.color,
                    borderRadius: Math.random() > 0.5 ? "50%" : "2px",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* 签到按钮 */}
      <button
        onClick={handleCheckIn}
        disabled={isCheckedIn}
        className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-all ${
          isCheckedIn
            ? "cursor-not-allowed bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-600"
            : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
        }`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {isCheckedIn ? (
            <>
              <span className="text-lg">✓</span>
              <span>已签到</span>
            </>
          ) : (
            <>
              <span className="text-lg">📝</span>
              <span>签到</span>
            </>
          )}
          {checkInCount > 0 && (
            <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-xs">
              {checkInCount}天
            </span>
          )}
        </span>
        {!isCheckedIn && (
          <div className="absolute inset-0 -z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100" />
        )}
      </button>
    </>
  );
}


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckInButton } from "./components/check-in-button";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  emoji: string;
}

export default function Home() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showContent, setShowContent] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    setShowContent(true);
    
    // 创建庆祝粒子
    const emojis = ["🎉", "✨", "🎊", "⚡", "🚀", "💫", "🌟"];
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 50,
      size: Math.random() * 20 + 15,
      speedX: (Math.random() - 0.5) * 2,
      speedY: Math.random() * 2 + 1,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setParticles(newParticles);

    // 动画循环
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: p.x + p.speedX,
          y: p.y + p.speedY,
        })).filter((p) => p.y < 110)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  function handleCelebrate() {
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 600);
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-950 dark:via-black dark:to-indigo-950">
      {/* 导航栏 */}
      <nav className="relative z-20 border-b border-zinc-200/50 bg-white/50 backdrop-blur-sm dark:border-zinc-800/50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={120}
                height={24}
                priority
              />
            </Link>
            <div className="flex items-center gap-6">
              <div className="flex gap-6">
                <Link
                  href="/"
                  className="text-sm font-medium text-indigo-600 dark:text-indigo-400"
                >
                  首页
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  关于
                </Link>
              </div>
              <CheckInButton />
            </div>
          </div>
        </div>
      </nav>

      {/* 背景动画粒子 */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="pointer-events-none absolute transition-all duration-100"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
          }}
        >
          {particle.emoji}
        </div>
      ))}

      {/* 背景装饰圆形 */}
      <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 blur-3xl dark:from-indigo-600/10 dark:to-purple-600/10" />
      <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl dark:from-purple-600/10 dark:to-pink-600/10" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <div
          className={`flex flex-col items-center gap-8 text-center transition-all duration-1000 ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Logo */}
          <div className="mb-4">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={36}
              priority
            />
          </div>

          {/* 搞笑庆祝图片 */}
          <div className="mb-6">
            <Image
              src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif"
              alt="庆祝动图"
              width={300}
              height={225}
              className="rounded-2xl shadow-2xl"
              unoptimized
            />
          </div>

          {/* 主标题 */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl md:text-7xl">
              🎉 恭喜你！
            </h1>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          </div>

          {/* 副标题 */}
          <p className="max-w-2xl text-2xl font-medium text-zinc-700 dark:text-zinc-300 sm:text-3xl">
            你已经成功完成了
            <span className="mx-2 inline-block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text font-bold text-transparent dark:from-indigo-400 dark:to-purple-400">
              Next.js
            </span>
            章节的学习
          </p>

          {/* 描述文字 */}
          <div className="max-w-xl space-y-3 text-lg text-zinc-600 dark:text-zinc-400">
            <p>
              你已经掌握了现代化 Web 开发的核心技能
            </p>
            <p className="text-base">
              从服务端渲染到客户端交互，从路由到数据获取
            </p>
          </div>

          {/* 成就徽章 */}
          <div
            className={`group mt-6 cursor-pointer transition-transform duration-300 ${
              celebrate ? "scale-110" : "scale-100"
            }`}
            onClick={handleCelebrate}
          >
            <div className="relative rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 p-1 shadow-2xl transition-all group-hover:scale-105 group-hover:shadow-yellow-500/50">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white dark:bg-zinc-900">
                <span className="text-6xl transition-transform group-hover:rotate-12">
                  🏆
                </span>
              </div>
            </div>
            <p className="mt-3 text-sm font-medium text-zinc-500 dark:text-zinc-500">
              点击庆祝
            </p>
          </div>

          {/* 数据统计 */}
          <div className="mt-8 grid grid-cols-3 gap-6 rounded-2xl border border-zinc-200 bg-white/50 p-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50 sm:gap-8 sm:p-8">
            <div className="space-y-1">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                100%
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
                完成度
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                ∞
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
                可能性
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                🚀
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
                下一步
              </div>
            </div>
          </div>

          {/* 行动按钮 */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={handleCelebrate}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10">继续学习之旅</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-zinc-300 bg-white px-8 py-4 font-semibold text-zinc-900 transition-all hover:border-zinc-400 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:border-zinc-600"
            >
              查看文档
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* 激励语 */}
          <p className="mt-12 max-w-md text-sm italic text-zinc-500 dark:text-zinc-500">
            "每一个伟大的开发者，都曾是一个初学者。继续前进，你的潜力无限！"
          </p>
        </div>
      </main>
    </div>
  );
}

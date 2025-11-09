import Link from "next/link";
import Image from "next/image";
import { CheckInButton } from "../components/check-in-button";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-950 dark:via-black dark:to-indigo-950">
      {/* 背景装饰圆形 */}
      <div className="absolute top-20 left-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-3xl dark:from-blue-600/10 dark:to-indigo-600/10" />
      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 blur-3xl dark:from-indigo-600/10 dark:to-purple-600/10" />

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
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  首页
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium text-indigo-600 dark:text-indigo-400"
                >
                  关于
                </Link>
              </div>
              <CheckInButton />
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="space-y-16">
          {/* 标题区域 */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
              关于本项目
            </h1>
            <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400">
              一个基于 Next.js 构建的现代化 Web 应用
            </p>
          </div>

          {/* 项目介绍卡片 */}
          <div className="grid gap-8 sm:grid-cols-2">
            {/* 技术栈 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white/50 p-8 backdrop-blur-sm transition-all hover:border-indigo-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-indigo-700">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                <span className="text-2xl">⚡</span>
              </div>
              <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">
                技术栈
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-500">▸</span>
                  <strong>Next.js 15</strong> - React 框架
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">▸</span>
                  <strong>TypeScript</strong> - 类型安全
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-500">▸</span>
                  <strong>Tailwind CSS</strong> - 样式框架
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">▸</span>
                  <strong>App Router</strong> - 现代路由
                </li>
              </ul>
            </div>

            {/* 核心功能 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white/50 p-8 backdrop-blur-sm transition-all hover:border-purple-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-purple-700">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <span className="text-2xl">✨</span>
              </div>
              <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">
                核心功能
              </h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-500">▸</span>
                  服务端渲染（SSR）
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">▸</span>
                  响应式设计
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-500">▸</span>
                  深色模式支持
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">▸</span>
                  性能优化
                </li>
              </ul>
            </div>
          </div>

          {/* 项目详情 */}
          <div className="rounded-2xl border border-zinc-200 bg-white/50 p-8 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-12">
            <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white">
              项目特点
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <div className="mb-3 text-4xl">🚀</div>
                <h3 className="mb-2 font-semibold text-zinc-900 dark:text-white">
                  极速性能
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  基于 Next.js 的优化引擎，提供闪电般的加载速度和流畅的用户体验
                </p>
              </div>
              <div>
                <div className="mb-3 text-4xl">🎨</div>
                <h3 className="mb-2 font-semibold text-zinc-900 dark:text-white">
                  现代设计
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  采用简洁大气的设计风格，支持深色模式，带来视觉享受
                </p>
              </div>
              <div>
                <div className="mb-3 text-4xl">📱</div>
                <h3 className="mb-2 font-semibold text-zinc-900 dark:text-white">
                  响应式
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  完美适配各种屏幕尺寸，从手机到桌面都能获得最佳体验
                </p>
              </div>
              <div>
                <div className="mb-3 text-4xl">🔒</div>
                <h3 className="mb-2 font-semibold text-zinc-900 dark:text-white">
                  类型安全
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  使用 TypeScript 构建，提供完整的类型检查和智能提示
                </p>
              </div>
              <div>
                <div className="mb-3 text-4xl">⚙️</div>
                <h3 className="mb-2 font-semibold text-zinc-900 dark:text-white">
                  易于维护
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  清晰的代码结构和组件化设计，便于团队协作和长期维护
                </p>
              </div>
              <div>
                <div className="mb-3 text-4xl">🌐</div>
                <h3 className="mb-2 font-semibold text-zinc-900 dark:text-white">
                  SEO 友好
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  服务端渲染确保搜索引擎能够完整抓取页面内容
                </p>
              </div>
            </div>
          </div>

          {/* 学习资源 */}
          <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 dark:border-zinc-800 dark:from-indigo-950/50 dark:to-purple-950/50 sm:p-12">
            <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white">
              继续学习
            </h2>
            <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
              想要深入了解 Next.js？这里有一些优质的学习资源：
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-700"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    官方文档
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    查看完整的 API 参考
                  </p>
                </div>
                <span className="text-zinc-400 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-purple-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-700"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/50">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    学习课程
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    通过实践掌握技能
                  </p>
                </div>
                <span className="text-zinc-400 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* 返回首页按钮 */}
          <div className="flex justify-center">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              返回首页
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}


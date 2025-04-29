'use client' // 新增客户端指令（App Router必需）

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  // 确保只在客户端执行（解决SSR hydration问题）
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleNavigation = () => {
    try {
      router.push('/demo')
      // 可选预加载（App Router特性）
      router.prefetch('/demo')
    } catch (error) {
      console.error('导航失败:', error)
    }
  }

  if (!isMounted) return null // 避免SSR阶段渲染

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button 
        type="button" 
        onClick={handleNavigation}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        去demo
      </button>
    </div>
  )
}

// src/types/global.d.ts
export {}; // 确保文件被识别为模块

declare global {
  interface Window {
    AudioWorkletGlobalScope: typeof globalThis; // 严格类型定义
  }
}
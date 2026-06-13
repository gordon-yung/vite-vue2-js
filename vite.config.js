import { defineConfig, loadEnv } from "vite";
import presetEnv from "postcss-preset-env";
import vue from "@vitejs/plugin-vue2";
import path from "path";

export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd()); //cwd表示当前工作目录，loadEnv会根据mode加载对应的环境变量文件（如 .env.development 或 .env.production）
  const isDropConsole = env.VITE_DROP_CONSOLE === "true";
  const open = env.VITE_OPEN === "true";
  return {
    server: {
      port: 3000,
      open: true,
    },
    plugins: [vue()],
    // 别名定义
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // 配置路径别名;将 @ 映射到 src 目录，方便在项目中使用 @ 来引用 src 目录下的文件。
      },
    },
    // 配置 CSS 选项
    css: {
      // 配置 CSS 预处理器选项;preprocessorOptions 选项允许你为不同的 CSS 预处理器（如 SCSS、Less、Stylus 等）配置特定的选项。在这里，我们为 SCSS 配置了 additionalData 选项，以便在每个 SCSS 文件中自动注入全局变量。
      preprocessorOptions: {
        less: {
          additionalData: `@import (reference) "@/styles/var.less";`,
        },
      },
      // 配置 CSS 模块选项;modules 选项用于配置 CSS 模块的行为。CSS 模块是一种 CSS 文件的模块化机制
      modules: {
        // 配置 CSS 模块选项;generateScopedName 选项用于配置生成的 CSS 模块类名的格式。
        generateScopedName: "[name]_[local]_[hash:base64:5]", // 生成的类名格式;[name]表示当前文件名，[local]表示当前类名，[hash:base64:5]表示一个基于内容的哈希值，长度为5个字符。这种格式可以帮助我们在开发过程中更容易地识别和调试 CSS 模块，同时也能确保生成的类名具有足够的唯一性，避免样式冲突。
      },
      // css 后处理器选项;postcss 选项允许你配置 PostCSS 插件，
      postcss: {
        plugins: [
          presetEnv({
            // 配置 presetEnv 插件;presetEnv 是一个 PostCSS 插件，它允许你使用未来的 CSS 特性，并根据目标浏览器自动添加必要的前缀和 polyfill。通过配置 presetEnv，你可以确保你的 CSS 代码在不同的浏览器中具有良好的兼容性。
            browsers: ["last 2 versions", "> 1%", "IE 11"], // 配置目标浏览器;last 2 versions 表示支持最新的两个版本的所有浏览器，> 1% 表示支持市场份额大于 1% 的浏览器，IE 11 表示明确支持 Internet Explorer 11。
            autoprefixer: { grid: true }, // 配置 autoprefixer 插件;autoprefixer 是一个 PostCSS 插件，它会根据目标浏览器自动添加 CSS 前缀，以确保你的 CSS 代码在不同的浏览器中具有良好的兼容性。通过配置 autoprefixer。
          }),
        ],
      },
    },
    // 配置 esbuild 选项;（预构建） esbuild 是 Vite 内部使用的 JavaScript/TypeScript 编译器，提供快速的构建和转换功能。通过配置 esbuild 选项，可以自定义编译行为，例如启用 JSX 支持、设置目标环境等。
    esbuild: {
      drop: isDropConsole ? ["console", "debugger"] : [], // 启用删除模式;删除模式会直接删除所有的 console 和 debugger 语句，进一步减小
    },
    build: {
      minify: true, // 是否进行代码压缩。默认值为 true，表示在生产环境中启用代码压缩以减小文件大小。boolean | 'terser' | 'esbuild'
      sourcemap: false, // 是否生成 source map 文件。默认值为 false，表示不生成 source map 文件。boolean | 'inline' | 'hidden'
      reportCompressedSize: false, // 是否在构建产物中报告压缩后的文件大小。默认值为 true，表示报告压缩后的文件大小。设置为 false 可以加快构建速度，尤其是在大型项目中。
      chunkSizeWarningLimit: 500, // chunk 大小警告限制;chunkSizeWarningLimit 选项用于设置 chunk 大小的警告限制。当构建产物中的某个 chunk 的大小超过这个限制时，Vite 会在构建日志中发出警告。

      // 自动注入一个 模块预加载 polyfill ；兼容旧浏览器的兼容性
      // modulePreload: {
      //   polyfill: false
      // },

      // rollupOptions 选项允许你直接配置 Rollup 的构建选项。Rollup 是 Vite 内部使用的打包工具，负责将你的代码和依赖打包成最终的生产版本。
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[name].[hash:6].js", // 配置输出的 chunk 文件名格式;
          entryFileNames: "assets/js/[name].js", // 配置输出的 entry 文件名格式;
          assetFileNames: "assets/[ext]/[name].[hash:6].[ext]", // 配置输出的 asset 文件名格式; [ext] 表示文件扩展名;
          // 函数式配置，但是简单配置分割可能会引起模块循环引用的问题； 可以使用上诉的插件解决chunkSplitPlugin；但不要一起使用
          manualChunks(id) {
            // 将vue和vue-router打包成一个单独的chunk，命名为vue-vender
            if (
              id.includes("node_modules/vue") ||
              id.includes("node_modules/@vue/*")
            ) {
              return "vue-vender";
            }
            // 将组件库单独打包
            if (id.includes("components")) {
              return "components-vender";
            }
            // 将全局样式单独打包
            if (id.includes("index.scss")) {
              return "var-vender";
            }
          },
        },
      },
    },
  };
});

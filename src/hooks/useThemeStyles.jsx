export default function useThemeStyles() {
    const isLightMode = JSON.parse(localStorage.getItem("pp-theme") || 'true');

    return {
        bgColor: isLightMode ? "from-gray-100 via-gray-100/50 to-white" : "from-black/96 via-black/94 to-black/90",
        footerBg: isLightMode ? "from-gray-200 via-gray-200/50 to-gray-200" : "from-black/96 via-black/94 to-black/90",
        navgradient: isLightMode ? "from-[#1a817cef] via-[#1a817cea] to-[#1a817ce3]" : "from-[#1a817c9a] via-[#1a817caf] to-[#1a817cbf]",
        grayBg: isLightMode ? "bg-gray-200" : "bg-gray-800/80",
        githubCardBg: isLightMode ? "bg-gray-200" : "bg-zinc-900",
        floatingCardBg: isLightMode ?
            "from-white via-gray-100/50 to-gray-100/60 border-zinc-500/20" :
            "bg-white/10 border-white/20",

        color: isLightMode ? "text-black" : "text-gray-100",
        cyanText: isLightMode ? "text-teal-700/90" : "text-teal-500",
        grayText: isLightMode ? "text-gray-800" : "text-gray-300/90",
        fillColor: isLightMode ? "#000000ce" : "#ffffffff",
        strokeColor: isLightMode ? "#0000009f" : "#ffffffd2",

        border: isLightMode ? "border-gray-200/60 hover:border-gray-300/60" : "border-zinc-800 hover:border-zinc-600/80",
        footerBorder: isLightMode ? "border-gray-400" : "border-zinc-600",
        githubCardBorder: isLightMode ?
            "border-gray-200/60 hover:border-gray-300/60 shadow-lg shadow-gray-300/30 hover:shadow-md hover:shadow-gray-300/60" :
            "border-zinc-700/60 hover:border-zinc-600/80 shadow-lg shadow-[#000000] hover:shadow-md",
        inputsBorderColor: isLightMode ? "border-zinc-600/20 hover:border-zinc-700/35" : "border-zinc-800 hover:border-zinc-600/80",

        navShadow: isLightMode ? "shadow-lg shadow-black/30" : "shadow-lg shadow-[#000000]",
        tagsStyle: isLightMode ?
            "text-cyan-400 bg-zinc-100 border border-cyan-200/80 hover:bg-white"
            : "text-cyan-400 bg-zinc-800 backdrop-blur-2 border border-slate-700 hover:bg-slate-800/70",
        skillTagStyle: isLightMode ? "bg-gray-400/10 text-zinc-700 border-zinc-700/20" : "bg-white/10 text-white border-white/20",
        particleCount: isLightMode ? 1200 : 500,
        particleColor: isLightMode ? "#006666" : "#b2d8d8",
        innerCardShadow: isLightMode ?
            "border-gray-200/60 hover:border-gray-300/60 shadow-md shadow-gray-300/30 hover:shadow-sm hover:shadow-gray-300/60" :
            "border-zinc-700/40 hover:border-zinc-600/60 shadow-md shadow-black/30 hover:shadow-sm",

        cardBg: isLightMode ?
            "from-white via-gray-200/50 to-gray-300/20" :
            "from-zinc-900/96 via-zinc-800/94 to-zinc-800/90",
        shadow: isLightMode ?
            "shadow-lg shadow-[#676e6221] hover:shadow-md hover:shadow-[#606e822e]" :
            "shadow-lg shadow-[#000000] hover:shadow-md hover:shadow-[#000000]",
        cardStyle: isLightMode ?
            "from-white via-gray-200/60 to-gray-200/60 border-gray-200/60 hover:border-gray-300/60 shadow-[#606e821e] hover:shadow-md hover:shadow-[#606e822e]" :
            "from-[#1f1f1f]/80 to-[#2d2d2d]/90 border-zinc-700/60 hover:border-zinc-600/80 shadow-[#000000] hover:shadow-md",

    }
}

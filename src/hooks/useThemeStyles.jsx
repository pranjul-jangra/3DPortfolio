export default function useThemeStyles() {
    const isLightMode = JSON.parse(localStorage.getItem("pp-theme") || 'true');

    return {
        bgColor: isLightMode ? "from-gray-100 via-gray-100/50 to-white" : "from-black/96 via-black/94 to-black/90",
        color: isLightMode ? "text-black" : "text-gray-100",
        cyanText: isLightMode ? "text-teal-700/90" : "text-teal-500",
        grayText: isLightMode ? "text-gray-800" : "text-gray-300/90",
        borderColor: isLightMode ? "border-gray-200/60 hover:border-gray-300/60" : "border-zinc-800 hover:border-zinc-600/80",
        inputsBorderColor: isLightMode ? "border-zinc-950/20 hover:border-zinc-950/35" : "border-zinc-800 hover:border-zinc-600/80",
        fillColor: isLightMode ? "#000000ce" : "#ffffffff",
        strokeColor: isLightMode ? "#0000009f" : "#ffffffd2",
        navShadow: isLightMode ? "shadow-lg shadow-black/30" : "shadow-lg shadow-[#000000]",
        navgradient: isLightMode ? "from-[#1a817cef] via-[#1a817cea] to-[#1a817ce3]" : "from-[#1a817c9a] via-[#1a817caf] to-[#1a817cbf]",
        tagsStyle: isLightMode ? "text-cyan-400 *:bg-cyan-900/70" : "text-cyan-400 *:bg-cyan-900/30",
        skillTagStyle: isLightMode ? "bg-gray-400/10 text-zinc-700 border-zinc-700/20" : "bg-white/10 text-white border-white/20",
        border: isLightMode ? "border-gray-200/60 hover:border-gray-300/60" : "border-zinc-800 hover:border-zinc-600/80",
        particleCount: isLightMode ? 1200 : 500,
        particleColor: isLightMode ? "#006666" : "#b2d8d8",

        cardBg: isLightMode ?
            "from-white via-gray-200/50 to-gray-300/20 shadow-black/5" :
            "from-zinc-900/96 via-zinc-800/94 to-zinc-800/90 shadow-gray-800/40",
        shadow: isLightMode ?
            "shadow-lg shadow-[#676e6221] hover:shadow-md hover:shadow-[#606e822e]" :
            "shadow-lg shadow-[#000000] hover:shadow-md hover:shadow-[#000000]",
        cardStyle: isLightMode ?
            "from-white via-gray-300/20 to-gray-300/30 border-gray-200/60 hover:border-gray-300/60 shadow-[#606e821e] hover:shadow-md hover:shadow-[#606e822e]" :
            "from-[#1f1f1f]/80 to-[#2d2d2d]/90 border-zinc-800 hover:border-zinc-600/80 shadow-[#000000] hover:shadow-md"
    }
}

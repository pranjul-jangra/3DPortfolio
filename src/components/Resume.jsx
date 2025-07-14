import { useState, useRef, useEffect } from 'react';
import { useInView } from 'motion/react';
import { motion } from 'motion/react';

export default function Resume({ isLightMode }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [renderResume, setRenderResume] = useState(false);     // animate childs & render iframe
  const [animateResume, setAnimateResume] = useState(false);   // animate resume container separtly from childs

  const iframeRef = useRef(null);
  const resuRef = useRef();
  const animateResRef = useRef();

  const isInView = useInView(resuRef, { margin: "-150px" });
  const isResumeInView = useInView(animateResRef, { margin: "-120px" });

  // Stopping iframe auto focus
  useEffect(() => {
    if (isInView && !renderResume) setRenderResume(true);
    if (isResumeInView && !animateResume) setAnimateResume(true);
  }, [isInView, isResumeInView]);

  // Check if PDF file exists
  useEffect(() => {
    const checkPdfExists = async () => {
      try {
        const response = await fetch("/Pranjul-Resume.pdf", { method: 'HEAD' });
        if (response.ok) {
          setLoading(false);
          setError(null);
        } else {
          setLoading(false);
          setError('PDF file not found');
        }
      } catch (err) {
        setLoading(false);
        setError('Error loading PDF file');
      }
    };

    checkPdfExists();
  }, []);

  // Print
  const printPdf = () => {
    if (iframeRef.current) iframeRef.current.contentWindow.print();
  };

  // Open in new window
  const openInNewTab = () => {
    window.open("/Pranjul-Resume.pdf", '_blank');
  };

  // Conditional styles
  const cyanText = isLightMode ? "text-teal-700/90" : "text-teal-500";
  const cardBg = isLightMode ? "from-gray-200/40 via-gray-200/50 to-gray-300/20" : "from-[#1f1f1f]/80 to-[#2d2d2d]/90";

  // Variants
  const parentVariant = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    },
  }

  const childVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } },
  }

  return (
    <motion.section ref={resuRef} variants={parentVariant} initial="initial" animate={renderResume && "animate"}>
      <motion.h1 variants={childVariants} className={`text-4xl font-bold ${cyanText} `}>Resume </motion.h1>

      <motion.p variants={childVariants} className={`my-10`}>
        A detail-oriented developer focused on delivering clean, maintainable code and scalable architecture. Committed to building solutions that balance technical efficiency with user experience. Emphasizes code quality, consistency, and thoughtful design across all stages of development.
      </motion.p>

      {/* Resume container */}
      <motion.div
        ref={animateResRef}
        initial={{ y: 50, opacity: 0 }}
        animate={animateResume && { y: 0, opacity: 1, transition: { duration: 1 } }}
        className={`relative p-4 bg-gradient-to-br ${cardBg} rounded-2xl text-white flex flex-col items-center justify-center max-w-6xl mx-auto`}
      >
        {/* Control Panel */}
        <div className="flex gap-4 mb-4 flex-wrap justify-center">
          <button onClick={printPdf} className="bg-purple-700 px-3 py-1 rounded hover:bg-purple-600 disabled:opacity-50 transition-colors" disabled={loading || error}>
            Print PDF
          </button>
          <button onClick={openInNewTab} className="bg-blue-700 px-3 py-1 rounded hover:bg-blue-600 disabled:opacity-50 transition-colors" disabled={loading || error}>
            Open in New Tab
          </button>
          <a href="/Pranjul-Resume.pdf" download="Pranjul-Resume.pdf" className="bg-green-700 px-3 py-1 rounded hover:bg-green-600 transition-colors">
            Download Resume
          </a>
        </div>

        {/* Loader */}
        {loading && (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
            <p className="ml-3">Loading PDF...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-red-400 text-center p-4 bg-red-900/20 w-full max-w-md rounded-lg shadow shadow-red-700/40">
            <p>Error: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-3 cursor-pointer text-white tracking-wide bg-red-700 px-3 py-1 rounded hover:bg-red-600 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* PDF Viewer */}
        {!loading && !error && (
          <div className="bg-white rounded-lg border border-gray-600 overflow-hidden w-full max-w-4xl">
            {renderResume && (
              <iframe ref={iframeRef} tabIndex="-1" autoFocus={false} src="/Pranjul-Resume.pdf" width="100%" height="600" title="Resume PDF" className="border-0" />
            )}
          </div>
        )}

        {/* Instructions */}
        {!loading && !error && (
          <p className="mt-4 text-sm text-gray-400 text-center max-w-2xl">
            Use the controls above to print, open in new tab, or download the PDF. You can also scroll within the PDF viewer and use browser print functionality.
          </p>
        )}
      </motion.div>
    </motion.section>
  );
}
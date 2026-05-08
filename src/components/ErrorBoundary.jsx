import { Component } from "react";

// ─── Fallback UI ──────────────────────────────────────────────────────────────
function ErrorFallback({ error, errorInfo, onReset }) {
    return (
        <div style={styles.overlay} className="z-50">
            <div style={styles.card}>
                {/* Animated glitch icon */}
                <div style={styles.iconWrap}>
                    <span style={styles.icon}>✦</span>
                </div>

                <p style={styles.code}>UNEXPECTED ERROR</p>
                <h1 style={styles.heading}>Something broke.</h1>
                <p style={styles.sub}>
                    An error crashed this part of the app. Try reloading or go back to safety.
                </p>

                {/* Error message pill */}
                {error?.message && (
                    <div style={styles.errorPill}>
                        <span style={styles.errorLabel}>Error</span>
                        <span style={styles.errorMsg}>{error.message}</span>
                    </div>
                )}

                {/* Actions */}
                <div style={styles.actions}>
                    <button className="cursor-pointer" style={styles.btnPrimary} onClick={onReset}>
                        Try again
                    </button>
                </div>
            </div>
        </div>
    );
}

// ─── Error Boundary ───────────────────────────────────────────────────────────
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
        this.handleReset = this.handleReset.bind(this);
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ errorInfo });

        // Log to console in development only:
        if (process.env.NODE_ENV === "development") {
            console.error("[ErrorBoundary caught]", error, errorInfo);
        }
    }

    handleReset() {
        this.setState({ hasError: false, error: null, errorInfo: null });
        // If a custom onReset prop was passed, call it too (e.g. to clear bad state)
        this.props.onReset?.();
    }

    render() {
        if (this.state.hasError) {
            // Allow a fully custom fallback via prop
            if (this.props.fallback) {
                return this.props.fallback({
                    error: this.state.error,
                    errorInfo: this.state.errorInfo,
                    onReset: this.handleReset,
                });
            }

            return (
                <ErrorFallback
                    error={this.state.error}
                    errorInfo={this.state.errorInfo}
                    onReset={this.handleReset}
                />
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = {
    overlay: {
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "'DM Mono', 'Fira Code', 'Courier New', monospace",
    },
    card: {
        maxWidth: 560,
        width: "100%",
        background: "#111",
        border: "1px solid #2a2a2a",
        borderRadius: 4,
        padding: "3rem 2.5rem",
        textAlign: "center",
    },
    iconWrap: {
        marginBottom: "1.5rem",
    },
    icon: {
        fontSize: 40,
        color: "#e24b4a",
        display: "inline-block",
        animation: "spin 8s linear infinite",
    },
    code: {
        fontFamily: "inherit",
        fontSize: 11,
        letterSpacing: "0.18em",
        color: "#e24b4a",
        marginBottom: "0.75rem",
        textTransform: "uppercase",
    },
    heading: {
        fontSize: 32,
        fontWeight: 400,
        color: "#f5f5f0",
        margin: "0 0 1rem",
        letterSpacing: "-0.02em",
        fontFamily: "'DM Serif Display', 'Georgia', serif",
    },
    sub: {
        fontSize: 15,
        lineHeight: 1.65,
        color: "#888",
        marginBottom: "1.75rem",
    },
    errorPill: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "#1a0e0e",
        border: "1px solid #3a1a1a",
        borderRadius: 3,
        padding: "6px 12px",
        marginBottom: "1.5rem",
        maxWidth: "100%",
        overflow: "hidden",
    },
    errorLabel: {
        fontSize: 10,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#e24b4a",
        flexShrink: 0,
    },
    errorMsg: {
        fontSize: 13,
        color: "#ccc",
        fontFamily: "inherit",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    details: {
        textAlign: "left",
        marginBottom: "1.75rem",
        border: "1px solid #222",
        borderRadius: 3,
        overflow: "hidden",
    },
    summary: {
        padding: "8px 12px",
        fontSize: 12,
        color: "#666",
        cursor: "pointer",
        letterSpacing: "0.05em",
        background: "#161616",
        userSelect: "none",
        listStyle: "none",
    },
    stack: {
        margin: 0,
        padding: "12px",
        fontSize: 11,
        lineHeight: 1.7,
        color: "#555",
        background: "#0e0e0e",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordBreak: "break-all",
    },
    actions: {
        display: "flex",
        gap: 12,
        justifyContent: "center",
        flexWrap: "wrap",
    },
    btnPrimary: {
        padding: "10px 28px",
        fontSize: 13,
        letterSpacing: "0.08em",
        background: "#f5f5f0",
        color: "#0a0a0a",
        border: "none",
        borderRadius: 3,
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "opacity 0.15s",
    },
    btnGhost: {
        padding: "10px 28px",
        fontSize: 13,
        letterSpacing: "0.08em",
        background: "transparent",
        color: "#888",
        border: "1px solid #2a2a2a",
        borderRadius: 3,
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "border-color 0.15s, color 0.15s",
    },
};
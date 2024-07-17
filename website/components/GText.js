export function GradientText({ content, className }) {
    return (
        <h1 className={`font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text ${className}`}>
          { content }
        </h1>
    )
}
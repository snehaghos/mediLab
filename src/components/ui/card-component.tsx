interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const baseStyles = 'p-8 bg-white border border-gray-200 rounded-lg'
  const hoverStyles = hover ? 'hover:shadow-lg hover:border-blue-300 transition' : ''
  return <div className={`${baseStyles} ${hoverStyles} ${className}`}>{children}</div>
}

export function FeatureCard({ children, className = '' }: CardProps) {
  const baseStyles = 'p-8 bg-blue-50 border border-blue-100 rounded-lg'
  const hoverStyles = 'hover:shadow-lg hover:border-blue-300 transition'
  return <div className={`${baseStyles} ${hoverStyles} ${className}`}>{children}</div>
}

export function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-lg border border-blue-100 text-blue-600">
      {children}
    </div>
  )
}

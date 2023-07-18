const Container = ({ htmlTag, children, className = "" }) => {
  const Tag = htmlTag ?? "section";
  
  return (
    <Tag className={`max-w-8xl px-5 py-4 mx-auto sm:px-16 ${className}`}>
      {children}
    </Tag>
  )
}

export default Container;
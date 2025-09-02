import { useEffect } from "react"

const DynamicFavicon = () => {
  useEffect(() => {
    // Atualiza o título da página
    document.title = "Swift Soft"
  }, [])

  return null
}

export default DynamicFavicon

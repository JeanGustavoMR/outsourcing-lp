import { useEffect } from "react"
import { useTheme } from "@/hooks/use-theme"

const DynamicFavicon = () => {
  const { shouldUseDarkLogo } = useTheme()

  useEffect(() => {
    // Atualiza o favicon
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement
    if (link) {
      // Usa os arquivos da raiz do projeto
      link.href = shouldUseDarkLogo ? "/favicon.png" : "/favicon-branco.png"
    }

    // Atualiza o título da página
    document.title = "Swift Soft"
  }, [shouldUseDarkLogo])

  return null
}

export default DynamicFavicon

# Swift Soft - Outsourcing Landing Page

Landing page profissional para serviços de outsourcing de desenvolvimento de software da Swift Soft.

## 🚀 Sobre o Projeto

Esta é uma landing page moderna e responsiva desenvolvida para apresentar os serviços de outsourcing de desenvolvimento da Swift Soft, destacando:

- **Squads de desenvolvimento** em até 3 semanas
- **Economia de até 40%** comparado a contratação in-house
- **Governança executiva** completa
- **Talentos validados** da LATAM

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **React Router** - Navegação

## 🎨 Funcionalidades

### Tema Dinâmico
- **Detecção automática** do tema do sistema (claro/escuro)
- **Logo dinâmica** que muda conforme o fundo
- **Favicon dinâmico** que se adapta ao tema
- **Navbar transparente** com efeito de vidro

### Design Responsivo
- **Mobile-first** design
- **Breakpoints otimizados** para todos os dispositivos
- **Animações suaves** e hover effects
- **Performance otimizada**

### Integração WhatsApp
- **Botão fixo** no canto inferior direito
- **Links diretos** em todos os CTAs
- **Mensagem personalizada** automática

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/JeanGustavoMR/outsourcing-lp.git

# 2. Entre no diretório
cd outsourcing-lp

# 3. Instale as dependências
npm install

# 4. Execute em modo desenvolvimento
npm run dev
```

O projeto estará disponível em: **http://localhost:8080**

## 🏗️ Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Linting do código
```

## 📁 Estrutura do Projeto

```
outsourcing-lp/
├── src/
│   ├── components/
│   │   ├── ui/           # Componentes shadcn/ui
│   │   ├── DynamicFavicon.tsx
│   │   └── WhatsAppButton.tsx
│   ├── hooks/
│   │   └── use-theme.ts  # Hook para tema dinâmico
│   ├── pages/
│   │   ├── Index.tsx     # Página principal
│   │   └── NotFound.tsx  # Página 404
│   ├── App.tsx
│   └── main.tsx
├── public/               # Assets estáticos
├── logo.png             # Logo padrão
├── logo-branco.png      # Logo para tema escuro
├── favicon.png          # Favicon padrão
├── favicon-branco.png   # Favicon para tema escuro
└── package.json
```

## 🎯 Seções da Landing Page

1. **Hero Section** - Apresentação principal com CTAs
2. **Problemas que Resolvemos** - Pain points do cliente
3. **Value Proposition** - Proposta de valor
4. **Modelos de Engajamento** - Tipos de contratação
5. **O que está Incluído** - Entregáveis detalhados
6. **Como Funciona** - Processo em 3 etapas
7. **Resultados** - Métricas e KPIs
8. **CTA Final** - Conversão

## 🔧 Configuração

### Variáveis de Ambiente
O projeto não requer variáveis de ambiente para funcionamento local.

### Personalização
- **Cores**: Edite `src/index.css` para customizar o design system
- **Conteúdo**: Modifique `src/pages/Index.tsx` para alterar textos
- **Imagens**: Substitua os arquivos na raiz do projeto

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Faça upload da pasta dist/ para Vercel
```

### Netlify
```bash
npm run build
# Faça upload da pasta dist/ para Netlify
```

### GitHub Pages
```bash
npm run build
# Configure GitHub Actions para deploy automático
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autores

- **Jean Gustavo** - CEO & Founder
- **Soares** - CTO & Co-Founder

## 📞 Contato

- **WhatsApp**: [Clique aqui](https://wa.me/5541998243692?text=Vim%20através%20do%20Site%20e%20quero%20minha%20consultoria%20Gratuita)
- **Email**: [Entre em contato via WhatsApp]

---

Desenvolvido com ❤️ pela **Swift Soft**

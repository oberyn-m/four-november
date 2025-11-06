# 🚀 Como Usar o Projeto

## Status: ✅ IMPLEMENTADO!

Todas as funcionalidades foram implementadas com sucesso! O projeto está pronto para uso.

---

## 📦 Instalação e Execução

### 1. Instalar Dependências
```bash
npm install
```

### 2. Adicionar Suas Fotos
- Coloque suas fotos na pasta `public/img/`
- Nomeie as fotos como: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`, etc.

### 3. Rodar o Projeto em Desenvolvimento
```bash
npm run dev
```
O projeto estará disponível em: **http://localhost:5173/**

### 4. Build para Produção
```bash
npm run build
```
Os arquivos de produção estarão na pasta `dist/`

---

## 🎨 Personalização

### 📸 Alterar as Fotos
Edite o arquivo `src/components/PhotoGallery.tsx` e ajuste o array `photos` com os nomes das suas imagens:

```typescript
const photos = [
  '/img/foto1.jpg',
  '/img/foto2.jpg',
  '/img/foto3.jpg',
  // Adicione mais fotos aqui...
]
```

### 💬 Alterar a Mensagem
Edite o arquivo `src/components/GalleryPage.tsx` para personalizar a mensagem de amor na seção do card branco.

### 🎵 Alterar a Música
Edite o arquivo `src/components/MusicPlayer.tsx` e altere a URL do YouTube:

```typescript
<ReactPlayer
  url="https://www.youtube.com/watch?v=NOVA_URL_AQUI"
  // ...
/>
```

### 🎨 Alterar Cores e Gradientes
Edite os componentes e altere as classes do Tailwind:
- **LandingPage**: `bg-gradient-to-br from-pink-300 via-purple-300 to-rose-400`
- **GalleryPage**: `bg-gradient-to-br from-rose-400 via-pink-400 to-purple-500`

---

## 🎁 Funcionalidades Implementadas

✅ **Tela 1 - Landing Page**
   - Background com gradient romântico
   - Botão "Feliz 4 de Novembro" centralizado
   - Animações suaves e elegantes
   - Corações decorativos animados

✅ **Tela 2 - Galeria de Memórias**
   - Player de música do YouTube integrado
   - Controles de Play/Pause
   - Galeria de fotos dinâmica
   - Transição automática a cada 5 segundos
   - Navegação manual (setas e indicadores)
   - Contador de fotos
   - Mensagem personalizada de amor
   - Assinatura "Isaac Matos"

✅ **Design e UX**
   - 100% responsivo (mobile, tablet, desktop)
   - Fontes elegantes (Playfair Display + Poppins)
   - Animações cinematográficas
   - Transições suaves entre telas
   - Efeitos de hover interativos

---

## 📁 Estrutura do Projeto

```
four-november/
├── public/
│   ├── img/                    # Adicione suas fotos aqui!
│   │   └── INSTRUCOES.txt
│   └── heart.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── LandingPage.tsx     # Tela 1
│   │   ├── GalleryPage.tsx     # Tela 2
│   │   ├── MusicPlayer.tsx     # Player do YouTube
│   │   └── PhotoGallery.tsx    # Galeria de fotos
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx                 # Controla navegação
│   ├── index.css               # Estilos globais
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

- ⚡ **Vite** - Build tool ultra-rápido
- ⚛️ **React 18** - Framework UI
- 🎨 **Tailwind CSS** - Estilização moderna
- 🎭 **Shadcn/ui** - Componentes elegantes
- 🎵 **React Player** - Player de YouTube
- 🎯 **TypeScript** - Tipagem estática
- 💅 **Google Fonts** - Playfair Display & Poppins

---

## 💡 Dicas

1. **Qualidade das Fotos**: Use fotos com boa resolução (recomendado: 1920x1080 ou similar)
2. **Quantidade de Fotos**: Você pode adicionar quantas fotos quiser! Basta ajustar o array no `PhotoGallery.tsx`
3. **Formatos Suportados**: .jpg, .jpeg, .png, .webp
4. **Velocidade da Galeria**: Para mudar o tempo de transição automática, edite o `interval` no `PhotoGallery.tsx` (padrão: 5000ms)

---

## 🎉 Pronto para Usar!

Agora é só:
1. Adicionar suas fotos na pasta `public/img/`
2. Rodar `npm run dev`
3. Abrir no navegador
4. Compartilhar com seu conjogue!

---

Criado com muito amor por **Isaac Matos**
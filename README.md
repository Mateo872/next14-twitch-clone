# Clon de Twitch con stack completo: Next.js 14, Transmisión en vivo, React, Prisma, Stripe, Tailwind, MySQL

![Miniatura del clon de Twitch (3)](https://github.com/AntonioErdeljac/next14-twitch-clone/assets/23248726/6e0153f1-ab30-4924-9f06-13d2f46ff3b5)

Este es un repositorio para el Clon Completo de Trello: Next.js 14, Transmisión en vivo, React, Prisma, Stripe, Tailwind, MySQL.

[TUTORIAL EN VIDEO](https://www.youtube.com/watch?v=a02JAryRPVU)

Funciones clave:

- 📡 Transmisión utilizando los protocolos RTMP / WHIP
- 🌐 Generación de ingreso
- 🔗 Conexión de la aplicación Next.js a OBS / Tu software de transmisión favorito
- 🔐 Autenticación
- 📸 Carga de miniaturas
- 👀 Contador de espectadores en vivo
- 🚦 Estados en vivo
- 💬 Chat en tiempo real utilizando sockets
- 🎨 Color único para cada espectador en el chat
- 👥 Sistema de seguidores
- 🚫 Sistema de bloqueo
- 👢 Expulsar participantes de una transmisión en tiempo real
- 🎛️ Panel de control del transmisor / creador
- 🐢 Modo de chat lento
- 🔒 Modo de chat solo para seguidores
- 📴 Habilitar / Deshabilitar chat
- 🔽 Diseño plegable (ocultar barras laterales, chat, modo teatro, etc.)
- 📚 Pestaña de seguimiento y recomendaciones en la barra lateral
- 🏠 Página de inicio recomendando transmisiones, ordenadas por las en vivo primero
- 🔍 Página de resultados de búsqueda con un diseño diferente
- 🔄 Sincronización de la información del usuario en nuestra base de datos mediante Webhooks
- 📡 Sincronización de información de estado en vivo en nuestra base de datos mediante Webhooks
- 🤝 Pestaña de comunidad
- 🎨 Diseño hermoso
- ⚡ Aplicación ultrarrápida
- 📄 Renderización del lado del servidor (SSR)
- 🗺️ Rutas y diseños agrupados
- 🗃️ MySQL
- 🚀 Implementación

### Requisitos previos

**Versión de Node 18.17 o posterior**

### Clonar el repositorio

```shell
git clone https://github.com/AntonioErdeljac/next14-twitch-clone.git
```

### Instalar paquetes

```shell
npm i
```

### Configurar el archivo .env

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
CLERK_WEBHOOK_SECRET=

DATABASE_URL=

LIVEKIT_API_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_WS_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

### Configurar Prisma

Agregar base de datos MySQL (utilicé PlanetScale)

```shell
npx prisma generate
npx prisma db push

```

### Iniciar la aplicación

```shell
npm run dev
```

## Comandos disponibles

Ejecutar comandos con npm `npm run [comando]`

| comando | descripción                                         |
| :------ | :-------------------------------------------------- |
| `dev`   | Inicia una instancia de desarrollo de la aplicación |

FROM node:20-alpine AS builder

# Configurar el directorio de trabajo
WORKDIR /app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar todas las dependencias
RUN npm ci

# Copiar el resto del código fuente
COPY . .

# Compilar la aplicación para producción (Client + Server SSR)
RUN npm run build

# --- Etapa de Producción ---
FROM node:20-alpine

WORKDIR /app

# Copiar todo desde la etapa de construcción 
# (Para TanStack Start + Vite preview, es más seguro mantener la estructura)
COPY --from=builder /app ./

# Exponer el puerto por defecto de Vite Preview
EXPOSE 4173

# Definir variables de entorno
ENV NODE_ENV=production

# Ejecutar el servidor exponiéndolo a todas las interfaces (0.0.0.0)
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]

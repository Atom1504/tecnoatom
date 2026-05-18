# Guía de Despliegue en VPS (Docker + Caddy + SSL Automático)

Esta guía detalla el proceso paso a paso para subir esta aplicación a un Servidor Virtual Privado (VPS), conectarla a un dominio personalizado y asegurar la conexión con HTTPS de forma automática.

## 📋 1. Requisitos Previos

Antes de comenzar, asegúrate de tener lo siguiente:
- Un servidor VPS (DigitalOcean, Linode, AWS, Hetzner, etc.) preferiblemente con **Ubuntu 20.04/22.04 o Debian**.
- Un **dominio propio** (ej. `midominio.com`).
- **Docker** y **Docker Compose** instalados en tu VPS.

## 🌐 2. Configuración del Dominio (DNS)

El proxy inverso (Caddy) necesita que tu dominio apunte al servidor antes de poder generar el certificado SSL (HTTPS).

1. Ingresa al panel de control de donde compraste tu dominio (GoDaddy, Namecheap, Cloudflare, etc.).
2. Ve a la gestión de zonas DNS.
3. Crea un **Registro tipo A**:
   - **Nombre/Host:** `@` (o déjalo en blanco según el proveedor).
   - **Valor/Apunta a:** La IP pública de tu VPS (ej. `198.51.100.23`).
4. (Opcional) Crea otro **Registro tipo A** o **CNAME** para el subdominio `www`:
   - **Nombre/Host:** `www`
   - **Valor/Apunta a:** La IP de tu VPS o tu dominio base `@`.

> **Nota:** La propagación del DNS puede tardar desde unos minutos hasta un par de horas.

## ⚙️ 3. Preparación del Proyecto en el VPS

Ingresa a tu servidor por SSH y transfiere los archivos del proyecto (puedes usar Git, SCP, o FileZilla). Una vez que tengas los archivos en el servidor, sigue estos pasos:

### 3.1. Ajustar el archivo `Caddyfile`
Abre el archivo `Caddyfile` que se encuentra en la raíz del proyecto y reemplaza `tecnoatom.com` por tu dominio real.

```caddyfile
# Reemplaza con tu dominio
tu-dominio-real.com {
    reverse_proxy tecnoatom-web:4173
}

www.tu-dominio-real.com {
    redir https://tu-dominio-real.com{uri}
}
```

### 3.2. Configuración del Firewall (Opcional pero recomendado)
Si tu VPS utiliza `ufw` (Ubuntu Firewall), asegúrate de tener abiertos los puertos esenciales para la web y para no perder tu conexión SSH:

```bash
sudo ufw allow 22/tcp   # SSH
sudo ufw allow 80/tcp   # HTTP (Necesario para el desafío de Let's Encrypt)
sudo ufw allow 443/tcp  # HTTPS
sudo ufw allow 443/udp  # HTTP/3
sudo ufw enable
```

## 🚀 4. Despliegue

Sitúate en la carpeta donde tienes los archivos (`Dockerfile`, `docker-compose.yml`, `Caddyfile`, etc.) y ejecuta el siguiente comando:

```bash
docker-compose up -d --build
```

### ¿Qué sucederá en este momento?
1. Docker descargará Node.js y construirá tu aplicación web (`npm run build`).
2. Se iniciará tu aplicación de forma interna y protegida (solo visible para Docker).
3. Se iniciará Caddy, detectará tu dominio en el archivo de configuración y contactará a *Let's Encrypt*.
4. **Caddy generará el certificado SSL automáticamente** y comenzará a servir tu página de forma segura (HTTPS).

## 🛠️ 5. Comandos Útiles de Mantenimiento

Aquí tienes algunos comandos que te servirán para administrar tu servidor:

**Ver si los contenedores están corriendo:**
```bash
docker-compose ps
```

**Ver los registros (logs) de la web para detectar errores:**
```bash
docker-compose logs -f tecnoatom-web
```

**Ver los registros de Caddy (útil si hay problemas con el certificado SSL):**
```bash
docker-compose logs -f caddy
```

**Para detener el sitio temporalmente:**
```bash
docker-compose down
```

**Para aplicar cambios después de actualizar el código o el Caddyfile:**
```bash
docker-compose up -d --build
```

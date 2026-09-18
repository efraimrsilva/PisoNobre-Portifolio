/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permite que a prévia local acessada pelo IP da rede receba hot reload.
  allowedDevOrigins: ['192.168.1.16'],
  // Evita que o Next gere arquivos de instrução no projeto ao iniciar o servidor.
  agentRules: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

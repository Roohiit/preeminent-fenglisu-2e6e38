import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

function permanentImagePlugin(): Plugin {
  return {
    name: 'permanent-image-saver',
    configureServer(server) {
      server.middlewares.use('/api/save-permanent-image', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const { imageBase64 } = data;
              if (imageBase64) {
                const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');
                const buffer = Buffer.from(base64Data, 'base64');
                const targetPublic = path.resolve(__dirname, 'public/images/services/real_female_scalp_detox.jpg');
                const targetDist = path.resolve(__dirname, 'dist/images/services/real_female_scalp_detox.jpg');
                fs.writeFileSync(targetPublic, buffer);
                if (fs.existsSync(path.dirname(targetDist))) {
                  fs.writeFileSync(targetDist, buffer);
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, message: 'Permanently saved to codebase!' }));
                return;
              }
            } catch (err) {
              console.error('Failed to save image:', err);
            }
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: 'Invalid payload' }));
          });
        } else {
          res.writeHead(405);
          res.end();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), permanentImagePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

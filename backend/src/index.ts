import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import routes
import contactRoutes from './routes/contact';
import projectRoutes from './routes/projects';
import testimonialRoutes from './routes/testimonials';

const app = express();
const PORT = process.env.PORT || 3001;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

// ─── Middleware ──────────────────────────────────────────────
app.use(cors({
  origin: [FRONTEND_URL, 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json({ limit: '1mb' }));

// Request logger
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

// ─── Routes ─────────────────────────────────────────────────
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/testimonials', testimonialRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'JAWAB.IN Backend',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.path} not found`,
  });
});

// ─── Start Server ───────────────────────────────────────────
app.listen(PORT, () => {
  console.log('');
  console.log('╔══════════════════════════════════════════════╗');
  console.log('║         JAWAB.IN Backend API Server          ║');
  console.log('╠══════════════════════════════════════════════╣');
  console.log(`║  🚀 Server     : http://localhost:${PORT}        ║`);
  console.log(`║  🌐 Frontend   : ${FRONTEND_URL}   ║`);
  console.log(`║  📊 Health     : http://localhost:${PORT}/api/health ║`);
  console.log('╚══════════════════════════════════════════════╝');
  console.log('');
  console.log('Available endpoints:');
  console.log('  POST /api/contact        — Submit contact form');
  console.log('  GET  /api/projects       — Get portfolio projects');
  console.log('  GET  /api/testimonials   — Get testimonials');
  console.log('  GET  /api/health         — Health check');
  console.log('');
});

export default app;

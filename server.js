const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Log request
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);

    // Parse URL to prevent directory traversal and query param issues
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let safePath = path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, '');
    
    // Default to index.html
    if (safePath === '/' || safePath === '\\') {
        safePath = '/index.html';
    }

    const filePath = path.join(__dirname, safePath);

    // Verify file is within directory to prevent directory traversal attack
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Access Denied');
        return;
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1>404 ไม่พบหน้านี้ (Not Found)</h1><p>โปรดตรวจสอบ URL อีกครั้ง</p>', 'utf-8');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end(`เกิดข้อผิดพลาดในการโหลดไฟล์: ${error.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log('\x1b[36m%s\x1b[0m', `==================================================`);
    console.log('\x1b[32m%s\x1b[0m', `  ระบบเปิดทำงานสำเร็จแล้ว! (Server running successfully)`);
    console.log('\x1b[35m%s\x1b[0m', `  ลิงก์เข้าใช้งาน: http://localhost:${PORT}/`);
    console.log('\x1b[36m%s\x1b[0m', `==================================================`);
    console.log('  กด Ctrl+C เพื่อหยุดการทำงานของเซิร์ฟเวอร์');
});

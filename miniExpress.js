const http = require('http');
const fs = require('node:fs/promises');

class MiniExpress {
    constructor() {
        this.server = http.createServer();
        this.router = {};
        this.server.on('request', (req, res) => {
            res.sendFile = async (path, mime) => {
                const fileHandle = await fs.open(path, 'r');
                const fileStream = fileHandle.createReadStream();
                res.setHeader('Content-Type', mime);
                fileStream.pipe(res);
           
            }

            res.status = (code) => {
                res.statusCode = code;
                return res;
            }
    
            res.json = (data) => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
            }
    
            if(!this.router[req.method.toLowerCase()+req.url]) {
                return res.status(200).json({error: `Cannot ${req.method} at ${req.url}`});
            }
    
            this.router[req.method.toLowerCase()+req.url](req, res);
        });


    }

    route (method, path, cb) {
        this.router[method+path] = cb;
    }
    listen(port, cb) {
        this.server.listen(port, () => {
           cb();
        });
    }

}

module.exports = MiniExpress; 
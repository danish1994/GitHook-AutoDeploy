const express = require('express')
const app = express()
const execFile = require('child_process').execFile;
const port = Number(process.argv[2])
const filePath = process.argv[3]

app.use('*', (req, res) => {
    const child = execFile('bash', [filePath], (error, stdout, stderr) => {
        if (error) {
            console.error('stderr', stderr);
        }
        console.log('stdout', stdout);
    })
    res.send({
        ok: true
    })
})

app.listen(port, () => console.log('Server running on: ' + port))
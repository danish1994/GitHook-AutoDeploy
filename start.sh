npm i

ps aux | grep "node index.js $1" | awk '{print $2}' | sudo xargs kill

nohup node index.js $1 $2 >> ~/log.txt 2>&1 &
<h1>three-js-1</h1>

<p>Первые попытки понять, как работает react + three.js</p>

<h2>Если хотите запустить проект локально: </h2>

<ul>
<li>Создаете файл vite.config.local.ts</li>
<li>Содержание этого файла: 

<div>import { defineConfig } from "vite";</div>

<div>export default defineConfig({
server: {
host: желаемый хост,
port: желаемый порт,
open: true, // опционально
},
}); </div>
</li>
<li>Запуск: npm start</li>
</ul>

import { Router } from './router.js'
import './events.js'

const router = new Router();
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

// faz o historico funcionar a partir das setinhas da pagina
window.onpopstate = () => router.handle();

// chama a função route() no onclick da pag index.html
 window.route = () => router.route();
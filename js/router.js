export class Router {
    /* um objeto vazio */ 
    routes = {}

    /* mapeamento das rotas */
    add(routeName, page) {
        this.routes[routeName] = page;
    }

    route(event) {
        event = event || window.event;
        event.preventDefault(); 
        window.history.pushState({}, "", event.target.href); 
        this.handle();
    }

    handle() {
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404];
        const html = fetch(route)
        .then(data => data.text())
        .then(html => {
            document.getElementById("app").innerHTML = html;
        });
        
    }
}
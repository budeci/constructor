import Constructor from './modules/constructor';

class HomeView {
    constructor() {
        this.init();
    }
    init() {
        new Constructor();
    }
}
new HomeView();
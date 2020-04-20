import { AppComponent } from "./app.component";
import { Routes, RouterModule} from '@angular/router'
import { PandemicMapComponent } from './pandemic-map/pandemic-map.component'

const appRoutes: Routes = [
    {path: "map", component: PandemicMapComponent}
]

export const routing = RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload'})
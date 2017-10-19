import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReportGeneratorComponent } from './report-generator/report-generator.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'reportgenerator',
        component: ReportGeneratorComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }

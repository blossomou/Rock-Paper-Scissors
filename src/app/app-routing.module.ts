import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { WelcomeComponent } from "~/app/welcome/welcome.component";
import { InputScreenComponent } from "~/app/input-screen/input-screen.component";
import { ResultScreenComponent } from "~/app/result-screen/result-screen.component";

const routes: Routes = [
    { path: "", redirectTo: "/welcome", pathMatch: "full" },
    { path: "welcome", component: WelcomeComponent },
    { path: "input-screen", component: InputScreenComponent},
    { path: "result-screen", component: ResultScreenComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

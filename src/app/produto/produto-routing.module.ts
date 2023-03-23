import { Routes } from "@angular/router";
import { ListarComponent } from "./listar/listar.component";
import { AuthGuard } from "../auth/auth.guard";
import { InserirEditProdComponent } from "./inserir-edit-prod/inserir-edit-prod.component";

export const ProdutoRoutes: Routes = [
        {
        path: 'produtos',
        redirectTo: 'produtos/listar',
        },
        {
        path: 'produtos/listar',
        component: ListarComponent
        },
        {
        path: 'produtos/novo',
        component: InserirEditProdComponent,
        canActivate: [AuthGuard],
        data:{
                role: 'ADMIN'
        }
        }
]
        

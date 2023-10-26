import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './product/product.component';
import { MarketComponent } from './market/market.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "market",
    component: MarketComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "users/create",
    component: CreateComponent
  },
  {
    path: "users/view/:id",
    component: ViewComponent
  },
  // {
  //   path: "user/edit",
  //   component: EditComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

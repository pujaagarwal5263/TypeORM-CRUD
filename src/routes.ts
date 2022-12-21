import { ProdController } from "./controller/ProdController"
import { RelController } from "./controller/RelController"
import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
},
// ------ ONE ----- TO ----- ONE -------
{
    method: "post",
    route: "/users/addwithprod",
    controller: UserController,
    action: "oneToOne"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
//product routes
{
    method: "get",
    route: "/products",
    controller: ProdController,
    action: "getProducts"
},
{
  method:"get",
  route: "/products/:id",
  controller: ProdController,
  action: "getById"
},
{
    method: "post",
    route: "/products",
    controller: ProdController,
    action: "saveProd"
},
{
    method:"delete",
    route:"/products/:id",
    controller:ProdController,
    action: "deleteProd"
},
//employee routes
{
    method: "get",
    route: "/employee",
    controller: RelController,
    action: "getEmployee"
},
// ------ ONE ------ TO ------- MANY
// ------ MANY ------ TO ------ ONE
{
    method: "post",
    route: "/employee",
    controller: RelController,
    action: "oneToMany"
},
// ----- many ---- to --- many
{
    method: "post",
    route: "/question",
    controller: RelController,
    action: "manyToMany"
},
]
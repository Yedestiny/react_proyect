import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos";


export default function Page() {
  return (
    <section><br/><br/>
      <Switch>
				<Route path="/" exact component={Inicio} />
				<Route path="/productos" exact component={ProductosList} />
			</Switch>
    </section>
  );
}

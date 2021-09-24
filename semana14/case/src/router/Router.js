import { Switch, Route, BrowserRouter } from "react-router-dom"
import Home from "../page/Home/Home"

import React from "react"


const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />                    
                </Route>
            </Switch>       
        </BrowserRouter>
    )

}

export default Router
import React from "react";
import { Route, Switch } from "react-router-dom";
import Curriculums from "./Curriculums/Curriculums";
import Curriculum from "./Curriculum/Curriculum";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Curriculums} />
      <Route exact path="/curriculums/:slug" component={Curriculum} />
    </Switch>
  );
};

export default App;

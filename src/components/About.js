import React from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize";

function Abouts() {
  return (
    <Collapsible accordion>
      <CollapsibleItem
        expanded={false}
        header="The film"
        icon={<Icon></Icon>}
        node="div"
      >
        Updating
      </CollapsibleItem>
      <CollapsibleItem
        expanded={false}
        header="Nations"
        icon={<Icon></Icon>}
        node="div"
      >
        Updating
      </CollapsibleItem>
      <CollapsibleItem
        expanded={false}
        header="Daily news"
        icon={<Icon></Icon>}
        node="div"
      >
        Updating
      </CollapsibleItem>
    </Collapsible>
  );
}
export default Abouts;

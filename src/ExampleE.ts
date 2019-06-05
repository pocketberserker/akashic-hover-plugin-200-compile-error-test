import {HoverableE} from "@akashic-extension/akashic-hover-plugin";

export class ExampleE extends g.E implements HoverableE {
  hoverable: boolean = true;
  touchable: boolean = true;
  hovered: g.Trigger<void> = new g.Trigger<void>();
  unhovered: g.Trigger<void> = new g.Trigger<void>();

  constructor(param: g.EParameterObject) {
    super(param);
  }
}

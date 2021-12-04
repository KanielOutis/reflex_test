import ApplicationController from "./application_controller";
import Sortable from "sortablejs";

export default class extends ApplicationController {
  connect() {
    super.connect();
    this.sortable = Sortable.create(this.element, {
      animation: 150,
      onEnd: this.end,
    });
  }

  end = (e) => {
    this.stimulate("Position#insert_at", e.item.dataset.sgid, e.newIndex + 2);
  };
}

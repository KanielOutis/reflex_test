import { Controller } from "stimulus";
import StimulusReflex from "stimulus_reflex";
import debounced from "debounced";
import Rails from "@rails/ujs";

/* This is your ApplicationController.
 * All StimulusReflex controllers should inherit from this class.
 *
 * Example:
 *
 *   import ApplicationController from './application_controller'
 *
 *   export default class extends ApplicationController { ... }
 *
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends Controller {
  static targets = ["input"];
  connect() {
    StimulusReflex.register(this);
    debounced.initialize();
  }

  addTodo(event) {
    Rails.stopEverything(event);
    this.stimulate("TodoReflex#add_todo", this.inputTarget.value);
  }

  changeText(event) {
    clearTimeout(this.filterTimeout);
    this.filterTimeout = setTimeout(() => {
      this.filter(this.inputTarget.value);
    }, 800);
  }

  beforeReflex(element, reflex, noop, reflexId) {
    // document.body.classList.add('wait')
  }

  reflexSuccess(element, reflex, noop, reflexId) {
    // show success message
  }

  reflexError(element, reflex, error, reflexId) {
    // show error message
  }

  reflexHalted(element, reflex, error, reflexId) {
    // handle aborted Reflex action
  }

  afterReflex(element, reflex, noop, reflexId) {
    // document.body.classList.remove('wait')
    if (reflex == "TodoReflex#add_todo") {
      this.inputTarget.value = "";
    }
  }

  finalizeReflex(element, reflex, noop, reflexId) {
    // all operations have completed, animation etc is now safe
  }

  filter(value) {
    this.stimulate("TodoReflex#filter", value);
  }
}

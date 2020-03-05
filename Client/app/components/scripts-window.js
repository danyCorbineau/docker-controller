import Component from '@glimmer/component';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';

export default class ScriptsWindowComponent extends Component {
  @tracked isCreate = false;
  @tracked isList = false;
  @action toCreateScript() {
    debugger;
    this.isList = false;
    this.isCreate = true;
  }
  @action toListScript() {
    this.isList = true;
    this.isCreate = false;
  }
}

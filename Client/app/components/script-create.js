import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import {action} from '@ember/object';
import { inject as service } from '@ember/service';

export default class ScriptCreateComponent extends Component {
  @tracked scriptExt = "";
  @tracked scriptName = "";
  @tracked scriptContent = "";

  @service script;

  @action submitCreate() {
    let newScript = {content: this.scriptContent, extension: this.scriptExt, name: this.scriptName};
    this.script.create(newScript);
  }
}

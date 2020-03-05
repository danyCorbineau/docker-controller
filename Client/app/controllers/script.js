import Controller from '@ember/controller';

export default class ScriptController extends Controller {
  createScript(script) {
    let newScript = this.store.createRecord('script', script)
    newScript.save();
  }
}

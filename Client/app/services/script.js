import Service, {inject as service} from '@ember/service';

export default class ScriptService extends Service {
  @service store;
  create(script) {
    this.store.createRecord('script',  script).save();
    console.log(script)
  }
}

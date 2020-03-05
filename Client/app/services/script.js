import Service, {inject as service} from '@ember/service';

export default class ScriptService extends Service {
  @service store;
  create(script) {
    let newScript = this.store.createRecord('script',  script);
    newScript.save();
    console.log('Save script : '+script )
  }
}

import Service, {inject as service } from '@ember/service';

export default class ContainerService extends Service {
    @service store;
    findAll(containers){
        
    }
}

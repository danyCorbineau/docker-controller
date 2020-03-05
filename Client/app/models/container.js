import Model, { attr } from '@ember-data/model';

export default class ContainerModel extends Model {
@attr('string') id;
@attr('string') name;
@attr('string') namePicture;
@attr('string') etat;
@attr('string') port;
@attr('string') createDate;
@attr('string') status;
}

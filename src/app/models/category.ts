import { ICategory } from '../interfaces/icategory';
import * as _ from 'lodash';

export class Category implements ICategory {

    constructor(data) {
        _.set(this, 'data', data)
    }

    get id() {
        return _.get(this, 'data.id')
    }

    set id(value: string) {
        _.set(this, 'data.id', value);
    }

    get name() {
        return _.get(this, 'data.name')
    }

    set name(value: string) {
        _.set(this, 'data.name', value);
    }

    get description() {
        return _.get(this, 'data.description')
    }

    set description(value: string) {
        _.set(this, 'data.description', value);
    }

    getData(){
        return _.get(this, 'data')
    }

}

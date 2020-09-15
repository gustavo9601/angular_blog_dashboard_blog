import { IPost } from './../interfaces/ipost';
import * as _ from 'lodash';

export class Post implements IPost {

    constructor(data) {
        _.set(this, 'data', data);
    }

    get id() {
        return _.get(this, 'data.id');
    }

    set id(value: string) {
        _.set(this, 'data.id', value);
    }

    get title() {
        return _.get(this, 'data.title');
    }

    set title(value: string) {
        _.set(this, 'data.title', value);
    }

    get content() {
        return _.get(this, 'data.content');
    }

    set content(value: string) {
        _.set(this, 'data.content', value);
    }

    get categories() {
        return _.get(this, 'data.categories');
    }

    set categories(value: string[]) {
        _.set(this, 'data.categories', value);
    }

    get date() {
        return _.get(this, 'data.date');
    }

    set date(value: string) {
        _.set(this, 'data.date', value);
    }

    get img() {
        return _.get(this, 'data.img');
    }

    set img(value: string) {
        _.set(this, 'data.img', value);
    }

    getData(){
        return _.get(this, 'data');
    }


}

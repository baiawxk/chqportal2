import db from '@/libs/db'
import uuid from 'uuid/v1'
import _ from 'lodash'

import util from "@/libs/pluginUtils";


let database = db.get('database');
let hasUrlDB = database.has('url').value();
if (!hasUrlDB) {
    database.set('url', []).write();
}
let urlDB = database.get('url');

export default {
    namespaced: true,
    getters: {
        list(state, getters) {
            return urlDB.value();
        },
        find(state, getters) {
            return function (condition) {
                return urlDB.find(condition).value();
            }
        },
        has(state, getters) {
            return function (condition) {
                return urlDB.has(condition).value();
            }
        }
    },
    modules: {

    },
    actions: {
        async add({
            commit,
            dispatch
        }, urlobj) {
            let meta = await util.getUrlMeta(urlobj['url']);
            console.log(meta);
            commit('add', {
                id: uuid(),
                ts: +new Date(),
                ...urlobj,
                ...meta
            });
            dispatch('store')
        },
        del({
            commit,
            dispatch
        }, condition) {
            commit('del', condition);
            dispatch('store')
        },
        upd({
            commit,
            dispatch
        }, condition, value) {
            commit('upd', condition, value)
            dispatch('store')
        },
        store({
            dispatch
        }) {
            dispatch('d2admin/db/set', {
                path: 'chqurl.data',
                data: urlDB.value(),
                user: true
            }, {
                root: true
            })
        }
    },
    mutations: {
        add(state, urlobj) {
            state.data.push(urlobj)
        },
        del(state, condition) {
            _.remove(state.data, condition)
            state.data.sort();
        },
        upd(state, condition, value) {
            _.assign(state.data, condition, value)
        }
    },
    state: {
        data: urlDB.value()
    }
}
import db from '@/libs/db'
import uuid from 'uuid/v1'



let database = db.get('database');
let hasUrlDB = database.has('url').value();
if (!hasUrlDB) {
    database.set('url', []).write();
}
let urlDB = database.get('url');

export default {
    namespaced: true,
    getters: {
        list() {
            return urlDB.value();
        },
        find(state) {
            return function (condition) {
                return urlDB.find(condition).value();
            }
        },
        has(state) {
            return function (condition) {
                return urlDB.has(condition).value();
            }
        }
    },
    modules: {

    },
    actions: {
        add({
            commit
        }, urlobj) {
            commit('add', {
                id: uuid(),
                ...urlobj
            });

        },
        del({
            commit
        }, condition) {
            commit('del', condition);
        },
        upd({
            commit
        }, condition, value) {
            commit('upd', condition, value)
        }
    },
    mutations: {
        add(state, urlobj) {
            urlDB.push(urlobj).write();
        },
        del(state, condition) {
            urlDB.find(condition).remove(condition).write();
        },
        upd(state, condition, value) {
            urlDB.find(condition).assign(value).write();
        }
    },
    state: {

    }
}
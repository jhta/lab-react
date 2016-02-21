import Dispatcher from '../dispatcher';
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

const CHANGE_EVENT = 'change';

//data del store
const _clients = [
  {
    id: 1,
    name: "jeison",
    nick: "jsn",
  },
    {
    id: 2,
    name: "andres",
    nick: "and",
  },
    {
    id: 3,
    name: "carlos",
    nick: "car",
  },

];


//cliente a mostrar

let _clientToShow = 1; 


const ClientStore = assign( EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    debugger
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  addClient(client) {
    _clients.push(client);
  },

  getClients() {
    return _clients;
  },

  changeClientDetail(id) {
    _clientToShow = id;
  },

  getDetailId() {
    debugger
    return _clientToShow;
  }
});


Dispatcher.register(function(action) {
  switch (action.actionType) {
    case 'ADD_CLIENT':
      ClientStore.addClient(action.data)
      ClientStore.emitChange();
      break;

    case 'CHANGE_DETAIL':
    debugger
      ClientStore.changeClientDetail(action.data.id);
      console.log("ID");
      ClientStore.emitChange()
      break;
    default:
      console.log("no se encuentra accion");
  }

})

module.exports = ClientStore;
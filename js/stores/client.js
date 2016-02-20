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

const _clientToShow = 1; 


const ClientStore = assign( EventEmitter.prototype, {
  emitChange: function() {
    debugger
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
    debugger
    _clients.push(client);
  },

  getClients() {
    debugger
    return _clients;
  }
});


Dispatcher.register(function(action) {
  debugger
  switch (action.actionType) {
    case 'ADD_CLIENT':
      debugger
      ClientStore.addClient(action.data)
      ClientStore.emitChange();
      break;

    case 'CHANGE_CLIENT':
      console.log("change client");
      break;
  }

})

module.exports = ClientStore;
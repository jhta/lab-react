import Dispatcher from '../dispatcher';

const ClientActions = {
  addClient(client) {
    Dispatcher.dispatch({
      actionType: 'ADD_CLIENT',
      data: client,
    })
    console.log("agregando cliente", client);
  },
  changeDetail(id) {
    debugger
    Dispatcher.dispatch({
      actionType: 'CHANGE_DETAIL',
      data: {id: id},
    }); 
  }
};

module.exports = ClientActions;
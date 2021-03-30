const storage = {
    fetch() {
    const arr = []; 
    if(localStorage.length > 0)  {
        for(let i = 0; i < localStorage.length; i++) {
            if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){ 
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
    }
    return arr; 
  }
};

const state =  { 
    todoItems : storage.fetch()
};
const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
};

const mutations = {
    addOneItem(state,todoItem) {
        const obj = {completed : false , item : todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
        console.log("addOneItem)");
      },
    removeOneItem(state,todoItem,index){
        localStorage.removeItem(todoItem.item);
        state.todoItems.splice(index,1);
      },
     toggleComplete (state,payload){ 
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));
      },
     removeAllTodo(state){
        console.log("removeAllTodo")
        state.todoItems = [];
        localStorage.clear();
      }
};

export default {
    state,
    getters,
    mutations
}
<template>
  <div id="app">
    <todo-header/>
    <todo-input v-on:addTodoItem="addOneItem"/>
    <todo-list 
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleComplete="toggleComplete"/>
    <todo-footer v-on:clearAllTodo="removeAllTodo"/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
      data : function() {
        return {
            todoItems : []
        }
    },
    methods : {
      addOneItem : function(todoItem) {
        var obj = {completed : false , item : todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
        console.log("addOneItem)");
      },
      removeOneItem : function(todoItem,index) {
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(index,1);
      },
      toggleComplete : function(todoItem,index) { 
        this.todoItems[index].completed = !this.todoItems[index].completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
      },
      removeAllTodo : function() {
        console.log("removeAllTodo")
        this.todoItems = [];
        localStorage.clear();
      }
    },
      created : function()  {
        if(localStorage.length > 0)  {
            for(var i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){ 
                    var item = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    console.log(item);
                    this.todoItems.push(item);
                }
            }
        }
    },
  components : {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width : 200px;
}

button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.0.3);
}

</style>

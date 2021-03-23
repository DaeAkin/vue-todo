<template>
  <div>
      <transition-group name="slide-fade" tag="ul">
          <li v-for="(todoItem,index) in propsdata" v-bind:key="todoItem.item">
              <i class="checkBtn fas fa-check" 
              v-bind:class="{checkBtnCompleted : todoItem.completed}" 
              v-on:click="toggleComplete(todoItem,index)"/>
              <span v-bind:class="{textCompleted : todoItem.completed}">{{todoItem.item}} </span>
              <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
                  <i class="fas fa-trash"></i>
              </span>
          </li>
      
      </transition-group>
  </div>
</template>

<script>
export default {
    props : ['propsdata'],
    methods : {
        removeTodo (todoItem,index) {
            this.$emit('removeItem', todoItem ,index); 
        },
        toggleComplete(todoItem,index) {
            this.$emit('toggleComplete',todoItem,index);
        }
    },

}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}

li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding : 0 0.9rem;
    background: white;
    border-radius: 5px;
}

.checkBtn {
    line-height: 45px;
    color : #62acde;
    margin-right: 5px;
}

.checkBtnCompleted {
    color : #b3adad;
}

.textCompleted {
    text-decoration: line-through;
    color : #b3adad;
}

.removeBtn { 
    margin-left: auto;
    color : #de4343;
}

/* 애니메이션 진입 및 진출은 다른 지속 시간 및  */
/* 타이밍 기능을 사용할 수 있습니다. */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
<template>
  <v-list>
    <v-list-item-group>
      <h3 class="ml-4">ToDo</h3>
      <draggable v-model="todos" ghost-class="ghost">
        <transition-group type="transition" name="flip-list">
          <v-list-item :ripple="false" inactive flat v-for="todo in status_todo" :key="todo.text">
            <v-list-item-content>
              <v-list-item-title>{{ todo.text }}</v-list-item-title>
              <v-list-item-subtitle>{{ todo.date }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon color="green" @click="check_done(todo)">
                <v-icon>check_circle</v-icon>
              </v-btn>
            </v-list-item-action>
            <v-list-item-action>
              <v-btn icon color="grey" @click="test">
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </transition-group>
      </draggable>
    </v-list-item-group>

    <v-list-item-group>
      <h3 class="ml-4">Done</h3>
      <draggable v-model="todos" ghost-class="ghost">
        <transition-group type="transition" name="flip-list">
          <v-list-item :ripple="false" inactive flat v-for="todo in status_done" :key="todo.text">
            <v-list-item-content>
              <v-list-item-title>{{ todo.text }}</v-list-item-title>
              <v-list-item-subtitle>{{ todo.date }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon color="red" @click="check_todo(todo)">
                <v-icon>remove_circle</v-icon>
              </v-btn>
            </v-list-item-action>
            <v-list-item-action>
              <v-btn icon color="grey" @click="test">
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </transition-group>
      </draggable>
    </v-list-item-group>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";

export default {
  data() {
    return {
      todos: [
        { id: 1, text: "Remkabel tomos", date: "18-06-20", status: "todo" },
        { id: 2, text: "Life is strange 2", date: "18-06-20", status: "todo" },
        { id: 3, text: "Handvaten tomos", date: "18-06-20", status: "todo" },
        { id: 4, text: "Olie tomos", date: "18-06-20", status: "done" },
        { id: 5, text: "Jerry can vullen", date: "18-06-20", status: "done" },
        { id: 6, text: "Auto wassen", date: "18-06-20", status: "done" }
      ]
    };
  },
  computed: {
    status_todo() {
      return this.todos.filter(function(todo) {
        return todo.status === "todo";
      });
    },
    status_done() {
      return this.todos.filter(function(todo) {
        return todo.status === "done";
      });
    }
  },
  components: {
    draggable
  },
  methods: {
    check_done(todo) {
      todo.status = "done";
    },
    check_todo(todo) {
      todo.status = "todo";
    },
    test() {
      alert();
    }
  }
};
</script>

<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}
/* .v-list-item {
  border-bottom: 0.5px solid grey;
  border-top: 0.25px solid grey;
} */
</style>
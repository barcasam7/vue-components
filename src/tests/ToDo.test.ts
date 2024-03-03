import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import ToDo from "../components/todo/Todo.vue";

describe("To Do Component", () => {
   test("with no tasks", () => {
      const wrapper = mount(ToDo);
      expect(wrapper.text()).toContain("You don't have any tasks");
   });

   test("only showing all tasks", async () => {
      const wrapper = mount(ToDo);
      wrapper.get('input[type="text"]').setValue("Some new task");
      await wrapper.get('input[type="text"]').trigger("keyup.enter");

      await wrapper.find("#all").trigger("click");
      expect(wrapper.html()).toContain("Some new task");
   });

   test("only showing pending tasks", async () => {
      const wrapper = mount(ToDo);
      wrapper.get('input[type="text"]').setValue("Some new task");
      await wrapper.get('input[type="text"]').trigger("keyup.enter");

      await wrapper.find("#pending").trigger("click");
      expect(wrapper.html()).toContain("Some new task");
   });

   test("only showing completed tasks", async () => {
      const wrapper = mount(ToDo);
      wrapper.get('input[type="text"]').setValue("Some new task");
      await wrapper.get('input[type="text"]').trigger("keyup.enter");
      await wrapper.get('input[type="checkbox"]').setValue(true);
      await wrapper.find("#completed").trigger("click");
      expect(wrapper.html()).toContain("Some new task");
   });

   test("can clear all tasks", async () => {
      const wrapper = mount(ToDo);
      wrapper.get('input[type="text"]').setValue("Some new task");
      await wrapper.get('input[type="text"]').trigger("keyup.enter");
      await wrapper.find(".clear-btn").trigger("click");
      expect(wrapper.html()).toContain("You don't have any tasks");
   });
});

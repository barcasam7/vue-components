import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import ToDo from "./Todo.vue";

function factory() {
   return mount(ToDo, {
      global: {
         stubs: {
            "v-icon": true,
         },
      },
   });
}

describe("To Do Component", () => {
   test("with no tasks", () => {
      const wrapper = factory();
      expect(wrapper.text()).toContain("You don't have any tasks");
   });

   test("only showing all tasks", async () => {
      const wrapper = factory();
      wrapper.get('input[type="text"]').setValue("Some new task");
      await wrapper.get('input[type="text"]').trigger("keyup.enter");

      await wrapper.find("#all").trigger("click");
      expect(wrapper.html()).toContain("Some new task");
   });

   test("only showing pending tasks", async () => {
      const wrapper = factory();
      wrapper.get('input[type="text"]').setValue("Some new task");
      await wrapper.get('input[type="text"]').trigger("keyup.enter");
      await wrapper.find("#pending").trigger("click");
      expect(wrapper.html()).toContain("Some new task");
   });

   test("only showing completed tasks", async () => {
      const wrapper = factory();
      wrapper.get('input[type="text"]').setValue("Some new task");
      await wrapper.get('input[type="text"]').trigger("keyup.enter");
      await wrapper.get('input[type="checkbox"]').setValue(true);
      await wrapper.find("#completed").trigger("click");
      expect(wrapper.html()).toContain("Some new task");
      expect(wrapper.get("label p").classes()).toContain("checked");
   });

   test("can clear all tasks", async () => {
      const wrapper = factory();
      wrapper.get('input[type="text"]').setValue("Some new task");
      await wrapper.get('input[type="text"]').trigger("keyup.enter");
      await wrapper.find(".clear-btn").trigger("click");
      expect(wrapper.html()).toContain("You don't have any tasks");
   });

   test("no task should be created if the input is empty", async () => {
      const wrapper = factory();
      wrapper.get('input[type="text"]').setValue("");
      await wrapper.get('input[type="text"]').trigger("keyup.enter");
      expect(wrapper.html()).toContain("You don't have any tasks");
   });
});

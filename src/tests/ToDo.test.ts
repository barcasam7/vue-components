import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import ToDo from "../components/todo/Todo.vue";

describe("To Do Component", () => {
   test("renders correctly with no tasks", () => {
      const wrapper = mount(ToDo);
      expect(wrapper.text()).toContain("You don't have any tasks");
   });
});

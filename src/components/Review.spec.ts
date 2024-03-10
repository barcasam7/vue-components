import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Review from "./Review.vue";

function factory() {
   return mount(Review, {
      global: {
         stubs: {
            "v-icon": true,
         },
      },
   });
}

describe("A review component", () => {
   test("can move to the next one", async () => {
      const wrapper = factory();
      await wrapper.get(".next-btn").trigger("click");
      expect(wrapper.html()).toContain("anna johnson");
   });

   test("can move to the previous one", async () => {
      const wrapper = factory();
      await wrapper.get(".prev-btn").trigger("click");
      expect(wrapper.html()).toContain("bill anderson");
   });

   test("can randomly generate", async () => {
      const wrapper = factory();
      await wrapper.get(".random-btn").trigger("click");
      expect(wrapper.html()).not.toContain("susan smith");
   });

   test("if there is no more reviews on next click reset back to the first", async () => {
      const wrapper = factory();
      await wrapper.get(".next-btn").trigger("click");
      await wrapper.get(".next-btn").trigger("click");
      await wrapper.get(".next-btn").trigger("click");
      await wrapper.get(".next-btn").trigger("click");
      expect(wrapper.html()).toContain("susan smith");
   });
});

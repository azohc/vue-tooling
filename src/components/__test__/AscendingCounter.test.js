import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import AscendingCounter from "../AscendingCounter.vue";

describe("ascending counter", () => {
  it("counts from zero, up", async () => {
    expect(AscendingCounter).toBeTruthy();

    const wrapper = shallowMount(AscendingCounter);

    expect(wrapper.text()).toContain("0");

    await wrapper.get("button").trigger("click");

    expect(wrapper.text()).toContain("1");

    await wrapper.get("button").trigger("click");

    expect(wrapper.text()).toContain("2");
  });
});

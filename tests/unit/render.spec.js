/* eslint-disable no-undef */
import Weather from '../../src/components/weather.vue'
import { mount } from "@vue/test-utils";

describe("first render", () => {

  const wrapper = mount(Weather);

  const weatherInput = wrapper.find('#wInput');
  const weatherText = wrapper.find('#wText');

  it("default text value is 20", () => {
    expect(weatherText.text()).toBe('20');
  });

  it("default input value is 20", () => {
    expect(weatherInput.element.value).toBe('20');
  });
});
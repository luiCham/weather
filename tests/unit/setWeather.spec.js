/* eslint-disable no-undef */
import Weather from '../../src/components/weather.vue'
import { mount } from "@vue/test-utils";

describe("set weather value to 30", () => {
  const wrapper = mount(Weather);

  const weatherInput = wrapper.find('#wInput');
  const weatherText = wrapper.find('#wText');

  weatherInput.setValue(30);
  
  it("input value is set to 30", () => {
    expect(weatherInput.element.value).toBe('30');
  });

  it("text value is set to 30", () => {
    expect(weatherText.text()).toBe('30°');
  });
});
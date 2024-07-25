import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import i18next from "i18next";
import { ChangeLang } from "../components/ChangeLang";
import { WeatherContext } from "../context/context";

const mockChangeLang = jest.fn();

const renderWithContext = (component) => {
  return render(
    <WeatherContext.Provider value={{ changeLang: mockChangeLang }}>
      {component}
    </WeatherContext.Provider>,
  );
};

describe("ChangeLang Component", () => {
  beforeEach(() => {
    i18next.changeLanguage = jest.fn(); // Mock i18next.changeLanguage
    document.body.style.direction = "ltr"; // Reset the direction before each test
  });

  test("renders correctly", () => {
    renderWithContext(<ChangeLang />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  test("calls changeLang and i18next.changeLanguage when a new language is selected", async () => {
    renderWithContext(<ChangeLang />);

    await userEvent.selectOptions(screen.getByRole("combobox"), "ar");

    expect(mockChangeLang).toHaveBeenCalledWith("ar");
    expect(i18next.changeLanguage).toHaveBeenCalledWith("ar");
  });

  test("changes the page direction to rtl when Arabic is selected", async () => {
    renderWithContext(<ChangeLang />);

    await userEvent.selectOptions(screen.getByRole("combobox"), "ar");

    expect(document.body.style.direction).toBe("rtl");
  });

  test("changes the page direction to ltr when English is selected", async () => {
    renderWithContext(<ChangeLang />);

    await userEvent.selectOptions(screen.getByRole("combobox"), "en");

    expect(document.body.style.direction).toBe("ltr");
  });
});

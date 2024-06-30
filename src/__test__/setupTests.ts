import "@testing-library/jest-dom";

jest.mock("axios");
jest.mock("api/generated/graphql");

sessionStorage.clear();
localStorage.clear();

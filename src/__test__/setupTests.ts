import "@testing-library/jest-dom";

jest.mock("axios");
jest.mock("api/generated/graphql");

// for previous test fails
sessionStorage.clear();
localStorage.clear();

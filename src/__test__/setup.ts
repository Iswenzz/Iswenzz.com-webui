import "@testing-library/jest-dom/vitest";

vi.mock("axios");
vi.mock("api/generated/graphql");

sessionStorage.clear();
localStorage.clear();

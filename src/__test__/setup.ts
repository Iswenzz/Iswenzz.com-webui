import "@testing-library/jest-dom/vitest";

vi.mock("api/generated/graphql");

sessionStorage.clear();
localStorage.clear();

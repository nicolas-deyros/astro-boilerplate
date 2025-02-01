import { test, expect } from "@playwright/test";
import { exec, ChildProcess } from "child_process";
import fetch from "node-fetch";

async function waitForServer(url: string, timeout: number = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch (error) {
      console.log(error);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  throw new Error(`Server at ${url} did not become ready within ${timeout}ms`);
}

let serverProcess: ChildProcess;

test.beforeAll(async () => {
  serverProcess = exec("npm run dev");
  await waitForServer("http://localhost:4321/");
});

test.afterAll(() => {
  if (serverProcess) {
    serverProcess.kill();
  }
});

test("meta is correct", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  await page.waitForLoadState("load");
  await expect(page).toHaveTitle("Astro Boilerplate");
});

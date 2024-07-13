import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  paths: ['tests/features/*.feature'],
  require: ['tests/steps/*_steps.js'],
});

export default defineConfig({
  testDir,
  reporter: 'html',
});
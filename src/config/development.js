export const DEV_CONFIG = {
  // Development server settings
  SERVER: {
    PORT: 3000,
    HOST: 'localhost',
  },
  
  // API endpoints
  API: {
    BASE_URL: 'http://localhost:3001',
    TIMEOUT: 5000,
  },
  
  // Development features
  FEATURES: {
    SHOW_GRID: false,
    SHOW_OUTLINES: false,
    MOCK_API: true,
    SLOW_NETWORK: false,
  },
  
  // Development tools
  TOOLS: {
    KEYBOARD_SHORTCUTS: {
      TOGGLE_GRID: 'g',
      TOGGLE_OUTLINES: 'o',
      TOGGLE_SLOW_NETWORK: 'n',
      TOGGLE_MOCK_API: 'm',
    },
  },
}; 
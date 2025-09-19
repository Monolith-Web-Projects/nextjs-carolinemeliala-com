// For using
// const res = await fetch(`${urlConfig.apiBaseUrl}/slides/`);

// export const urlConfig = {
  // apiBaseUrl: "http://localhost:8000/api",
// };

export const urlConfig = {
  apiBaseUrl:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_API_URL || 'http://django:8000/api'
      : process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
};
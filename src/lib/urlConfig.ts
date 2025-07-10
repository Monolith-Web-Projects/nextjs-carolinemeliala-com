export const urlConfig = {
  apiBaseUrl:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_API_URL || 'http://django:8000/api' // Docker internal host
      : process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
};
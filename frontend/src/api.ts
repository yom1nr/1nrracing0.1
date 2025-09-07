// frontend/src/api.ts
import axios from 'axios';

// ใส่ URL backend ของคุณตรงนี้ (ถ้าจะเปลี่ยนเป็น production ให้แก้ที่นี่)
const baseURL = 'http://localhost:4000';

export const api = axios.create({ baseURL });

// interceptor แนบ Authorization ถ้ามี token ใน localStorage
api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('token');
    if (token && config && config.headers) {
      // @ts-ignore
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {
    // ignore
  }
  return config;
}, (err) => Promise.reject(err));

export async function login(email: string, password: string) {
  return (await api.post('/auth/login', { email, password })).data;
}

export async function register(name: string, email: string, password: string) {
  return (await api.post('/auth/register', { name, email, password })).data;
}

export default api;

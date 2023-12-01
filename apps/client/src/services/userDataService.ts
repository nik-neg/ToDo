```
```typescript
import axios from 'axios';

const API_URL = '/api/users';

// Service to handle user data related API requests
const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/profile`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateProfile = async (userData) => {
  try {
    const response = await axios.put(`${API_URL}/profile`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const userDataService = {
  getUserProfile,
  updateProfile,
};

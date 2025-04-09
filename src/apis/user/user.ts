import axios from "@/axios.config";

// get all user
export const getAllUsers = async () => {
  // API endpoint for getting the user
  const URL = "/api/user";

  try {
    // Include the session token in the Authorization header
    const response = await axios.get(URL);
    // Handle the response from the server
    if (response.status == 200) {
      return response.data; // Return the user data
    } else {
      // Handle failure
      throw new Error(`Failed: ${response.data.message}`);
    }
  } catch (error: any) {
    throw new Error(`Error during request: ${error.message}`);
  }
};

//get current user
export const getCurrentUser = async () => {
  // API endpoint for getting the current user
  const URL = "/api/user/current-user";

  try {
    const response = await axios.get(URL);
    if (response.status == 200) {
      return response.data.user; // Return the user data
    } else {
      // Handle failure
      throw new Error(`Failed: ${response.data.message}`);
    }
  } catch (error: any) {
    throw new Error(`Error during request: ${error.message}`);
  }
};

//update user info
export const updateUserInfo = async (userData: {
  id: string;
  [key: string]: any;
}) => {
  // API for updating user information
  const URL = `/api/user/${userData.id}`;
  try {
    const response = await axios.put(URL, userData);
    if (response.status == 200) {
      return response.data.message; // Return the updated user data
    } else {
      throw new Error(`Failed: ${response.data.message}`);
    }
  } catch (error: any) {
    throw new Error(`Error during request: ${error.message}`);
  }
};

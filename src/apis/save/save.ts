import axios from "@/axios.config";

// get all save
export const getAllSave = async (id: string) => {
  // API endpoint for getting the save
  const URL = "/api/save";

  try {
    // Include the session token in the Authorization header
    const response = await axios.post(URL, id);
    // Handle the response from the server
    if (response.status == 200) {
      return response.data; // Return the data
    } else {
      // Handle failure
      throw new Error(`Failed: ${response.data.message}`);
    }
  } catch (error: any) {
    throw new Error(`Error during request: ${error.message}`);
  }
};

// create save
export const createSave = async (id: string) => {
  // API endpoint for getting the save
  const URL = "/api/save/create-save";

  try {
    // Include the session token in the Authorization header
    const response = await axios.post(URL, { postId: id });
    // Handle the response from the server
    if (response.status == 200) {
      return response.data; // Return the data
    } else {
      // Handle failure
      throw new Error(`Failed: ${response.data.message}`);
    }
  } catch (error: any) {
    throw new Error(`Error during request: ${error.message}`);
  }
};

import axios from "@/axios.config";

// get all useful
export const getAllUseful = async (id: string) => {
  // API endpoint for getting the useful
  const URL = "/api/useful";

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

// create useful
export const createUseful = async (id: string) => {
  // API endpoint for getting the useful
  const URL = "/api/useful/create-useful";

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

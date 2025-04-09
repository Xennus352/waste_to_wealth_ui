import axios from "@/axios.config";

// get all likes
export const getAllLikes = async (id: string) => {
  // API endpoint for getting the like
  const URL = "/api/like";

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

// create like
export const createLike = async (id: string) => {
  // API endpoint for getting the like
  const URL = "/api/like/create-like";

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

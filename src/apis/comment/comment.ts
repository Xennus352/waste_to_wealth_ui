import axios from "@/axios.config";

// get all comments
export const getAllComments = async (id: string) => {
  // API endpoint for getting the comment
  const URL = "/api/comment/" + id;

  try {
    // Include the session token in the Authorization header
    const response = await axios.get(URL);
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

// create comment
export const createComment = async (commentData: { [key: string]: any }) => {
  // API endpoint for getting the comment
  const URL = "/api/comment/create-comment/" + commentData.postId;

  try {
    // Include the session token in the Authorization header
    const response = await axios.post(URL, commentData);
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

import axios from "@/axios.config";

// get all feedback
export const getAllFeedbacks = async () => {
  // API endpoint for getting the feedback
  const URL = "/api/feedback";

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

// create feedback
export const createFeedback = async (feedbackData: { [key: string]: any }) => {
  // API for updating user information
  const URL = `/api/feedback/create-feedback`;
  try {
    const response = await axios.post(URL, feedbackData);
    if (response.status == 200) {
      return response.data; // Return the updated user data
    } else {
      throw new Error(`Failed: ${response.data.message}`);
    }
  } catch (error: any) {
    throw new Error(`Error during request: ${error.message}`);
  }
};

// delete feedback
export const deleteFeedback = async (id: string) => {
  try {
    // API for updating user information
    const URL = `/api/feedback/${id}`;
    const response = await axios.post(URL, id);

    if (response.status == 200) {
      return response.data.message;
    }
  } catch (error: any) {
    throw new Error(`Error during request: ${error.message}`);
  }
};

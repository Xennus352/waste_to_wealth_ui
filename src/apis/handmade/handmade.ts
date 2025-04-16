import axios from "@/axios.config";

// get all guide
export const getAllGuides = async () => {
  // API endpoint for getting the guide
  const URL = "/api/handmade";

  try {
    // Include the session token in the Authorization header
    const response = await axios.get(URL);
    // Handle the response from the server
    if (response.status == 200) {
      return response.data; // Return the post data
    } else {
      // Handle failure
      throw new Error(`Failed: ${response.data.message}`);
    }
  } catch (error: any) {
    throw new Error(`Error during request: ${error.message}`);
  }
};


//get single guide
export const getSingleGuide = async (id: string) => {
  try {
    // API for updating guide information
    const URL = `/api/handmade/${id}`;
    const response = await axios.get(URL);

    if (response.status == 200) {
      return response.data;
    }
  } catch (error: any) {
    throw new Error(`Error during request: ${error.message}`);
  }
};

// create guide
export const createGuide = async (postData: { [key: string]: any }) => {
  // API for creating guide information
  const URL = "/api/handmade/add-guide";

  try {
    const response = await axios.post(URL, postData);

    if (response.status == 201) {
      return response.data; // Return the updated user data
    } else {
      throw new Error(`Failed: ${response.data.message}`);
    }
  } catch (error: any) {
    throw new Error(`Error during request: ${error.message}`);
  }
};

// update guide
export const updateGuide = async (postData: {
  id: string;
  [key: string]: any;
}) => {
  try {
    // API for updating post information
    const URL = `/api/handmade/${postData.id}`;

    const response = await axios.put(URL, postData);

    if (response.status == 200) {
      return response.data;
    }
  } catch (error: any) {
    throw new Error(`Error during request: ${error.message}`);
  }
};

// delete guide
export const deleteGuide = async (id: string) => {
  try {
    // API for updating user information
    const URL = `/api/handmade/${id}`;
    const response = await axios.delete(URL);

    if (response.status == 200) {
      return response.data.message;
    }
  } catch (error: any) {
    throw new Error(`Error during request: ${error.message}`);
  }
};

import axios from "@/axios.config";

// get all posts
export const getAllPosts = async () => {
  // API endpoint for getting the post
  const URL = "/api/post";

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

// create post
export const createPost = async (postData: { [key: string]: any }) => {
  // API for updating user information
  const URL = `/api/post/create-post`;
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

//get single post
export const getSinglePost = async (id: string) => {
  try {
    // API for updating user information
    const URL = `/api/post/${id}`;
    const response = await axios.get(URL);

    if (response.status == 200) {
      return response.data;
    }
  } catch (error: any) {
    throw new Error(`Error during request: ${error.message}`);
  }
};

// update post
export const updatePost = async (postData: {
  id: string;
  [key: string]: any;
}) => {
  try {
    // API for updating post information
    const URL = `/api/post/${postData.id}`;
 
    const response = await axios.put(URL, postData);

    if (response.status == 200) {
      return response.data;
    }
  } catch (error: any) {
    throw new Error(`Error during request: ${error.message}`);
  }
};

// delete post
export const deletePost = async (id: string) => {
  try {
    // API for updating user information
    const URL = `/api/post/${id}`;
    const response = await axios.delete(URL);

    if (response.status == 200) {
      return response.data.message;
    }
  } catch (error: any) {
    throw new Error(`Error during request: ${error.message}`);
  }
};

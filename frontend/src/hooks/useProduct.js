import axios from "axios";

const useProduct = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/v1/product")
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

export default useProduct;
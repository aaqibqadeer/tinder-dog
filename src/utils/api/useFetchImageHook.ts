import { useCallback, useState } from "react";
import { ImageState } from "../../types";
import { ImageResponse } from "../../types/ImageResponse";
import { api } from "./index";

export const useFetchImage = () => {
  const [res, setRes] = useState<ImageState>({
    success: false,
    loading: false,
    status: null,
    imageLink: "",
  });

  const fetchImage = useCallback(async () => {
    setRes({
      success: false,
      loading: true,
      status: null,
      imageLink: "",
    });

    try {
      const fetch = await api.get("breeds/image/random");
      const response: ImageResponse = fetch.data;
      setRes({
        success: true,
        loading: false,
        status: response.status.toString(),
        imageLink: response.message,
      });
    } catch (error) {
      setRes({
        success: false,
        loading: false,
        status: "failed",
        imageLink: "",
      });
    }
  }, []);

  return {
    res,
    fetchImage,
  };
};

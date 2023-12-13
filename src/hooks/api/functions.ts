export const handleApiError = (error: any) => {
  return new Promise((resolve, reject) => {
    if (error.name === "AbortError") {
      console.info("[Cancelled] ", error);
      resolve(undefined);
    } else {
      console.error("[ERROR] ", error);
      reject(error);
    }
  });
};
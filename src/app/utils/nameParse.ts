// --- fix any later
// export const TransformTitle = (obj: any) => {
//   console.log(obj)
//     {{ console.log("TransformTitle called with:", obj); }}
// };

export const CallAPI = async () => {
  try {
    const response = await fetch("/api/parseCsv");
    if (!response.ok) {
      console.log("response failed to load");
      return null;
    }
    const data = await response.json();

    console.log("Data fetched from /api/parseCsv:", data);
    // const keys = TransformTitle(data);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

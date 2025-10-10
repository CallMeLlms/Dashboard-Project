// --- fix any later
export const ParsedTitleName = async () => {
  try {
    const response = await fetch("/api/parseCsv");
    if (!response.ok) {
      console.log("response failed to load");
      return null;
    }
    const data = await response.json();
    // console.log("Data fetched from /api/parseCsv:", data);
    const keys = TransformTitle(data);
    
    return keys;
  } catch (err) {
    console.log(err);
    return null;
  }
};



export const TransformTitle = (obj: any) => {
  let keys = Object.keys(obj[0])
  return keys
};

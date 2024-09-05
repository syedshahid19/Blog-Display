export const fetchData = async ()=>{
    try {
       const response = await fetch("https://pdfing.ai:7000/vlogs");
       const data = await response.json();
       return data; 
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};
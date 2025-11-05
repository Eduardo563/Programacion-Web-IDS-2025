const options = {
    headers: {
        'x-api-key': 'live_ovauCxxMn9QIsR8opeVUGM1HXcVGlZGrpCTb5CObqYTrwaq56xAi9GvuXI6Tdkca'
    }
}

function getPageCount(response) {
    const total = parseInt(response.headers.get('Pagination-Count'));
    const limit = parseInt(response.headers.get('Pagination-Limit'));
    return Math.ceil(total / limit);
}


export async function getBreeds(page,limit){
    const apiURL = "https://api.thecatapi.com/v1/breeds";
    const detailApi = "https://api.thecatapi.com/v1/images/(id)"; 
    try{
        const response = await fetch(`${apiURL}?limit=${limit}&page=${page-1}`,options);
        if(!response.ok){
            throw new Error("Error" + response.status);
        }
        let pageCount = getPageCount(response);
        return {
            breeds: await response.json(),
            pageCount
        };
    }catch (error) {
        console.error(error);
    }
}

export async function getDetail(id){
    const detailApi = `https://api.thecatapi.com/v1/images/${id}`; 
    try{
        const response = await fetch(detailApi,options);
        if(!response.ok){
            throw new Error("Error" + response.status);
        }
        return await response.json(); 
    }catch (error) {
        console.error(error);
    }
}

